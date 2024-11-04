"use client";

import { useEffect, useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
};

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("/api/books");
      const data = await res.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book Collection</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
