export interface Testimonial {
  feedback: string;
  name: string;
  country: string;
}

export const testimonials: Testimonial[] = [
  {
    feedback: 'He did a great job! Thank you for your excellent work!!!',
    name: 'Tom G.',
    country: 'Germany',
  },
  {
    feedback: 'Very fast and knowledgeable!',
    name: 'Joseph T.',
    country: 'United States',
  },
  {
    feedback: 'Very good man and we will collaborate a lot in the future for sure!',
    name: 'Mohammad B.',
    country: 'Kuwait',
  },
];
