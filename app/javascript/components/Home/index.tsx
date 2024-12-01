import React from "react";
import { Link } from "react-router-dom";
import BookCardList from "frontend/components/BookCardList";

const Home: React.FC = () => {
    return (
      <>
        {/* <ImageCover /> */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <BookCardList
            styles={{
              width: '50%',
              textAlign: 'center',
              backgroundColor: '#F8F8F8',
              marginTop: '10vh',
            }}
            title="Peykhang recommendation of the month"
          />

        </div>
      </>
    );
  };
  
  export default Home;