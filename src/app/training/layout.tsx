import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Training: AI/ML, Java & Python Full Stack",
  description: "AI & Machine Learning, Java Full Stack and Python Full Stack training for students, led by industry experts. Offered by Krudex Global in collaboration with NovaSkill Hub.",
  alternates: { canonical: "/training" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
