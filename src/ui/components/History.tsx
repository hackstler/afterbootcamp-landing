import { CTA } from './CTA';

export const History = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-[#e6e9f4] [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-[#f8f9fc]">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-[#4768fa]">
                Afterbootcamp
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#0d0f1c] sm:text-4xl">
                De Trabajar en un Cine a Fundar una Consultoría de Éxito
              </h1>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-[#0d0f1c] shadow-xl ring-1 ring-[#e6e9f4]/10 sm:w-[57rem]"
            src="https://storage.googleapis.com/afterbootcamp/IMG_4229.JPG"
            alt="oficina"
            width={912}
            height={608}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-[#47579e] lg:max-w-lg">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-[#0d0f1c]">El Comienzo</h2>
                <p className="text-justify">
                  <span className="font-bold">Soy Sergio, tengo 29 años</span> y
                  aunque no cuento con formación reglada, soy un desarrollador
                  de software y DevOps apasionado. Hoy quiero compartir mi
                  historia, una historia de transformación, perseverancia y
                  éxito que espero te inspire a seguir tus sueños, sin importar
                  los obstáculos.
                </p>
                <p className="text-justify">
                  Hace unos años, me encontraba trabajando en un cine. Llevaba
                  dos años en ese empleo, pero{" "}
                  <span className="font-bold">
                    sentía que no era mi destino
                  </span>
                  . No me llenaba y no me veía haciendo ese trabajo toda mi
                  vida. Además, tenía varios préstamos que sumaban varios miles
                  de euros, lo que añadía una gran presión a mi vida. Fue
                  entonces cuando, navegando en InfoJobs, encontré una
                  oportunidad que cambiaría mi vida: un bootcamp de
                  programación. Aunque era un proceso de selección competitivo,
                  decidí intentarlo.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-[#0d0f1c]">
                  El Desafío del Bootcamp
                </h2>
                <p className="text-justify">
                  Había estado coqueteando con la programación por un tiempo,
                  pero nunca me había sumergido por completo. Decidí lanzarme y,
                  para mi sorpresa, fui aceptado en el bootcamp.{" "}
                  <span className="font-bold">
                    Fue un proceso duro e intenso
                  </span>
                  , pero también fue una etapa de gran crecimiento personal.
                  Hasta ese momento, nunca me había esforzado tanto por algo. La
                  programación se convirtió en un antes y un después en mi vida.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-[#0d0f1c]">
                  Encontrando Mentores y Creciendo
                </h2>
                <p className="text-justify">
                  En el bootcamp, conocí no solo a uno sino a dos de mis
                  futuros socios, las personas con las que más rápidamente
                  he crecido. Tener su apoyo fue crucial para mí.{" "}
                  <span className="font-bold">
                    Me proporcionaron una guía constante, validación en cada
                    paso que daba
                  </span>{" "}
                  y me ayudó a seguir el camino correcto. Gracias a este
                  apoyo, en poco tiempo, me posicioné como un desarrollador
                  completo y versátil.
                </p>
                <p className="text-justify">
                  Pero no solo fueron dos; he tenido la suerte de contar con
                  varios mentores a lo largo de mi carrera, y a todos ellos
                  les estoy profundamente agradecido.{" "}
                  <span className="font-bold">
                    Sin su ayuda, no sería posible hoy estar aquí
                  </span>
                  , ayudando a otros a alcanzar ese ansiado nivel de
                  seniority, a hacer las cosas bien y a evolucionar de forma
                  ágil y constante en sus carreras tech.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-[#0d0f1c]">
                  Expandiendo Horizontes
                </h2>
                <p className="text-justify">
                  Pronto me di cuenta de que un desarrollador de software no
                  puede limitarse solo a programar. Necesita tener una{" "}
                  <span className="font-bold">
                    visión 360 de cómo funciona la tecnología
                  </span>
                  . Por eso, decidí hacer otro bootcamp mientras trabajaba
                  como DevOps. Esta decisión me proporcionó una visión más
                  amplia del mundo tech y complementó mi perfil de manera
                  significativa.
                </p>
                <p className="text-justify">
                  Continué formándome con diferentes cursos y siguiendo los
                  pasos de mis mentores. Finalmente, después de solo cuatro
                  años desde que empecé a programar,{" "}
                  <span className="font-bold">
                    logré montar una empresa de consultoría de éxito
                  </span>
                  . Este logro no hubiera sido posible sin la ayuda y guía
                  de todas las personas que me instruyeron, ayudaron y
                  apoyaron en el camino.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-[#0d0f1c]">
                  El Compromiso con el Futuro
                </h2>
                <p className="text-justify">
                  El mundo tech es complejo y siempre está en constante cambio.
                  Adaptarse puede ser difícil y pueden surgir problemas como el
                  síndrome del impostor, el burnout y la incertidumbre
                  constante. Por eso,{" "}
                  <span className="font-bold">
                    he decidido dar al mundo la oportunidad que me dieron a mí
                  </span>
                  . Quiero compartir los conocimientos y la experiencia
                  necesarios para que otros puedan evolucionar en sus carreras
                  tech sin morir en el intento.
                </p>
                <p className="text-justify">
                  En AfterBootcamp, mi objetivo es ayudarte a crecer en tu
                  carrera tech. He estado en tu lugar, he enfrentado los mismos
                  retos y sé lo que se necesita para alcanzar el éxito.{" "}
                  <span className="font-bold">
                    Juntos, podemos lograr que tu carrera despegue
                  </span>{" "}
                  y que te conviertas en el profesional que siempre has querido
                  ser. ¡Únete a nosotros y transforma tu futuro hoy!
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <CTA
          title="¿Listo para dar el siguiente paso en tu carrera?"
          primaryButtonText="Reserva una sesión gratuita"
          secondaryButtonText="Empieza tu roadmap hoy"
        />
      </div>
    </div>
  );
}; 