import { notFound } from "next/navigation";
import Quiz from "@/components/Quiz";
import { exams, getQuizItems } from "@/data/questions";

export function generateStaticParams() {
  return [...exams.map((e) => ({ examId: e.id })), { examId: "all" }];
}

export default async function QuizPage({ params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params;
  const quiz = getQuizItems(examId);
  if (!quiz) notFound();

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-8">
      <Quiz title={quiz.title} rules={quiz.rules} items={quiz.items} showExamTitle={examId === "all"} />
    </main>
  );
}
