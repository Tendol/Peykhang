import { gql } from '@apollo/client';
import { useGetBookQuery } from 'frontend/generated/useGetBook.generated';
import BookFields from 'frontend/hooks/BookFields';

export const GET_BOOK = gql`
${BookFields}
  query GetBook($id: String!) {
    book(id: $id) {
      ...BookFields
    }
  }
`;

export default useGetBookQuery