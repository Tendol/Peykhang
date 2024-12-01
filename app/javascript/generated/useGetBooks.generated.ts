import type * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import { BookFieldsFragmentDoc } from './BookFields.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetBooksQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetBooksQuery = (
  { __typename: 'Query' }
  & { books?: Types.Maybe<(
    { __typename: 'BookConnection' }
    & Pick<Types.BookConnection, 'totalCount'>
    & { edges?: Types.Maybe<Array<Types.Maybe<(
      { __typename: 'BookEdge' }
      & Pick<Types.BookEdge, 'cursor'>
      & { node?: Types.Maybe<(
        { __typename: 'Book' }
        & Pick<Types.Book, 'id' | 'title' | 'isbn' | 'publishedDate'>
        & { authors?: Types.Maybe<Array<(
          { __typename: 'Author' }
          & Pick<Types.Author, 'id' | 'firstName' | 'lastName'>
        )>> }
      )> }
    )>>>, pageInfo: (
      { __typename: 'PageInfo' }
      & Pick<Types.PageInfo, 'hasNextPage' | 'endCursor'>
    ) }
  )> }
);


export const GetBooksDocument = gql`
    query GetBooks($first: Int, $after: String = "") {
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
    ${BookFieldsFragmentDoc}`;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
      }
export function useGetBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export function useGetBooksSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksSuspenseQueryHookResult = ReturnType<typeof useGetBooksSuspenseQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<GetBooksQuery, GetBooksQueryVariables>;
export function refetchGetBooksQuery(variables?: GetBooksQueryVariables) {
      return { query: GetBooksDocument, variables: variables }
    }