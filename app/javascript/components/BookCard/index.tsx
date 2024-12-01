
import { Image } from 'antd';
import React from 'react';
import { GetBooksQuery } from 'frontend/generated/useGetBooks.generated';

interface BookCardProps {
  book?: GetBooksQuery['books']['edges'][number]['node'];
  handleBookSelect?:  (id: string | null | undefined) => void
}
const BookCard: React.FC<BookCardProps> = ({
  book,
  handleBookSelect
}: BookCardProps) => {

  return (
    <Image
      width={150}
      alt="Book cover"
      src="/assets/book.jpeg"
      onClick={() => handleBookSelect(book.id)}
    />
  );
};

export default BookCard;