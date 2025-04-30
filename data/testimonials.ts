export interface Testimonial {
  id: number;
  name: string;
  image: string;
  role: string;
  company: string;
  testimonial: string;
  course: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Arjun Kapoor",
    image: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    role: "Software Engineer",
    company: "Microsoft",
    testimonial: "The Full Stack Development course completely transformed my career. I went from a junior developer to landing a job at Microsoft within just 6 months of completing the program.",
    course: "Full Stack Web Development"
  },
  {
    id: 2,
    name: "Shreya Gupta",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    role: "Data Scientist",
    company: "IBM",
    testimonial: "The practical approach and industry-relevant curriculum helped me transition from a non-technical background to becoming a data scientist. The mentorship was invaluable.",
    course: "Data Science & Machine Learning"
  },
  {
    id: 3,
    name: "Rohan Mehta",
    image: "https://images.pexels.com/photos/3785106/pexels-photo-3785106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    role: "Digital Marketing Manager",
    company: "Zomato",
    testimonial: "I learned more practical skills in 4 months than I did in 2 years at my previous job. The ROI on this course has been incredible for my career growth.",
    course: "Digital Marketing"
  }
];