// import BookDetail from 'frontend/components/BookDetail';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Skeleton, message } from 'antd';
import BookCardList from '../BookCardList';
import useGetBookQuery from 'frontend/hooks/useGetBook';
import BookDetail from '../BookDetail';

const BookPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useGetBookQuery( {
    variables: {
      id,
    },
  });

  if (error != null) {
    void message.error(
      'There is an issue loading the book. We will fix it as soon as possible',
    );
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <BookDetail book={data?.book} />
          <Card
            bordered={false}
            styles = {{ body: {
              paddingLeft: '10vh',
              paddingRight: '10vh',
            }
            }}
          >
            <BookCardList bordered={false} title="Other books by the author" />
          </Card>
        </>
      )}
    </>
  );
};

export default BookPage;