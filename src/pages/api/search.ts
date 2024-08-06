import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client/extension";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { q: query } = req.query;

      if (typeof query !== "string") {
        throw new Error("Invalid request");
      }

      const products = await prisma.post.findMany({
        where: {
          OR: [
            {
              name: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: query,
                mode: "insensitive",
              },
            },
          ],
        },
      });

      res.status(200).json({ products });
    } catch (error) {
      res.status(500).end();
    }
  }
}
