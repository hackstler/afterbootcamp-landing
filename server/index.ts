import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import type { FormData } from '../src/shared/types';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
});

app.use(express.json());

app.get('/cors-test', (req, res) => {
  res.json({ ok: true });
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  },
  debug: true,
  logger: true
});

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, country, message } = req.body as FormData;
  const calendlyLink = process.env.CALENDLY_LINK;

  const htmlMessage = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <p>Hola ${firstName},</p>
      <p>Gracias por solicitar información sobre nuestras mentorías After-bootcamp.</p>
      <p>Puedes reservar tu primera sesión 100% gratis con nosotros en el siguiente enlace:</p>
      <p><a href="${calendlyLink}" style="color: #007BFF;">Reserva tu sesión</a></p>
      <p>Saludos,</p>
      <p>El equipo de Mentorías After-Bootcamp</p>
      <br>
      <div style="border-top: 1px solid #ccc; padding-top: 10px; background-color: white;">
        <img src="https://storage.googleapis.com/afterbootcamp/openart-image_Zssjbb-I_1716376231201_raw.png" alt="AfterBootcamp Logo" style="height: 50px; background-color: white;">
        <p style="margin: 0; color: #555;">AfterBootcamp</p>
        <p style="margin: 0; color: #555;">Tu éxito, nuestra misión.</p>
        <p style="margin: 0; color: #555;">Email: sergio@afterbootcamp.com | Teléfono: 699 211 701</p>
        <p style="margin: 0; color: #555;">
          <a href="https://afterbootcamp.es" style="color: #007BFF;">Visita nuestra web</a> | 
          <a href="https://linkedin.com/company/afterbootcamp" style="color: #007BFF;">LinkedIn</a> | 
          <a href="https://twitter.com/afterbootcamp" style="color: #007BFF;">Twitter</a>
        </p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.YOUR_EMAIL,
    subject: "Nuevo lead de mentorías post-bootcamp",
    text: `
      Nombre: ${firstName} ${lastName}
      Correo: ${email}
      Teléfono: ${phoneNumber}
      País: ${country}
      Mensaje: ${message}
    `,
  };

  const confirmationMailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Confirmación de solicitud de información",
    text: `Hola ${firstName},

    Gracias por solicitar información sobre nuestras mentorías After-bootcamp. Nos pondremos en contacto contigo pronto.

    Saludos,
    El equipo de Mentorías After-Bootcamp`,
    html: htmlMessage,
  };

  try {
    const message = await transporter.sendMail(mailOptions);
    console.log("🚀 ~ POST ~ message:", message);
    await transporter.sendMail(confirmationMailOptions);
    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
});

app.listen(port, async () => {
  try {
    console.log('🔧 Configuración SMTP:');
    console.log(`   Host: ${process.env.SMTP_HOST}`);
    console.log(`   Port: ${process.env.SMTP_PORT}`);
    console.log(`   User: ${process.env.GMAIL_USER}`);
    console.log(`   Pass: ${process.env.GMAIL_PASS ? '******' : 'no definida'}`);
    
    await transporter.verify();
    console.log('✅ Conexión SMTP establecida correctamente');
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
  } catch (error) {
    console.error('❌ Error al conectar con el servidor SMTP:', error);
    process.exit(1);
  }
}); 