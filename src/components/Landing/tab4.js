import React from 'react';
import YouTube from 'react-youtube';
import ImageGallery from 'react-image-gallery';
import { Row, Col } from 'reactstrap';
export default class Tab4 extends React.Component {
   
    render() {
      const images = [
        {
          original: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
          thumbnail: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
        },
        {
          original: 'https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg',
          thumbnail: 'https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg'
        },
        {
          original: 'https://c2.staticflickr.com/8/7151/6760135001_58b1c5c5f0_b.jpg',
          thumbnail: 'https://c2.staticflickr.com/8/7151/6760135001_58b1c5c5f0.jpg'
        }
      ]
            const opts = {
              height: '390',
              width: '100%',
              playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
              }
            };
            
        return (
              <Row>
                 <Col md="12">
                    <ImageGallery 
                    items={images}
                     />
                  </Col>  
                 <Col md="12">
                  <YouTube
                      videoId="65d5Lc4S5lU"
                      opts={opts}
                      onReady={this._onReady}
                    /> 
                   </Col> 
              </Row>
      
        );    
    }
    
  
}