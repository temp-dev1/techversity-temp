export interface HowItWorksStep {
  id: number;
  title: string;
  description: string;
  icon: string; // Using Lucide React icon names
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: 1,
    title: "Choose Your Course",
    description: "Browse our wide range of courses and select the one that aligns with your career goals.",
    icon: "Search"
  },
  {
    id: 2,
    title: "Enroll & Start Learning",
    description: "Complete the enrollment process and gain immediate access to course materials.",
    icon: "BookOpen"
  },
  {
    id: 3,
    title: "Learn From Experts",
    description: "Attend live classes, work on projects, and get mentorship from industry professionals.",
    icon: "Users"
  },
  {
    id: 4,
    title: "Get Certified",
    description: "Complete the course, pass assessments, and receive industry-recognized certification.",
    icon: "Award"
  },
  {
    id: 5,
    title: "Land Your Dream Job",
    description: "Utilize our placement services to secure interviews with top companies in the industry.",
    icon: "Briefcase"
  }
];