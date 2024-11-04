"use client";

import { useEffect, useState } from "react";

type JewelryItem = {
  id: number;
  name: string;
  price: number;
};

export default function JewelryPage() {
  const [jewelry, setJewelry] = useState<JewelryItem[]>([]);

  useEffect(() => {
    const fetchJewelry = async () => {
      const res = await fetch("/api/jewelry");
      const data = await res.json();
      setJewelry(data);
    };
    fetchJewelry();
  }, []);

  return (
    <div>
      <h1>Jewelry Collection</h1>
      <ul>
        {jewelry.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
