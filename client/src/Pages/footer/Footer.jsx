import React from 'react';
import './footer.css';

function Footer()
{

    return (<div className="conta">
        <footer className="footer text-center">
            <div className="row">
                <div className="col-md-4">
                    <h5>About Us</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>
                <div className="col-md-4">
                    <h5>Contact Us</h5>
                    <p>Email: example@example.com<br/>Phone: 123-456-7890</p>
                </div>
                <div className="col-md-4">
                    <h5>Follow Us</h5>
                    <a href="#" className="btn btn-outline-primary btn-social mx-1"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="btn btn-outline-info btn-social mx-1"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="btn btn-outline-danger btn-social mx-1"><i className="bi bi-youtube"></i></a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>&copy; 2024 Your Company. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    </div>);
    }

export default Footer;