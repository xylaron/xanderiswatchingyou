import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, phone, email, message } = req.body;

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
