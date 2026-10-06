"use client";

import Link from "next/link";
import { useState } from "react";
import type { QuizItem } from "@/data/questions";

const LETTERS = ["a", "b", "c", "d"];

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Props = { title: string; rules?: string; items: QuizItem[]; showExamTitle: boolean };

export default function Quiz({ title, rules, items, showExamTitle }: Props) {
  const [order, setOrder] = useState<QuizItem[]>(items);
  const [index, setIndex] = useState(0);
  // answers[i] = option chosen for order[i], or undefined if not answered yet
  const [answers, setAnswers] = useState<(number | undefined)[]>([]);
  const [finished, setFinished] = useState(false);

  const answeredCount = answers.filter((a) => a !== undefined).length;
  const score = order.reduce((n, q, i) => n + (answers[i] === q.correct ? 1 : 0), 0);

  function restart(shuffle: boolean) {
    setOrder(shuffle ? shuffled(items) : items);
    setIndex(0);
    setAnswers([]);
    setFinished(false);
  }

  function choose(option: number) {
    if (answers[index] !== undefined) return;
    const next = [...answers];
    next[index] = option;
    setAnswers(next);
  }

  if (finished) {
    const missed = order
      .map((q, i) => ({ q, chosen: answers[i] }))
      .filter(({ q, chosen }) => chosen !== q.correct);
    return (
      <div>
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 text-center">
          <p className="text-slate-600">Your score</p>
          <p className="text-4xl font-bold text-slate-900">
            {score} / {order.length}
          </p>
          <p className="text-slate-500">{Math.round((score / order.length) * 100)}%</p>
        </div>

        {missed.length > 0 && (
          <div className="mt-6">
            <h2 className="font-semibold text-slate-900">Review ({missed.length})</h2>
            <ul className="mt-3 space-y-3">
              {missed.map(({ q, chosen }, i) => (
                <li key={i} className="rounded-lg border border-slate-200 bg-white p-4 text-sm">
                  {showExamTitle && <p className="text-xs text-slate-500">{q.examTitle}</p>}
                  <p className="font-medium text-slate-900">
                    Q{q.number}. {q.text}
                  </p>
                  {chosen !== undefined ? (
                    <p className="mt-1 text-red-700">
                      Your answer: {LETTERS[chosen]}) {q.options[chosen]}
                    </p>
                  ) : (
                    <p className="mt-1 text-slate-500">Not answered</p>
                  )}
                  <p className="text-green-700">
                    Correct: {LETTERS[q.correct]}) {q.options[q.correct]}
                  </p>
                  <p className="mt-1 text-slate-600">{q.explanation}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={() => restart(false)} className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Retry
          </button>
          <button onClick={() => restart(true)} className="rounded-md border border-slate-300 bg-white px-4 py-2 hover:bg-slate-50">
            Retry shuffled
          </button>
          <Link href="/" className="rounded-md border border-slate-300 bg-white px-4 py-2 hover:bg-slate-50">
            Back to exams
          </Link>
        </div>
      </div>
    );
  }

  const q = order[index];
  const chosen = answers[index];
  const answered = chosen !== undefined;

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="text-sm text-blue-700 hover:underline">
          ← All exams
        </Link>
        <button onClick={() => restart(true)} className="text-sm text-blue-700 hover:underline">
          Shuffle &amp; restart
        </button>
      </div>
      <h1 className="mt-3 text-2xl font-bold text-slate-900">{title}</h1>
      {rules && <p className="mt-2 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-900">{rules}</p>}

      <div className="mt-4 flex justify-between text-sm text-slate-600">
        <span>
          Question {index + 1} / {order.length}
        </span>
        <span>
          Score: {score} / {answeredCount}
        </span>
      </div>
      <div className="mt-2 h-1.5 rounded-full bg-slate-200">
        <div className="h-1.5 rounded-full bg-blue-600" style={{ width: `${((index + 1) / order.length) * 100}%` }} />
      </div>

      <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
        {showExamTitle && <p className="mb-1 text-xs text-slate-500">{q.examTitle}</p>}
        <h2 className="text-lg font-semibold text-slate-900">
          {q.number}. {q.text}
        </h2>

        {q.image && (
          <figure className="mt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={q.image.src} alt="Question diagram" className="w-full rounded border border-slate-200" />
            <figcaption className="mt-1 text-xs text-slate-500">{q.image.caption}</figcaption>
          </figure>
        )}

        <div className="mt-4 space-y-2">
          {q.options.map((opt, i) => {
            let style = "border-slate-200 hover:border-blue-400 hover:bg-blue-50";
            if (answered) {
              if (i === q.correct) style = "border-green-500 bg-green-50 text-green-900 font-medium";
              else if (i === chosen) style = "border-red-500 bg-red-50 text-red-900";
              else style = "border-slate-200 text-slate-500";
            }
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                disabled={answered}
                className={`flex w-full items-start gap-2 rounded-md border px-3 py-2 text-left ${style}`}
              >
                <span className="text-slate-500">{LETTERS[i]})</span>
                <span className="flex-1">{opt}</span>
                {answered && i === q.correct && <span>✓</span>}
                {answered && i === chosen && i !== q.correct && <span>✗</span>}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="mt-4 space-y-2 text-sm">
            <p className={chosen === q.correct ? "font-semibold text-green-700" : "font-semibold text-red-700"}>
              {chosen === q.correct ? "Correct!" : `Wrong — the correct answer is ${LETTERS[q.correct]}).`}
            </p>
            <p className="text-slate-700">{q.explanation}</p>
            {q.note && (
              <p className="border-l-4 border-amber-400 bg-amber-50 px-3 py-2 text-amber-900">
                <strong>Note:</strong> {q.note}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setIndex(index - 1)}
          disabled={index === 0}
          className="rounded-md border border-slate-300 bg-white px-4 py-2 disabled:opacity-40"
        >
          Previous
        </button>
        {index < order.length - 1 ? (
          <button onClick={() => setIndex(index + 1)} className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Next
          </button>
        ) : (
          <button onClick={() => setFinished(true)} className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
            Finish
          </button>
        )}
      </div>
    </div>
  );
}
