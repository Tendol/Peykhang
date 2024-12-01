import type * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import { AuthorFieldsFragmentDoc } from './AuthorFields.generated';
export type BookFieldsFragment = (
  { __typename: 'Book' }
  & Pick<Types.Book, 'id' | 'title' | 'isbn' | 'publishedDate'>
  & { authors?: Types.Maybe<Array<(
    { __typename: 'Author' }
    & Pick<Types.Author, 'id' | 'firstName' | 'lastName'>
  )>> }
);

export const BookFieldsFragmentDoc = gql`
    fragment BookFields on Book {
  id
  title
  isbn
  publishedDate
  authors {
    ...AuthorFields
  }
}
    ${AuthorFieldsFragmentDoc}`;