export interface Course {
  id: number;
  title: string;
  category: string;
  image: string;
  duration: string;
  level: string;
  rating: number;
  reviews: number;
  price: number;
  discountedPrice: number;
  features: string[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Data Science & Machine Learning Bootcamp",
    category: "Data Science",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "6 Months",
    level: "Intermediate",
    rating: 4.8,
    reviews: 450,
    price: 49999,
    discountedPrice: 39999,
    features: ["Live Classes", "1:1 Mentorship", "Industry Projects", "Job Assistance"]
  },
  {
    id: 2,
    title: "Full Stack Web Development Program",
    category: "Web Development",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "5 Months",
    level: "Beginner to Advanced",
    rating: 4.7,
    reviews: 380,
    price: 45999,
    discountedPrice: 35999,
    features: ["MERN Stack", "Cloud Deployment", "Real Projects", "Placement Support"]
  },
  {
    id: 3,
    title: "Digital Marketing Master Course",
    category: "Marketing",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "4 Months",
    level: "All Levels",
    rating: 4.6,
    reviews: 320,
    price: 39999,
    discountedPrice: 29999,
    features: ["SEO & SEM", "Social Media", "Analytics", "Content Strategy"]
  },
  {
    id: 4,
    title: "Cloud Computing & DevOps Certification",
    category: "Cloud Computing",
    image: "https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "5 Months",
    level: "Intermediate",
    rating: 4.9,
    reviews: 410,
    price: 47999,
    discountedPrice: 37999,
    features: ["AWS/Azure/GCP", "CI/CD", "Docker & Kubernetes", "Infrastructure as Code"]
  },
  {
    id: 5,
    title: "UI/UX Design Professional Program",
    category: "Design",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "4 Months",
    level: "Beginner Friendly",
    rating: 4.7,
    reviews: 290,
    price: 41999,
    discountedPrice: 31999,
    features: ["Figma Mastery", "Design Systems", "Prototyping", "UX Research"]
  },
  {
    id: 6,
    title: "Artificial Intelligence & Deep Learning",
    category: "AI",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "6 Months",
    level: "Advanced",
    rating: 4.9,
    reviews: 370,
    price: 54999,
    discountedPrice: 44999,
    features: ["Neural Networks", "Computer Vision", "NLP", "Reinforcement Learning"]
  }
];

export const allCourses: Course[] = [
  ...courses,
  {
    id: 7,
    title: "Product Management Certification",
    category: "Product Management",
    image: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "4 Months",
    level: "Intermediate",
    rating: 4.8,
    reviews: 310,
    price: 43999,
    discountedPrice: 33999,
    features: ["Roadmapping", "Agile & Scrum", "User Stories", "Product Analytics"]
  },
  {
    id: 8,
    title: "Blockchain Development Bootcamp",
    category: "Blockchain",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "5 Months",
    level: "Advanced",
    rating: 4.7,
    reviews: 280,
    price: 49999,
    discountedPrice: 39999,
    features: ["Smart Contracts", "DeFi", "Web3", "Solidity"]
  },
  {
    id: 9,
    title: "Cybersecurity Professional Program",
    category: "Cybersecurity",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "6 Months",
    level: "Intermediate to Advanced",
    rating: 4.9,
    reviews: 340,
    price: 51999,
    discountedPrice: 41999,
    features: ["Ethical Hacking", "Network Security", "Incident Response", "Security Compliance"]
  },
  {
    id: 10,
    title: "Financial Analysis & Modeling",
    category: "Finance",
    image: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "4 Months",
    level: "All Levels",
    rating: 4.6,
    reviews: 260,
    price: 42999,
    discountedPrice: 32999,
    features: ["Excel Mastery", "Financial Statements", "Valuation Models", "Investment Analysis"]
  },
  {
    id: 11,
    title: "Mobile App Development Specialization",
    category: "Mobile Development",
    image: "https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "5 Months",
    level: "Intermediate",
    rating: 4.8,
    reviews: 320,
    price: 46999,
    discountedPrice: 36999,
    features: ["React Native", "Flutter", "App Deployment", "UI/UX for Mobile"]
  },
  {
    id: 12,
    title: "Business Analytics & Data Visualization",
    category: "Business Analytics",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "4 Months",
    level: "Beginner to Intermediate",
    rating: 4.7,
    reviews: 290,
    price: 43999,
    discountedPrice: 33999,
    features: ["Tableau", "Power BI", "SQL", "Data Storytelling"]
  },
];