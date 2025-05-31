import type { NavigationItem, ProgramStep, Service, Testimonial, Mentor } from '../types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Inicio', href: '#' },
  { label: 'Historia', href: '/historia' },
  { label: 'Programa', href: '#programa' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Testimonios', href: '#testimonios' }
];

export const MENTOR: Mentor = {
  name: 'Sergio Pérez',
  role: 'Senior Developer & DevOps Engineer',
  description: 'De trabajar en un cine a fundar su propia consultoría de éxito, Sergio te guiará en tus primeros pasos en la industria tech.',
  image: 'https://storage.googleapis.com/afterbootcamp/foto-landing-sergio.jpeg'
};

export const PROGRAM_STEPS: ProgramStep[] = [
  {
    id: 'start',
    title: 'Punto de Partida',
    description: 'Establecer metas y evaluar fortalezas y debilidades.',
    icon: 'Flag',
  },
  {
    id: 'program',
    title: 'El Programa',
    description: 'Planificación estratégica, puntos de control y apoyo continuo.',
    icon: 'RoadHorizon',
  },
  {
    id: 'goal',
    title: 'Alcanzando la Meta',
    description: 'Objetivos alcanzados, habilidades adquiridas y próximos pasos.',
    icon: 'Trophy',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'mentoring',
    title: 'Mentorías Personalizadas',
    description: 'Evaluación de carrera, sesiones individuales y grupales.',
    icon: 'Users',
  },
  {
    id: 'projects',
    title: 'Colaboración en Proyectos',
    description: 'Definición de objetivos y plan de acción personalizado.',
    icon: 'CodaLogo',
  },
  {
    id: 'experience',
    title: 'Experiencia Laboral (Próximamente)',
    description: 'Colaboración con profesionales de la industria y carta de recomendación.',
    icon: 'Briefcase',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'sofia',
    name: 'Sofia',
    role: 'Desarrolladora Junior',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCswAt1nPxfSIz7-FSws6J7A7ErVnlzdIf6AoBqntMUUFKknAQYTc4CXQztegU3KmrqGTNhoi1oACPOpT0HZ44ExmX3l6_LqnFxvm0L3DmiUIrSCbcPC8tMD45AcHfMzbqoC9Oi9ev8h2ueUZPrS1HEg0mgGOr4Xd0dqAmDkkt1NVYAXDzKebZLNtdxno3dLb6tdLgweY57VkXzukOiAByUJ1eMwm0PRHON4TtdErDB7qtJJfGfvvSaf07xT2FZTK0ONy5MUNROAXNH',
    quote: 'Gracias a la mentoría de Ricardo, pude definir mi camino profesional y conseguir mi primer trabajo como desarrolladora.',
  },
  {
    id: 'mateo',
    name: 'Mateo',
    role: 'Ingeniero de Software',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA37rUzYkY73chQD7Geb6L7PSHuavsyuoVYbvX0d3femyHP0llC-42YIZuzWKH6SCGYeihJwOsQ9Qc9Pt5vJQfp8vqiX_nVoMKDmy9vh4skUzQhmbsc5BNmae1jtnCE-mjZO2RjOrU0PqKLf8Juqh1k2NIyqrDwmTtaMLbUHXYEEsT11GOQmV7hs9_ECPu9vpAOfVb09ZaHKFYMOVRgan74-ME6zKhy5zx743-guuev8HZ_44MOt9pbbuh3mQOgQZ6cOA2DYJ1Nin9L',
    quote: 'El programa me ayudó a superar mis inseguridades y a adaptarme rápidamente a la industria tech.',
  },
  {
    id: 'elena',
    name: 'Elena',
    role: 'Desarrolladora Web',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2FxmeyC7h-PobLUaSfrLg77NVBpHszPGI0CouZ-LBej-MigiaDiyBSsmvxzZs08jvUA1_Ni8D9HCcvqZYU4LuJGyUkA2Rgp8eVYJaXMgKBM8xnLaLWA43fEAFTGJU0ipUJh3lx9tiP32qJQI0--3sngDNODqnNn78WZftXSVaNkMCym2pTiOJ2X6LQnI0oA89UV3KUNDte0fjgDxaNpd49hZwIc8LbwxPWHMuSxylpgDyeQCcXnDtxWo8dH_Db7XrQU88v5uEHXo9',
    quote: 'La experiencia de colaborar en proyectos reales fue clave para mi crecimiento y confianza.',
  },
]; 