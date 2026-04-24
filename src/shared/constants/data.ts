import type { NavigationItem, Problem, Villain, Project, StackItem, MethodStep, MentorData, Testimonial, FAQItem } from '../types/index';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Manifiesto', href: '#manifesto' },
  { label: 'Método', href: '#metodo' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Mentor', href: '#mentor' },
  { label: 'FAQ', href: '#faq' },
];

export const MARQUEE_ITEMS = [
  'MENTORÍA 1:1 · SIN PAQUETES CERRADOS',
  'CÓDIGO QUE VA A PRODUCCIÓN',
  'SESIÓN 0€ · SIN COMPROMISO',
  'NUEVA SESIÓN CADA SEMANA',
  'DE DEV A DEV',
  'GIJÓN / REMOTO',
];

export const HERO_STRIP_ITEMS = [
  'CÓDIGO REAL',
  'MENTOR SENIOR',
  'SESIONES SEMANALES',
  'CODE REVIEW',
  'IA APLICADA',
  'PROYECTO REAL',
  'SIN PAQUETES CERRADOS',
  'DE DEV A DEV',
];

export const TERMINAL_SCRIPT = [
  { type: 'sys' as const, text: '$ ./after-bootcamp --status', wait: 500 },
  { type: 'sys' as const, text: 'booting mentor · v2026.04', wait: 300 },
  { type: 'sys' as const, text: '', wait: 150 },
  { type: 'out' as const, text: '▸ mentor: Sergio Pérez', wait: 450 },
  { type: 'out' as const, text: '▸ años en sector: 7', wait: 350 },
  { type: 'out' as const, text: '▸ commits en producción: sí', wait: 400 },
  { type: 'out' as const, text: '▸ masterclass de 8h: no', wait: 400 },
  { type: 'sys' as const, text: '', wait: 150 },
  { type: 'usr' as const, text: '> ¿y la IA me quita el curro?', wait: 700 },
  { type: 'warn' as const, text: '✗ ese discurso lo vende gente', wait: 400 },
  { type: 'warn' as const, text: '  que nunca ha puesto software', wait: 400 },
  { type: 'warn' as const, text: '  en producción. la ignorancia', wait: 400 },
  { type: 'warn' as const, text: '  es muy valiente cuando no', wait: 350 },
  { type: 'warn' as const, text: '  tiene que mantener lo que', wait: 350 },
  { type: 'warn' as const, text: '  despliega.', wait: 300 },
  { type: 'sys' as const, text: '', wait: 150 },
  { type: 'usr' as const, text: '> reservar sesión', wait: 500 },
  { type: 'out' as const, text: '▸ ok. sin compromiso.', wait: 350 },
];

export const PROBLEMS: Problem[] = [
  {
    tag: 'RECIÉN SALIDO',
    title: 'Tienes stack. Te falta rumbo.',
    description: 'Mandas CVs al vacío, te contestan con silencio y no sabes si el problema es tu perfil, tu portfolio o el mercado. Aquí te lo digo claro.',
    sergio: 'a ver bro, enséñame el código.',
  },
  {
    tag: 'MID · 2-3 AÑOS',
    title: 'Picas código. Tu stack suena a 2022.',
    description: 'La industria va de agentes, tools y RAG. Tú mirando. No es falta de talento — es que nadie te ha enseñado qué merece la pena aprender hoy.',
    sergio: 'esto más que una PR es un castigo.',
  },
  {
    tag: 'SENIOR',
    title: 'La IA va a cambiar el juego. Quieres liderar — no sufrirlo.',
    description: 'Ya picas bien. Lo que te jode es no saber qué adoptar, qué ignorar y cómo traducirlo al resto sin parecer un bluff.',
    sergio: 'criterio propio no se descarga del NPM.',
  },
];

