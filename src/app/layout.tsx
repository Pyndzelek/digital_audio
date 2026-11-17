import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Audio – Exam Practice",
  description: "Practice exam questions for Digital Audio Processing (Topics 1, 2, 3, 4 & 5)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
