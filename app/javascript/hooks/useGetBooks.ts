import { gql } from '@apollo/client';
import { useGetBooksQuery } from 'frontend/generated/useGetBooks.generated';
import BookFields from 'frontend/hooks/BookFields';

export const GET_BOOKS = gql`
${BookFields}
  query GetBooks($first: Int, $after: String="") {
    books(first: $first, after: $after) {
      edges {
        node {
          ...BookFields
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
    }
  }
`;

export { useGetBooksQuery };