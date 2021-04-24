import type { NextApiRequest, NextApiResponse } from "next";
import { ProductProps } from "services/products";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductProps[]>
) {
  res.status(200).json([
    {
      name: "Dry Dog Food - Chicken",
      variants: [
        { size: "3kg", price: "35.00" },
        { size: "10kg", price: "45.00" },
        { size: "20kg", price: "55.00" },
      ],
    },
    {
      name: "Dry Dog Food - Lamb & Rice",
      variants: [
        { size: "3kg", price: "35.00" },
        { size: "10kg", price: "45.00" },
        { size: "20kg", price: "55.00" },
      ],
    },
    {
      name: "Dry Dog Food - Vegetables",
      variants: [
        { size: "3kg", price: "35.00" },
        { size: "10kg", price: "45.00" },
        { size: "20kg", price: "55.00" },
      ],
    },
    {
      name: "Dry Dog Food - Sports",
      variants: [
        { size: "3kg", price: "35.00" },
        { size: "10kg", price: "45.00" },
        { size: "20kg", price: "55.00" },
      ],
    },
    {
      name: "Dry Dog Food - Diet",
      variants: [
        { size: "3kg", price: "45.00" },
        { size: "10kg", price: "55.00" },
        { size: "20kg", price: "65.00" },
      ],
    },
  ]);
}
