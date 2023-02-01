import React from 'react'
import "./footer.css"
import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
        <footer className='footer--container'>
            <div className="first-part flex">
                {/* <!--get to know us--> */}
                <div className="acquaintance">
                    <h4>Acquaint with us</h4>
                    <ul className="know us">
                        <li><a href="careers.php">careers</a></li>
                        <li><a href="about.php">about ieka</a></li>
                        <li><a href="relations.php">investor relations</a></li>
                        <li><a href="customer-signup.php">customer signup</a></li>
                        <li><a href="farmer-signup.php">farmer signup</a></li>
                    </ul>
                </div>

                {/* <!--make money with us--> */}
                <div className="make money with us">
                    <h4>Make money with Ieka</h4>
                    <ul className="make-money">
                        <li><a href="sell.php">Sell your farm products</a></li>
                        <li><a href="sell.php">Sell your animals</a></li>
                        <li><a href="advertise-info.php">Advertise with Ieka</a></li>
                        <li><a href="affliate-info.php">Become an affliate</a></li>
                        <li><a href="make-money.php">More...</a></li>
                    </ul>
                </div>

                {/* <!--terms and conditions--> */}
                <div className="terms and conditions">
                    <h4 className="policy">our policies</h4>
                    <ul className="policies">
                        <li><a href="payment-policy.php">Payment Policy</a></li>
                        <li><a href="privacy-policy.php">Privacy Policy</a></li>
                        <li><a href="service-terms.php">Service Terms & Agreement</a></li>
                        <li><a href="negotiate-info.php">Negotiate with Ieka</a></li>
                    </ul>
                </div>

                {/* <!--helpdesk--> */}
                <div>
                    <h4>our helpdesk</h4>
                    <ul className="help">
                        <li  name="report_buyer"><a href="#">Report a Buyer</a></li>
                        {/* <li id="show_error">You have to log into your account to complete this operation</li> */}
                        <li  name="report-seller"><a href="#">Report a Seller</a></li>
                        <li><a href="account-issue.php">Account Issues</a></li>
                        <li><a href="account-creation-problem.php">Problems with account creation</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="second-part">
                {/* <!--social media section--> */}
                <div className='icons--container'>
                <a href="#"><BsTwitter size={25}/></a>
                <a href="#"><BsInstagram size={25}/></a>
                <a href="#"><BsLinkedin size={25}/></a>
                <a href="#"><BsFacebook size={25}/></a>
                </div>
                <div>
                    <img src="flag.png" className='flag' alt="" />
                    <p>Nigeria</p>
                </div>
                {/* <!--Company reserved rights--> */}
                <div className='reserved'>
                    <p>&copy; all rights reserved. ieka enterprises. or its affliates</p>
                </div>
            </div>
        </footer>
  )
}

export default Footer
