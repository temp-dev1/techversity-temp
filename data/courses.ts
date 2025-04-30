export interface Course {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  duration: string;
  level: string;
  price: number;
  discountedPrice: number;
  nextBatch: string;
  category: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    rating: 4.8,
    reviews: 350,
    duration: "5 Months",
    level: "Beginner to Advanced",
    price: 45999,
    discountedPrice: 35999,
    nextBatch: "1st May, 2025",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    rating: 4.7,
    reviews: 420,
    duration: "6 Months",
    level: "Intermediate",
    price: 49999,
    discountedPrice: 39999,
    nextBatch: "10th May, 2025",
    category: "Data Science"
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
    rating: 4.6,
    reviews: 280,
    duration: "4 Months",
    level: "Beginner",
    price: 41999,
    discountedPrice: 31999,
    nextBatch: "15th May, 2025",
    category: "Design"
  },
  {
    id: 4,
    title: "Android App Development with Kotlin",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    rating: 4.5,
    reviews: 310,
    duration: "5 Months",
    level: "Intermediate",
    price: 44999,
    discountedPrice: 34999,
    nextBatch: "20th May, 2025",
    category: "Mobile Development"
  },
  {
    id: 5,
    title: "Cloud Computing with AWS",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
    rating: 4.9,
    reviews: 500,
    duration: "3 Months",
    level: "Advanced",
    price: 59999,
    discountedPrice: 49999,
    nextBatch: "25th May, 2025",
    category: "Cloud"
  },
  {
    id: 6,
    title: "Cybersecurity Fundamentals",
    image: "https://images.pexels.com/photos/30901560/pexels-photo-30901560/free-photo-of-scrabble-tiles-spelling-cybersecurity-concepts.jpeg",
    rating: 4.7,
    reviews: 390,
    duration: "4 Months",
    level: "Beginner",
    price: 42999,
    discountedPrice: 32999,
    nextBatch: "1st June, 2025",
    category: "Security"
  },
  {
    id: 7,
    title: "DevOps & CI/CD Tools",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
    rating: 4.6,
    reviews: 340,
    duration: "3.5 Months",
    level: "Intermediate",
    price: 45999,
    discountedPrice: 35999,
    nextBatch: "5th June, 2025",
    category: "DevOps"
  },
  {
    id: 8,
    title: "React Native Mobile App Development",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    rating: 4.8,
    reviews: 410,
    duration: "4.5 Months",
    level: "Intermediate",
    price: 47999,
    discountedPrice: 37999,
    nextBatch: "10th June, 2025",
    category: "Mobile Development"
  },
  {
    id: 9,
    title: "Python for Data Analysis",
    image: "https://images.pexels.com/photos/3861973/pexels-photo-3861973.jpeg",
    rating: 4.9,
    reviews: 620,
    duration: "3 Months",
    level: "Beginner",
    price: 39999,
    discountedPrice: 29999,
    nextBatch: "15th June, 2025",
    category: "Data Science"
  },
  {
    id: 10,
    title: "Artificial Intelligence with TensorFlow",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    rating: 4.8,
    reviews: 460,
    duration: "6 Months",
    level: "Advanced",
    price: 54999,
    discountedPrice: 44999,
    nextBatch: "20th June, 2025",
    category: "AI & Machine Learning"
  }
];
