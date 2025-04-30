export interface WhyChooseUsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string[];
}

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: 1,
    title: "Industry-Relevant Curriculum",
    description: "Learn skills that employers are actively seeking today.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: [
      "Curriculum designed with industry experts",
      "Regular updates to keep pace with industry trends",
      "Focus on practical skills over theoretical knowledge",
      "Real-world projects and case studies"
    ]
  },
  {
    id: 2,
    title: "Learn from Industry Experts",
    description: "Get taught by professionals with years of industry experience.",
    image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: [
      "Instructors from top companies like Google, Amazon, and Microsoft",
      "Personalized mentorship sessions",
      "Industry insights and best practices",
      "Networking opportunities with professionals"
    ]
  },
  {
    id: 3,
    title: "Placement Assistance",
    description: "Get support in finding the right job after course completion.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: [
      "Resume and LinkedIn profile building",
      "Interview preparation and mock interviews",
      "Access to exclusive job opportunities",
      "Career counseling and guidance"
    ]
  },
  {
    id: 4,
    title: "Flexible Learning",
    description: "Study at your own pace with flexible learning options.",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: [
      "Weekend batches for working professionals",
      "Recorded sessions for revision",
      "24/7 doubt resolution support",
      "Self-paced learning options"
    ]
  }
];