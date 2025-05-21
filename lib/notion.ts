import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function crearReservaEnNotion(datos: {
  nombre: string;
  whatsapp: string;
  correo: string;
  sucursal: string;
  programa: string;
  nitewhite: boolean;
  metodo: string;
}) {
  const response = await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID!,
    },
    properties: {
      Nombre: {
        title: [{ text: { content: datos.nombre } }],
      },
      WhatsApp: {
        rich_text: [{ text: { content: datos.whatsapp } }],
      },
      Correo: {
        email: datos.correo,
      },
      Sucursal: {
        select: { name: datos.sucursal },
      },
      Programa: {
        select: { name: datos.programa },
      },
      NiteWhite: {
        checkbox: datos.nitewhite,
      },
      'Método de reserva': {
        select: { name: datos.metodo },
      },
      Estado: {
        select: { name: 'Cita recibida' },
      },
    },
  });

  return response;
}
