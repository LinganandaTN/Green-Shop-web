import React from 'react';
 import './shop.css';
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


function Shop(){
    return (
   
      <div className = 'root'>
<h1>hiii</h1><h1>hiii</h1>
<h1>hiii</h1>
<h1>hiii</h1>
<h1>hiii</h1>
<h1>hiii</h1>
<h1>hiii</h1>
<h1>hiii</h1>
<h1>hiii</h1>
<h1>fdfd</h1>
<div className="py-5">
    <div className="container">
    <h5 className="offcanvas-title" id="offcanvasCategoryLabel">Filter</h5>
        <div className="row">
        <h1>fdfd</h1>
            <aside className="col-lg-3 col-md-4 mb-6 mb-md-0">
            {/* <h5 className="offcanvas-title" id="offcanvasCategoryLabel">Filter</h5> */}
            <h5 className="offcanvas-title" id="offcanvasCategoryLabel">Fiter</h5>
                <div className="offcanvas offcanvas-start offcanvas-collapse" tabindex="-1" id="offcanvasCategory" aria-labelledby="offcanvasCategoryLabel">
                    <div className="offcanvas-header d-lg-none">
                        <h5 className="offcanvas-title" id="offcanvasCategoryLabel">Filer</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body p-3">
                        {/* <!-- filter clear section --> */}
                        <div className="mb-3 border-bottom pb-3 ">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="fs-4 fw-bold">Filters</span>
                                {/* <!-- <span className="font-extra-small theme-text-primary">Clear All</span> --> */}
                            </div>
                            <div className="mt-2">
                                <span className="badge theme-bg-accent-two theme-text-accent-one">Fruits</span>
                                <span className="badge theme-bg-accent-two theme-text-accent-one">Vegitable</span>
                                <span className="badge theme-bg-accent-two theme-text-accent-one">
                                    <label className="form-check-label" for="ratingFive">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning "></i>
                                        <i className="bi bi-star-fill text-warning "></i>
                                        <i className="bi bi-star-fill text-warning "></i>
                                        <i className="bi bi-star-fill text-warning "></i>
                                    </label>
                                </span>
                            </div>
                        </div>
                        <div className="mb-5">
                            {/* <!-- title --> */}
                            <h5 className="mb-3 fs-6">Categories</h5>
                            {/* <!-- nav --> */}
                            <ul className="nav nav-category" id="categoryCollapseMenu">
                                <li className="nav-item border-bottom w-100 collapsed"><a href="/shopcatalog" className="nav-link">
                                        <i className="bi bi-chevron-right"></i> All Products
                                    </a>
                                </li>
                                {/* // repetable */}
                                <li className="nav-item border-bottom w-100 collapsed"><a href="/shopcatalog/vegetables" className="nav-link">
                                        <i className="bi bi-chevron-right"></i> Vegetables
                                    </a>
                                </li>
                                {/* // repetable */}
                                <li className="nav-item border-bottom w-100 collapsed"><a href="/shopcatalog/fruits" className="nav-link">
                                        <i className="bi bi-chevron-right"></i> Fruits
                                    </a>
                                </li>
                               {/* // // repetable */}
                                <li className="nav-item border-bottom w-100 collapsed"><a href="/shopcatalog/oil" className="nav-link">
                                        <i className="bi bi-chevron-right"></i>Oil Items
                                    </a>
                                </li>
                               {/* //  repetable --> */}
                                <li className="nav-item border-bottom w-100 collapsed"><a href="/shopcatalog/dairy" className="nav-link">
                                        <i className="bi bi-chevron-right"></i>Dairy Products
                                    </a>
                                </li>
                               {/* //  repetable --> */}
                                <li className="nav-item border-bottom w-100 collapsed"><a href="/shopcatalog/atta&flour" className="nav-link">
                                        <i className="bi bi-chevron-right"></i>Atta & flours
                                    </a>
                                </li>
                                {/* // repetable */}
                                <li className="nav-item border-bottom w-100 collapsed"><a href="/shopcatalog/grains" className="nav-link">
                                        <i className="bi bi-chevron-right"></i>Grains
                                    </a>
                                </li>
                                {/* // repetable */}
                                <li className="nav-item border-bottom w-100 collapsed"><a href="/shopcatalog/spices" className="nav-link">
                                        <i className="bi bi-chevron-right"></i>Spices
                                    </a>
                                </li>
                                // repetable
                            </ul>
                        </div>
                        <div className="mb-5">
                            <h5 className="mb-3 fs-6">Rating</h5>
                            <div>
                                {/* <!-- form check --> */}
                                <div className="form-check mb-2">
                                    {/* <!-- input --> */}
                                    <input className="form-check-input" type="checkbox" value="" id="ratingFive"/>
                                    <label className="form-check-label" for="ratingFive">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning "></i>
                                        <i className="bi bi-star-fill text-warning "></i>
                                        <i className="bi bi-star-fill text-warning "></i>
                                        <i className="bi bi-star-fill text-warning "></i>
                                    </label>
                                </div>
                                {/* <!-- form check --> */}
                                <div className="form-check mb-2">
                                    {/* <!-- input --> */}
                                    <input className="form-check-input" type="checkbox" value="" id="ratingFour"/>
                                    <label className="form-check-label" for="ratingFour">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning "></i>
                                        <i className="bi bi-star-fill text-warning "></i>
                                        <i className="bi bi-star-fill text-warning "></i>
                                        <i className="bi bi-star text-warning"></i>
                                    </label>
                                </div>
                                {/* <!-- form check --> */}
                                <div className="form-check mb-2">
                                    {/* <!-- input --> */}
                                    <input className="form-check-input" type="checkbox" value="" id="ratingThree"/>
                                    <label className="form-check-label" for="ratingThree">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning "></i>
                                        <i className="bi bi-star-fill text-warning "></i>
                                        <i className="bi bi-star text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                    </label>
                                </div>
                                {/* <!-- form check --> */}
                                <div className="form-check mb-2">
                                    {/* <!-- input --> */}
                                    <input className="form-check-input" type="checkbox" value="" id="ratingTwo" />
                                    <label className="form-check-label" for="ratingTwo">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                    </label>
                                </div>
                                {/* <!-- form check --> */}
                                <div className="form-check mb-2">
                                    {/* <!-- input --> */}
                                    <input className="form-check-input" type="checkbox" value="" id="ratingOne" />
                                    <label className="form-check-label" for="ratingOne">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-0 position-relative">
                            {/* <!-- Banner Content --> */}
                            <div className="position-absolute p-3 py-8">
                                <h3 className="mb-0">Foods Products</h3>
                                <p>Get Upto 25% Off</p>
                                <a href="#" className="btn btn-dark">Shop Now<i className="bi bi-arrow-right ms-1"></i></a>
                            </div>
                            <img src="assets/images/page/banner-filter.png" alt="" className="img-fluid rounded-3"/>
                        </div>
                    </div>
                </div>
            </aside>
            
        </div>
    </div>
</div>

</div>
);

}

export default Shop;