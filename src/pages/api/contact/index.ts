import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  interface Contact {
    name: string;
    phone: string;
    email: string;
    message: string;
  }

  const { name, phone, email, message } = req.body as Contact;

  const result = await prisma.contact.create({
    data: {
      name,
      phone,
      email,
      message,
    },
  });
  return res.status(200).json(result);
}
