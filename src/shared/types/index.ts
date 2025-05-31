export type Testimonial = {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type ProgramStep = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Mentor = {
  name: string;
  role: string;
  description: string;
  image: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  message: string;
}; 