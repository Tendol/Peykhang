import type * as Types from '../types/graphql';

import { gql } from '@apollo/client';
export type AuthorFieldsFragment = (
  { __typename: 'Author' }
  & Pick<Types.Author, 'id' | 'firstName' | 'lastName'>
);

export const AuthorFieldsFragmentDoc = gql`
    fragment AuthorFields on Author {
  id
  firstName
  lastName
}
    `;