import type * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import { BookFieldsFragmentDoc } from './BookFields.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetBookQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;


export type GetBookQuery = (
  { __typename: 'Query' }
  & { book?: Types.Maybe<(
    { __typename: 'Book' }
    & Pick<Types.Book, 'id' | 'title' | 'isbn' | 'publishedDate'>
    & { authors?: Types.Maybe<Array<(
      { __typename: 'Author' }
      & Pick<Types.Author, 'id' | 'firstName' | 'lastName'>
    )>> }
  )> }
);


export const GetBookDocument = gql`
    query GetBook($id: String!) {
  book(id: $id) {
    ...BookFields
  }
}
    ${BookFieldsFragmentDoc}`;

/**
 * __useGetBookQuery__
 *
 * To run a query within a React component, call `useGetBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookQuery(baseOptions: Apollo.QueryHookOptions<GetBookQuery, GetBookQueryVariables> & ({ variables: GetBookQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
      }
export function useGetBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
        }
export function useGetBookSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
        }
export type GetBookQueryHookResult = ReturnType<typeof useGetBookQuery>;
export type GetBookLazyQueryHookResult = ReturnType<typeof useGetBookLazyQuery>;
export type GetBookSuspenseQueryHookResult = ReturnType<typeof useGetBookSuspenseQuery>;
export type GetBookQueryResult = Apollo.QueryResult<GetBookQuery, GetBookQueryVariables>;
export function refetchGetBookQuery(variables: GetBookQueryVariables) {
      return { query: GetBookDocument, variables: variables }
    }