export const VILLAINS: Villain[] = [
  {
    kind: 'Nivel 1',
    title: 'El influencer de IA',
    description: 'Nunca ha trabajado de desarrollador ni de técnico. Antes vendía cursos de fotografía, copywriting o productividad. Ahora vende IA porque toca. Cero código en producción, mucho LinkedIn.',
    quote: '"un mono con un AK-47 también dispara — eso no significa que sepa lo que hace"',
  },
  {
    kind: 'Nivel 2',
    title: 'El fundador "no-code"',
    description: 'Dice que crea un SaaS en 15 minutos con Bubble y tres prompts. El agente produce un pegamento frágil que revienta al primer usuario real.',
    quote: '"arquitectura pegada con celo"',
  },
  {
    kind: 'Nivel 3',
    title: 'El bootcamp express',
    description: 'Vende "dev senior en 6 meses" a gente que no sabía encender el ordenador. Cobra 8k, entrega humo. Los alumnos acaban aquí.',
    quote: '"6 meses para ser dev — o vaya fraude"',
  },
  {
    kind: 'Nivel 4',
    title: 'El gurú que "ya no programa"',
    description: 'Hace 5 años que no hace un commit. Da masterclass de 8h sobre "el futuro de la IA". El futuro se lo paga otro.',
    quote: '"opinar sobre IA desde Notion"',
  },
];

export const PROJECTS: Project[] = [
  {
    big: true,
    kind: 'SAAS · WHATSAPP',
    title: 'SaaS gestionado desde WhatsApp',
    description: 'Gestión por lenguaje natural — generación de presupuestos, agendado de reuniones, envío de emails. Multi-agente orquestador + subagentes especializados. Producción real, clientes reales.',
    tech: ['LangGraph', 'Mastra', 'WhatsApp API', 'Postgres'],
  },
  {
    kind: 'MULTI-AGENTE',
    title: 'Sistema multi-agente de cotizaciones',
    description: 'Orquestador con tres subagentes especializados que automatizan el ciclo completo de gestión de presupuestos. Menos manual, más márgen.',
    tech: ['LangGraph', 'Vercel AI SDK', 'pgvector'],
  },
  {
    kind: 'RAG EN PROD',
    title: 'Agente de gestión documental',
    description: 'RAG para consulta y clasificación de documentación interna + conexión a Slack para pedir y gestionar docs. Reduce drásticamente los tiempos de búsqueda.',
    tech: ['pgvector', 'Slack API', 'FastAPI'],
  },
  {
    kind: 'INFERENCIA',
    title: 'Agente de inferencia de facturas',
    description: 'Orquestador multi-proceso que extrae y estructura datos de facturas heterogéneas automáticamente. Cero introducción manual.',
    tech: ['LangChain', 'OpenAI', 'Postgres'],
  },
  {
    kind: 'MATCHING',
    title: 'Requirements Analyst Assistant',
    description: 'Agente que cruza lo que pide el cliente con lo que sabe hacer tu equipo y te genera un informe de fit automático. Adiós a los excels infinitos.',
    tech: ['Mastra', 'pgvector', 'Anthropic'],
  },
];

export const STACK: StackItem[] = [
  { label: 'MODELOS', name: 'LLMs', info: 'Claude · Codex · Gemini' },
  { label: 'ORQUESTACIÓN', name: 'Agents', info: 'LangGraph · Mastra · Vercel AI SDK' },
  { label: 'RETRIEVAL', name: 'RAG', info: 'pgvector · LangChain · embeddings' },
  { label: 'RUNTIME', name: 'Infra', info: 'Node.js · FastAPI · Docker · K8s' },
  { label: 'CLOUD', name: 'Infra', info: 'AWS · GCP · OpenShift' },
  { label: 'DATOS', name: 'Storage', info: 'Postgres · MongoDB · MikroORM' },
  { label: 'IDE', name: 'AI coding', info: 'Cursor · Claude Code · Codex' },
  { label: 'CI/CD', name: 'DevOps', info: 'Bitbucket Pipelines · Docker' },
  { label: 'PRODUCTO', name: 'SaaS', info: 'React · TS · Fastify' },
  { label: 'TÚ', name: 'Criterio', info: 'saber cuándo NO usar IA' },
];

export const METHOD: MethodStep[] = [
  {
    number: '01',
    time: '1-2 SEM',
    title: 'Diagnóstico',
    description: 'Miro tu código, tu perfil, tus objetivos. Te digo si esto es para ti — y si no, también. Sales con un plan escrito, no con promesas.',
    tags: ['Audit', 'Objetivos', 'Plan'],
  },
  {
    number: '02',
    time: '6-12 SEM',
    title: 'Construcción',
    description: 'Sesiones 1:1 semanales + proyecto real con IA. Code review de lo que escribes. Desbloqueos cuando te atascas. Sin esperar a la "siguiente cohorte".',
    tags: ['1:1', 'Proyecto', 'Code review'],
  },
  {
    number: '03',
    time: '2-4 SEM',
    title: 'Lanzamiento',
    description: 'Portfolio, perfil, prep de entrevistas técnicas y de IA. Rondas conmigo. Sales con algo que enseñar, no con un certificado.',
    tags: ['Portfolio', 'Entrevistas', 'GTM'],
  },
];

