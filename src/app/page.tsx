import Link from "next/link";
import { exams, totalQuestions, totalQuestionsTopics345 } from "@/data/questions";

export default function Home() {
  const topics345Exams = exams.filter((e) => e.id.startsWith("topics-345"));
  const pastExams = exams.filter((e) => !e.id.startsWith("topics-345"));

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-10">
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-semibold text-blue-800">
            Exam Prep 🎯
          </span>
          <span className="text-xs text-slate-500">English Translation &amp; Detailed Explanations</span>
        </div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
          Digital Audio Processing
        </h1>
        <p className="mt-1 text-slate-600">
          Interactive multiple-choice practice for your upcoming exam in 3 days.
        </p>
      </div>

      {/* TOPICS 3, 4 & 5 SECTION */}
      <section className="mt-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            🔥 Upcoming Exam: Topics 3, 4 &amp; 5
          </h2>
          <span className="text-xs font-medium text-slate-500">
            {totalQuestionsTopics345} questions total
          </span>
        </div>
        <p className="mt-0.5 text-xs text-slate-500">
          Audio Processing (Blocks, EQ, Dynamics), Perceptual Compression (MPEG, ATRAC), and 3D / Spatial Audio (Binaural, Ambisonics, WFS, VBAP).
        </p>

        <ul className="mt-4 space-y-3">
          {topics345Exams.map((exam) => (
            <li key={exam.id}>
              <Link
                href={`/quiz/${exam.id}`}
                className="group flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50/40 p-4 transition-all hover:border-blue-400 hover:bg-blue-50 hover:shadow-sm"
              >
                <div>
                  <span className="block font-semibold text-slate-900 group-hover:text-blue-700">
                    {exam.title}
                  </span>
                  <span className="text-xs text-slate-500">{exam.subtitle}</span>
                </div>
                <span className="ml-4 shrink-0 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                  {exam.questions.length} Qs
                </span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/quiz/all-345"
              className="flex items-center justify-between rounded-xl border border-blue-600 bg-blue-600 p-4 text-white shadow-sm transition hover:bg-blue-700"
            >
              <div>
                <span className="block font-bold">🚀 Practice All Topics 3, 4 &amp; 5</span>
                <span className="text-xs text-blue-100">
                  Combined marathon of all 3 PDFs ({totalQuestionsTopics345} questions)
                </span>
              </div>
              <span className="ml-4 shrink-0 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold text-white">
                {totalQuestionsTopics345} questions
              </span>
            </Link>
          </li>
        </ul>
      </section>

      {/* TOPICS 1 & 2 SECTION */}
      <section className="mt-10 border-t border-slate-200 pt-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-bold text-slate-800">
            📚 Previous Exams: Topics 1 &amp; 2
          </h2>
          <span className="text-xs font-medium text-slate-500">
            Sampling, Quantization, Dither, Overlap, Jitter
          </span>
        </div>

        <ul className="mt-4 space-y-2.5">
          {pastExams.map((exam) => (
            <li key={exam.id}>
              <Link
                href={`/quiz/${exam.id}`}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <span>
                  <span className="block text-sm font-medium text-slate-800">{exam.title}</span>
                  <span className="text-xs text-slate-500">{exam.subtitle}</span>
                </span>
                <span className="ml-4 shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">
                  {exam.questions.length}
                </span>
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/quiz/all"
              className="flex items-center justify-between rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-slate-800 transition hover:bg-slate-200"
            >
              <span className="text-sm font-semibold">All Questions (Entire Course)</span>
              <span className="ml-4 rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-700">
                {totalQuestions}
              </span>
            </Link>
          </li>
        </ul>
      </section>

      <footer className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
        <p>
          Questions translated and structured with full theoretical explanations based on the University of Alicante Digital Audio Processing course syllabus.
        </p>
      </footer>
    </main>
  );
}
