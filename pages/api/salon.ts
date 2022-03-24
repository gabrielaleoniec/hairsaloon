// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import list from "./data/salons/salonList.json";
import { SalonType } from "../../src/interfaces/salon";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SalonType>
) {
  const getSalonBySlug = (slug: SalonType["slug"]) => {
    return list.find((salon) => salon.slug === slug);
  };
  switch (req.method) {
    case "GET":
      const slug = req.query?.slug;
      if (!slug) {
        res.status(404).end(`slug param missing`);
      }
      if (typeof slug !== "string") {
        return res.status(405).end(`Method ${req.method} Not Allowed`);
      }
      const salon = getSalonBySlug(slug);
      if (!salon) {
        return res.status(404).end(`No salon found of address ${slug}`);
      }
      return res.status(200).json(salon);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
