import { gql } from "@apollo/client";

export default gql`
fragment AuthorFields on Author {
    id
    firstName
    lastName
}
`