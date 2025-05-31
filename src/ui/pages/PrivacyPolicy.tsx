import { SEO } from '../components/SEO';

export const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Política de Privacidad | AfterBootcamp"
        description="Política de privacidad de AfterBootcamp. Información sobre cómo recopilamos, usamos y protegemos tus datos personales."
      />
      <div className="container mx-auto p-6 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-[#0d0f1c]">Política de Privacidad</h1>
        <p className="mb-4 text-[#0d0f1c]">Última actualización: 19/06/2024</p>

        <h2 className="text-2xl font-semibold mb-4 text-[#0d0f1c]">
          1. Información que Recopilamos
        </h2>
        <p className="mb-4 text-[#0d0f1c]">
          Recopilamos la siguiente información personal cuando usted llena nuestro
          formulario de contacto o suscripción:
        </p>
        <ul className="list-disc list-inside mb-4 text-[#0d0f1c]">
          <li>Nombre y apellidos</li>
          <li>Correo electrónico</li>
          <li>Número de teléfono</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#0d0f1c]">
          2. Cómo Utilizamos su Información
        </h2>
        <p className="mb-4 text-[#0d0f1c]">
          Usamos la información que recopilamos de las siguientes maneras:
        </p>
        <ul className="list-disc list-inside mb-4 text-[#0d0f1c]">
          <li>
            Para comunicarnos con usted en relación a nuestras formaciones y
            mentorías.
          </li>
          <li>
            Para enviarle información, actualizaciones y ofertas especiales
            relacionadas con nuestros servicios.
          </li>
          <li>
            Para mejorar nuestro servicio y personalizar su experiencia en nuestro
            sitio web.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#0d0f1c]">
          3. Divulgación de su Información
        </h2>
        <p className="mb-4 text-[#0d0f1c]">
          No vendemos, comercializamos ni transferimos de ninguna otra manera a
          terceros su información personal, a menos que le notifiquemos con
          antelación. Esto no incluye a terceros de confianza que nos asisten en
          la operación de nuestro sitio web, siempre que esas partes acuerden
          mantener esta información confidencial.
        </p>
        <p className="mb-4 text-[#0d0f1c]">
          Podemos divulgar su información cuando creamos que la divulgación es
          apropiada para cumplir con la ley, hacer cumplir nuestras políticas del
          sitio o proteger nuestros derechos, propiedad o seguridad.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-[#0d0f1c]">
          4. Seguridad de su Información
        </h2>
        <p className="mb-4 text-[#0d0f1c]">
          Implementamos una variedad de medidas de seguridad para mantener la
          seguridad de su información personal. Utilizamos métodos de encriptación
          y seguridad de datos para proteger la información transmitida y
          almacenada.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-[#0d0f1c]">5. Derechos del Usuario</h2>
        <p className="mb-4 text-[#0d0f1c]">
          Dependiendo de su ubicación, usted puede tener ciertos derechos en
          relación con su información personal, incluidos los derechos de acceso,
          corrección, eliminación y oposición al procesamiento de sus datos
          personales. Si desea ejercer cualquiera de estos derechos, puede ponerse
          en contacto con nosotros a través de la información de contacto
          proporcionada a continuación.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-[#0d0f1c]">6. Cookies</h2>
        <p className="mb-4 text-[#0d0f1c]">
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Las
          cookies son pequeños archivos que un sitio o su proveedor de servicios
          transfiere a su computadora a través de su navegador web (si usted lo
          permite) que permiten a los sistemas del sitio o del proveedor de
          servicios reconocer su navegador y capturar y recordar cierta
          información.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-[#0d0f1c]">
          7. Cambios en Nuestra Política de Privacidad
        </h2>
        <p className="mb-4 text-[#0d0f1c]">
          Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le
          notificaremos cualquier cambio publicando la nueva Política de
          Privacidad en esta página. Se le recomienda revisar esta Política de
          Privacidad periódicamente para cualquier cambio.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-[#0d0f1c]">8. Contacto</h2>
        <p className="mb-4 text-[#0d0f1c]">
          Si tiene alguna pregunta sobre esta Política de Privacidad, puede
          contactarnos a través de:
        </p>
        <ul className="list-disc list-inside mb-4 text-[#0d0f1c]">
          <li>Correo electrónico: sergio@afterbootcamp.es</li>
          <li>Teléfono: 699211701</li>
        </ul>
      </div>
    </>
  );
}; 