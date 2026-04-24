export type NavigationItem = {
  label: string;
  href: string;
};

export type Problem = {
  tag: string;
  title: string;
  description: string;
  sergio: string;
};

export type Villain = {
  kind: string;
  title: string;
  description: string;
  quote: string;
};

export type Project = {
  big?: boolean;
  kind: string;
  title: string;
  description: string;
  tech: string[];
};

export type StackItem = {
  label: string;
  name: string;
  info: string;
};

export type MethodStep = {
  number: string;
  time: string;
  title: string;
  description: string;
  tags: string[];
};

export type MentorData = {
  name: string;
  role: string;
  photo: string;
  bio: string[];
  creds: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  initials: string;
  quote: string;
};

export type FAQItem = {
  question: string;
  answer: string;
  sergio: string | null;
};

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  message: string;
};