export const MENTOR: MentorData = {
  name: 'Sergio Pérez',
  role: 'Senior Dev · AI Engineer · DevOps',
  photo: 'https://storage.googleapis.com/afterbootcamp/foto-landing-sergio.jpeg',
  bio: [
    '<strong>7 años de carrera</strong> en diferentes empresas como ingeniero full stack y co-fundador de consultora técnica. Los últimos <strong>2 años, full IA aplicada</strong>: sistemas multi-agente, RAGs en producción y un SaaS que se gestiona enteríto desde WhatsApp en lenguaje natural.',
    'He liderado equipos, dado clase en bootcamps, impartido <strong>workshops de IA</strong> y hecho mentoría individual. Diseño software, diseño infraestructura y sigo escribiendo código a diario — <em>no soy el tío que ya no programa.</em>',
    'Me gusta enseñar, me gusta que me pregunten cosas y me gusta que la gente con la que trabajo acabe sabiendo más que yo. Si buscas alguien cercano que te hable claro — <em>dale, vamos al lío.</em>',
  ],
  creds: [
    '7 años en el sector',
    'Liderazgo de equipos técnicos',
    'Profesor en bootcamp full stack',
    'Mentoría individual 1:1',
    'Workshops de IA aplicada',
    'Co-fundador de consultora tech',
  ],
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Jonathan Toaquiza',
    role: 'Grado Superior · Automatización IA',
    initials: 'JT',
    quote: 'Me ayudó a preparar el proyecto de final de grado superior — saqué un 9. Y a los dos meses estaba firmando mi primer trabajo en automatización con IA.',
  },
  {
    name: 'David R.',
    role: 'Estudiante · FP DAW',
    initials: 'DR',
    quote: 'En mi módulo daban Git por sentado y no lo explicaban bien. Sergio me bajó a lo básico sin hacerme sentir tonto — ramas, rebase, resolver conflictos. Lo que debería haber sido el día 1, me lo explicó él.',
  },
  {
    name: 'Marta L.',
    role: 'Junior Backend · 1 año',
    initials: 'ML',
    quote: 'Llevaba meses atascada con mi primer proyecto con LLMs. En dos sesiones me ordenó la cabeza, replanteamos la arquitectura y paramos de parchear. Ahora sé por qué hago cada cosa.',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: '¿Esto es solo para gente de bootcamp?',
    answer: 'No. Si vienes de grado, FP, máster, autodidacta o llevas años picando — encajas. El nombre es guiño, el programa es para cualquiera en tech que quiera pivotar a IA con criterio.',
    sergio: 'el nombre engaña, el método no.',
  },
  {
    question: '¿Tengo que saber programar?',
    answer: 'Sí. Esto no enseña a programar desde cero. Si ya tienes base y quieres especializarte o integrar IA — adelante. Si vienes de cero cero, un bootcamp primero y luego hablamos.',
    sergio: null,
  },
  {
    question: '¿La IA me va a quitar el curro?',
    answer: 'Tu curro tal y como lo haces hoy — probablemente sí. Pero los devs que saben integrar IA multiplican por 3 su impacto. Aquí te pongo en el lado correcto. Los que te dicen lo contrario están vendiendo software para monos.',
    sergio: 'papito, no te vayas a creer al de LinkedIn.',
  },
  {
    question: '¿Cuánto dura?',
    answer: 'Depende de dónde estés. Hay quien está listo en 2 meses y quien necesita 4. En la sesión gratuita vemos tu punto de partida y te digo un rango honesto — no un paquete cerrado de 6 meses.',
    sergio: null,
  },
  {
    question: '¿Mentoría o formación?',
    answer: 'Ambas. Mentoría 1:1 para dirección, proyecto real para construir, workshops puntuales para herramientas concretas. Todo integrado, todo adaptado a ti.',
    sergio: null,
  },
  {
    question: '¿Cuánto cuesta?',
    answer: 'Depende del formato. La primera sesión es gratis y no es comercial — es un diagnóstico. Si encajamos, te paso precios. Si no encajamos, te lo digo y cada uno a su casa.',
    sergio: 'si vengo con el pitch preparado, cierra la pestaña.',
  },
];
