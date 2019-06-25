import React from 'react';
import Carousel from './slider';

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>
              <Carousel />
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Brande
                </div>
            </div>
          
        </div>
    );
};

export default Featured;