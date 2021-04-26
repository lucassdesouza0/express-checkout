import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "services/products";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
  res.status(200).json([
    {
      name: "Dry Dog Food - Chicken",
      variants: [
        { size: "3kg", price: 35.0 },
        { size: "10kg", price: 45.0 },
        { size: "20kg", price: 55.0 },
      ],
    },
    {
      name: "Dry Dog Food - Lamb & Rice",
      variants: [
        { size: "3kg", price: 35.0 },
        { size: "10kg", price: 45.0 },
        { size: "20kg", price: 55.0 },
      ],
    },
    {
      name: "Dry Dog Food - Vegetables",
      variants: [
        { size: "3kg", price: 35.0 },
        { size: "10kg", price: 45.0 },
        { size: "20kg", price: 55.0 },
      ],
    },
    {
      name: "Dry Dog Food - Sports",
      variants: [
        { size: "3kg", price: 35.0 },
        { size: "10kg", price: 45.0 },
        { size: "20kg", price: 55.0 },
      ],
    },
    {
      name: "Dry Dog Food - Diet",
      variants: [
        { size: "3kg", price: 45.0 },
        { size: "10kg", price: 55.0 },
        { size: "20kg", price: 65.0 },
      ],
    },
  ]);
}
