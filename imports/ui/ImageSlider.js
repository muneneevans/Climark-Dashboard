import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './override.css';
import {Carousel} from 'react-responsive-carousel';

export default class ImageSlider extends React.Component {
  render() {
    return (<Carousel autoPlay="autoPlay" showThumbs={false}>
      <div>
        {/* <img src="./images/cow.jpeg"/> */}

        <img src="https://images.unsplash.com/photo-1496151763167-abae6c394463?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6a4aa6ece68e66e42194232facde8e88&auto=format&fit=crop&w=1500&q=80"/>
        <p className="legend">
          Camels travelling along the desert
        </p>
      </div>

      <div>
        {/* <img src="./images/cow.jpeg"/> */}

        <img src="https://images.unsplash.com/photo-1496178149619-50f91d4669fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d41dcd9a0c3a1cf0d567171ba85660d6&auto=format&fit=crop&w=891&q=80"/>
        <p className="legend">
          Goats grazing in Marsabit
        </p>
      </div>

      <div>
        {/* <img src="./../../../private/images/cow.jpeg"/> */}

        <img src="https://images.unsplash.com/photo-1527181617732-cd814bc53892?ixlib=rb-0.3.5&s=654ec4f1f55ee7c7cfd2355fcdd1f544&auto=format&fit=crop&w=750&q=80"/>
        <p className="legend">
          Merille vegetation
        </p>
      </div>
      <div>
        {/* <img src="./../../../private/images/cow.jpeg"/> */}

        <img src="https://images.unsplash.com/photo-1520294321833-4cca79c45688?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=612914ca034dbcbe700d8f7d2892177d&auto=format&fit=crop&w=750&q=80"/>
        <p className="legend">
          Golbo vegetation
        </p>
      </div>

    </Carousel>);
  }
}
