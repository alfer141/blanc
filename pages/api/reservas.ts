import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    nombre,
    whatsapp,
    correo,
    sucursal,
    programa,
    nitewhite,
    metodo,
  } = req.body;

  try {
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        Nombre: { title: [{ text: { content: nombre } }] },
        WhatsApp: { phone_number: whatsapp },
        Correo: { email: correo },
        Sucursal: { select: { name: sucursal } },
        Programa: { select: { name: programa } },
        NiteWhite: { checkbox: nitewhite },
        'Método de reserva': { select: { name: metodo } },
        Estado: { select: { name: 'Cita recibida' } },
      },
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error al guardar en Notion:', error);
    res.status(500).json({ error: 'Algo salió mal al guardar la reserva.' });
  }
}
