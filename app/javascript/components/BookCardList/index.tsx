import { Space, Typography, Card, message, Skeleton } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import { Property } from 'csstype';
import { upperFirst, lowerCase } from 'lodash';
import BookCard from '../BookCard';
import { Book } from 'frontend/types/graphql';
import { useGetBooksQuery } from 'frontend/hooks/useGetBooks';


interface BookCardListProp {
  styles?: {
    width?: string;
    textAlign?: Property.TextAlign;
    backgroundColor?: string;
    marginTop?: string;
  };
  bordered?: boolean;
  title?: string;
}

export interface BooksData {
  books: {
    edges: [{ node: Book }];
  };
}


interface BookNode {
  __typename: "Book",
  title: string
}
const BookCardList = ({title, styles, bordered, ...rest}: BookCardListProp) => {

  const { loading, error, data } = useGetBooksQuery({});
  const navigate = useNavigate();
  const { tag } = useParams();

  if (error != null) {
    void message.error(
      'There is an issue loading the book list. We will fix it as soon as possible',
    );
  }
  const handleBookSelect = (id: string | null | undefined): void => {
    navigate(`/books/${id}`);
  };

  console.log({data})
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : ( 
     <Card
          bordered={false}
          style={{
            width: styles?.width ?? '100%',
            textAlign: styles?.textAlign,
            backgroundColor: styles?.backgroundColor,
            marginTop: styles?.marginTop,
            boxShadow: 'None',
          }}
        >
          {!tag ? (
            <Typography.Title> {title}</Typography.Title>
          ) : (
            <Typography.Title>
              {`${upperFirst(lowerCase(tag))} books`}
            </Typography.Title>
          )}
          <Space wrap size="large">
             {data?.books?.edges?.map(({node}) => (
              // eslint-disable-next-line react/jsx-key
              <BookCard
                key={node.id}
                book={node}
                handleBookSelect={handleBookSelect}
              />
            ))} 
          </Space>
        </Card> 
      )}
    </>
  );
};

export default BookCardList;
