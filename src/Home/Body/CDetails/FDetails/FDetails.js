import React from 'react';
import '../Css/Style.css';
import CDetails from '../CDetails'

import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import StarRatings from 'react-star-ratings';
import {
  withStyles,
  Radio,
  Checkbox,
  Fab, CircularProgress, Hidden, Link
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function FDetails() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <Header />

       
      {/* WHITE CARDS 1 */}
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <CDetails />
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              CONVERSE
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 189.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            Originally designed and worn by badminton world-champ Jack Purcell, these sneakers have been an icon for low-key expression since 1935. Now they're available in all-over leather, with the signature "smile" at the toe.
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://i.pinimg.com/originals/5e/3f/20/5e3f20bd72be7908fa865538bfd6b0e6.jpg" />
        </div>
      </div>

      {/* WHITE CARDS 2 */}
      {/* <div class="row">
          <div class="col-sm">
            <CDetails />
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              GREAT ROYALE
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 279.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
        </div>
      </div> */}


      {/* WHITE CARDS 3 */}
      {/* <div class="container">
        <div class="row">
          <div class="col-sm">
            <CDetails />
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              Nike
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 259.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
        </div> */}
    
      {/* WHITE CARDS 4 */}
      {/* <div class="row">
          <div class="col-sm">
            <CDetails />
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              RE/DONE
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 210.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
        </div>
      </div> */}


      {/* TECH CARDS 1 */}
      {/* <div class="container">
        <div class="row">
          <div class="col-sm">
            <CDetails />
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              ADIDAS
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 499.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
        </div> */}
    

      {/* TECH CARDS 2 */}
      {/* <div class="row">
          <div class="col-sm">
            <CDetails />
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              BALENCIAGA
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 750.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
        </div>
      </div> */}


      {/* TECH CARDS 3 */}
      {/* <div class="container">
        <div class="row">
          <div class="col-sm">
            <CDetails />
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              NIKE 
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 320.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
        </div> */}
    
      {/* TECH CARDS 4 */}
      {/* <div class="row">
          <div class="col-sm">
            <CDetails />
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              ASIC
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 275.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
        </div>
      </div> */}


      
      {/* VINTAGE CARDS 1 */}
      {/* <div class="container">
        <div class="row">
          <div class="col-sm">
            <CDetails />
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              NEW BALANCE
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 220.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
        </div> */}
    

      {/* VINTAGE CARDS 2 */}
      {/* <div class="row">
          <div class="col-sm">
            <CDetails />
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              ADIDAS
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 215.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
        </div>
      </div> */}


      {/* VINTAGE CARDS 3 */}
      {/* <div class="container">
        <div class="row">
          <div class="col-sm">
            <CDetails />
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              TIGERS
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 220.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
        </div> */}

      {/* VINTAGE CARDS 4 */}
      {/* <div class="row">
          <div class="col-sm">
            <CDetails />
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              PUMA
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 250.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
        </div>
      </div> */}

    
      {/* COLOR CARDS 1 */}
      {/* <div class="container">
        <div class="row">
          <div class="col-sm">
            <CDetails />
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              CHOLE
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 1899.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
        </div> */}
    

       {/* COLOR CARDS 2 */}
      {/* <div class="row">
          <div class="col-sm">
            <CDetails />
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              MONTCLER GENIUIS
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 720.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
        </div>
      </div> */}


      {/* COLOR CARDS 3 */}
      {/* <div class="container">
        <div class="row">
          <div class="col-sm">
            <CDetails />
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              GUCCI
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 1655.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
        </div> */}
    
       {/* COLOR CARDS 4 */}
      {/* <div class="row">
          <div class="col-sm">
            <CDetails />
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              BALENCIAGA
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 1499.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
        </div>
      </div>  */}

  
<br/>
      <Footer />
    </div>
  )
}
export default FDetails;