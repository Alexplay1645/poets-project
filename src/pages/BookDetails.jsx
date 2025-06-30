import React from 'react';
import { useParams } from 'react-router-dom';
import TarasBooks from '../data/TarasBooks';
import FrancoBooks from '../data/FrancoBooks';
import LesyaBooks from '../data/LesyaBooks';

const BookDetails = () => {
  const { poetId, bookId } = useParams();

  let books;
  if (poetId.toLowerCase() === 'franco') {
    books = FrancoBooks.books;
  } else if (poetId.toLowerCase() === 'lesya') {
    books = LesyaBooks.books;
  } else {
    books = TarasBooks.books;
  }

  const book = books.find(b => b.id === parseInt(bookId));

  return (
    <div style={{ display: 'flex', padding: '40px', gap: '30px' }}>
      <img src={book.image} alt={book.title} style={{ width: '250px', borderRadius: '10px' }} />
      <div>
        <h2>{book.title}</h2>
        <p>{book.content}</p>
      </div>
    </div>
  );
};


export default BookDetails;
