/* eslint-disable react/react-in-jsx-scope */
import { Space, Typography, Image, Descriptions, Card, Row, Col } from 'antd';
import { capitalize } from 'lodash';
import { GlobalOutlined } from '@ant-design/icons';
import Barcode from 'react-barcode';
import HtmlMarkdown from 'frontend/components/HtmlMarkdown';
import { breakpoint } from 'frontend/components/App';
import { GetBookQuery } from 'frontend/generated/useGetBook.generated';
import React from 'react';

const LABEL_STYLE = {
  fontWeight: 'bold',
  color: 'black',
  fontSize: '20px',
  content: '',
};
const CONTENT_STYLE = {
  color: 'black',
  fontSize: '20px',
};

interface BookDetailProps {
  book: GetBookQuery['book'];
}
const BookDetail = ({ book }: BookDetailProps) => {
  return (
    <>
      <Card
        bordered={false}
        styles={{body:{
          paddingLeft: '10vh',
          paddingRight: '10vh',
        }
        }}
        style={{
          marginTop: '10vh',
          boxShadow: 'None',
          width: '100%',
        }}
      >
        <Row>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Image
              loading="eager"
              width={window.innerWidth <= breakpoint ? 150 : 300}
              src="/assets/book.jpeg"
            />
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <Space direction="vertical">
              <Typography.Title> {book?.title} </Typography.Title>
              {/* <HtmlMarkdown style={{ fontSize: '16px' }}>
                {book?.richTextSummary ?? ''}
              </HtmlMarkdown> */}
              <br />
              <Descriptions
                layout="vertical"
                column={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                contentStyle={{ color: 'black' }}
                size="small"
              >
                {/* {book?.publisher && (
                  <Descriptions.Item
                    label="Published by :"
                    labelStyle={LABEL_STYLE}
                    contentStyle={CONTENT_STYLE}
                  >
                    {capitalize(book?.publisher?.name ?? '')}
                  </Descriptions.Item>
                )} */}
                {book?.publishedDate && (
                  <Descriptions.Item
                    label="Publication date :"
                  >
                    {book?.publishedDate}
                  </Descriptions.Item>
                )}
                {/* {book?.language && (
                  <Descriptions.Item
                    label={<GlobalOutlined style={{ fontSize: '40px' }} />}
                    labelStyle={{
                      display: 'inline-flex',
                      flexDirection: 'row-reverse',
                      color: 'black',
                    }}
                    contentStyle={CONTENT_STYLE}
                  >
                    {capitalize(book?.language)}
                  </Descriptions.Item>
                )} */}
                {book?.isbn && (
                  <Descriptions.Item
                    label={`ISBN - ${book?.isbn}`}
                    labelStyle={LABEL_STYLE}
                    contentStyle={CONTENT_STYLE}
                  >
                    <Barcode
                      value={book?.isbn}
                      displayValue={false}
                      height={50}
                    />
                  </Descriptions.Item>
                )}
              </Descriptions>
            </Space>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default BookDetail;