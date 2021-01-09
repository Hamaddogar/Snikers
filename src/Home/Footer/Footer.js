import React from 'react';
import '../Footer/Css/Styles.css'

function Footer() {
  return (
<>
      <ul class="social-media-icons">
        <li><a class="instagram" href="https://www.instagram.com/">Instagram</a></li>
        <li><a class="facebook" href="http://www.facebook.com/">Facebook</a></li>
        <li><a class="twitter" href="https://twitter.com/">Twitter</a></li>
        <li><a class="pinterest" href="https://www.pinterest.com/">Pinterest</a></li>
        <li><a class="youTube" href="https://www.youtube.com/">YouTube</a></li>
      </ul>
    <footer class="site-footer">
      {/* <div class="col-md-4 col-sm-6 col-xs-12">
        <ul class="social-icons">
          <li><a class="instagram" href="#"><i class="fa fa-Instagram"></i></a></li>
          <li><a class="facebook" href="#"><i class="fa fa-Facebook"></i></a></li>
          <li><a class="twitter" href="#"><i class="fa fa-Twitter"></i></a></li>
          <li><a class="pinterest" href="#"><i class="fa fa-Pinterest"></i></a></li>
          <li><a class="youTube" href="#"><i class="fa fa-YouTube"></i></a></li>
          <li><a class="snapchat" href="#"><i class="fa fa-Snapchat"></i></a></li>
        </ul>
      </div> <br /><br /> */}

      <div class="container">
        <div class="row">
          {/* <div class="col-sm-12 col-md-4">
            <h6>About</h6>
            <p class="text-justify">SNKERS.com was inspired into creation as a website that remains timeless that can be viewed in decades whilst remaining current .</p>
          </div> */}


          <div class="col-xs-6 col-md-3">
            <h6>HELP</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">Shop</a></li>
              <li><a href="http://scanfcode.com/my-account/">My Account</a></li>
              <li><a href="http://scanfcode.com/product/">Product</a></li>
              <li><a href="http://scanfcode.com/payment/">Payment</a></li>
              <li><a href="http://scanfcode.com/shipping/">Shipping</a></li>
              <li><a href="http://scanfcode.com/returns/">Returns and Exchanges</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>FOLLOW US</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/instagram</">Instagram</a></li>
              <li><a href="http://scanfcode.com/facebook/">Facebook</a></li>
              <li><a href="http://scanfcode.com/twitter/">Twitter</a></li>
              <li><a href="http://scanfcode.com/pinterest/">Pinterest</a></li>
              <li><a href="http://scanfcode.com/youTube/">YouTube</a></li>
              <li><a href="http://scanfcode.com/snapchat/">Snapchat</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>COMPANY</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>POLICIES</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/purchase-condition/">Purchase Condiotns</a></li>
              <li><a href="http://scanfcode.com/cookies-settings/">Cookies Settings</a></li>
            </ul>
          </div>
        </div>
        {/* close tage */}
        <br /><br />
      </div>


      {/* social media */}
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by <a href="#">SNKERS</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
export default Footer;
