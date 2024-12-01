import { gql } from "@apollo/client";
import AuthorFields from "frontend/hooks/AuthorFields";

export default gql`
${AuthorFields}
fragment BookFields on Book {
    id
    title
    isbn
    publishedDate
    authors {
        ...AuthorFields
    }
}
`