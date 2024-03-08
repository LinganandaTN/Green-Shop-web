import React from 'react';
import image1 from './images/01.png';
import image2 from './images/02.png';
import Footer from '../footer/Footer.jsx';
 import './home.css';
 import 'jquery';
 import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 import 'slick-carousel/slick/slick.min.js';
 import 'slick-carousel/slick/slick.css'; // Import Slick Carousel CSS
 import 'slick-carousel/slick/slick-theme.css'; // Import Slick Carousel CSS
 import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
 import 'wow.js/dist/wow.min.js';
 import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Home_body(){
    return (
      <div className = 'root'>
      <div className = 'carousel-root'>
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="carousel-caption">
      <img src={image1}  className=" car-image" alt="..."/>
        <h5>Mega Sale</h5>
        <p>Fresh Vegitables </p>
      </div>
    </div>
    <div className="carousel-item">
      <div className="carousel-caption">
      <img src={image2} className=" car-image" alt="..."/>
        <h5>Top Quality</h5>
        <p>Fresh fruits</p>
      </div>
    </div>
    <div className="carousel-item">
      <div className="carousel-caption">
         <img src={image1} className="car-image" alt="..."/>
         <h5>Mega Sale</h5>
        <p>Fresh Vegitables </p>
        </div>
    </div>
  </div>
</div>
</div>


<div className="container-fluid card-main mt-5">
    <div className="card-slider">
        <div className="card">
            <img src={image1} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div className="card">
            <img src={image2} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div className="card">
            <img src={image1} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div className="card">
            <img src={image2} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div className="card">
            <img src={image1} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
</div>
<h1>sfsdf</h1><h1>sfsdf</h1>
<h1>sfsdf</h1>

<Footer />
</div>
);

}

export default Home_body;