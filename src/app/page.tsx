import Link from "next/link";
import { exams, totalQuestions } from "@/data/questions";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Digital Audio Processing</h1>
      <p className="mt-1 text-slate-600">
        Past exams · Topics 1 &amp; 2 · pick the correct answer for each question
      </p>

      <ul className="mt-8 space-y-3">
        {exams.map((exam) => (
          <li key={exam.id}>
            <Link
              href={`/quiz/${exam.id}`}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 hover:border-blue-400 hover:bg-blue-50"
            >
              <span>
                <span className="block font-medium text-slate-900">{exam.title}</span>
                <span className="text-sm text-slate-500">{exam.subtitle}</span>
              </span>
              <span className="ml-4 shrink-0 rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                {exam.questions.length}
              </span>
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/quiz/all"
            className="flex items-center justify-between rounded-lg border border-blue-600 bg-blue-600 px-4 py-3 text-white hover:bg-blue-700"
          >
            <span className="font-semibold">All questions</span>
            <span className="ml-4 rounded-full bg-white/20 px-3 py-1 text-sm">{totalQuestions}</span>
          </Link>
        </li>
      </ul>

      <p className="mt-8 text-xs text-slate-500">
        Answers were worked out from the question content and standard digital-audio theory (no
        official answer key). Questions marked with a Note are ambiguous — double-check them against
        your course notes.
      </p>
    </main>
  );
}
