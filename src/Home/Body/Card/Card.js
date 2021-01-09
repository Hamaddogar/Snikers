import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { BrowserRouter, Route, Link } from "react-router-dom";

// CSS import
import '../Card/CSS/Style.css'

import snLogo from '../../../img/snlogo.png'

import w1 from '../../../img/white/w1.jpg'
import w2 from '../../../img/white/w2.jpg'
import w3 from '../../../img/white/w3.jpg'
import w4 from '../../../img/white/w4.jpg'

import t1 from '../../../img/tech/t1.jpg'
import t2 from '../../../img/tech/t2.jpg'
import t3 from '../../../img/tech/t3.jpg'
import t4 from '../../../img/tech/t4.jpg'

import v1 from '../../../img/vintage/v1.jpg'
import v2 from '../../../img/vintage/v2.jpg'
import v3 from '../../../img/vintage/v3.jpg'
import v4 from '../../../img/vintage/v4.jpg'

import c1 from '../../../img/color/c1.jpg'
import c2 from '../../../img/color/c2.jpg'
import c3 from '../../../img/color/c3.jpg'
import c4 from '../../../img/color/c4.jpg'


const useStyles = makeStyles((theme) => ({
  // root: {
  //   maxWidth: 550,
  // },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [color, setColor] = React.useState(false);

  const handleFavorite = () => {
    setColor(!color)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <Card >
      <div style={{ paddingLeft: "100px", paddingTop: "20px" }}><h5 >WHITE</h5></div>
      
      {/* WHITE CARDS 1 */}
      <div class="container">
        <div class="row">
          <div class="col">

          <CardHeader
            // change the logo here
              avatar={
                <Avatar alt='Remy Sharp' src={snLogo}></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              
              title="CONVERSE"
            subheader="Style SN 0001"/>

            <CardMedia
              className={classes.media}
              image={w1}
              title="CONVERSE" />

            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
               <del>$ 189.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
              <Typography variant="body2" color="textSecondary" component="p" >
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/CONVERSE'>PURCHASE</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>


          {/* WHITE CARDS 2 */}
          <div class="col">
            <CardHeader
            // change the logo here
              avatar={
                <Avatar alt='Remy Sharp' src={snLogo}></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              
              title="GREAT ROYALE"
              subheader="Style SN 0002"/>
              <CardMedia
                className={classes.media}
                image={w2}
                title="GREAT ROYALE" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
              <del>$ 279.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/GREATROYALE'>PURCHASE</Link>
              </Typography>
            </CardContent>

            {/* heart to turn */}
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                  <FavoriteIcon style={{ color:  color ? "red" : ""}} onClick={handleFavorite} />
              </IconButton>

              {/* <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>

        </div>
      </div>

      {/* WHITE CARDS 3 */}
      <div class="container">
        <div class="row">
          <div class="col">

            <CardHeader
            // change the logo here
              avatar={
                <Avatar alt='Remy Sharp' src={snLogo}></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="NIKE"
              subheader="Style SN 0003"/>

              <CardMedia
                className={classes.media}
                image={w3}
                title="NIKE" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" >
              <del>$ 259.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>PURCHASE</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>

          {/* WHITE CARDS 4 */}
          <div class="col">
          <CardHeader
            // change the logo here
              avatar={
                <Avatar alt='Remy Sharp' src={snLogo}></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="RE/DONE"
              subheader="Style SN 0004"/>

              <CardMedia
                className={classes.media}
                image={w4}
                title="RE/DONE" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" >
              <del>$ 210.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>PURCHASE</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>

        </div>
      </div>

      {/* Tech CARDS */}
      <div style={{ paddingLeft: "100px", paddingTop: "20px" }}><h5 >TECH</h5></div>

      {/* TECH CARDS 1 */}
      <div class="container">
        <div class="row">
          <div class="col">

            <CardHeader
            // change the logo here
              avatar={
                <Avatar alt='Remy Sharp' src={snLogo}></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="ADIDAS"
            subheader="Style SN 0005"/>

            <CardMedia
              className={classes.media}
              image={t1}
              title="ADIDAS" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" >
              <del>$ 499.00 </del> <span style={{ color: "red" }}>(-30%)</span>
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>PURCHASE</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>


          {/* TECH CARDS 2 */}
          <div class="col">
            <CardHeader
            // change the logo here
              avatar={
                <Avatar alt='Remy Sharp' src={snLogo}></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="BALENCIAGIA"
              subheader="Style SN 0006"/>

              <CardMedia
                className={classes.media}
                image={t2}
                title="BALENCIAGA" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" >
              <del>$ 750.00 </del> <span style={{ color: "red" }}>(-30%)</span>
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>PURCHASE</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>

        </div>
      </div>

      {/* TECH CARDS 3 */}
      <div class="container">
        <div class="row">
          <div class="col">

          <CardHeader
            // change the logo here
              avatar={
                <Avatar alt='Remy Sharp' src={snLogo}></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="NIKE"
              subheader="Style SN 0007"/>

              <CardMedia
                className={classes.media}
                image={t3}
                title="NIKE" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" >
              <del>$ 320.00 </del> <span style={{ color: "red" }}>(-30%)</span>
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>PURCHASE</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>

          {/* TECH CARDS 4 */}
          <div class="col">
          <CardHeader
            // change the logo here
              avatar={
                <Avatar alt='Remy Sharp' src={snLogo}></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="ASIC"
              subheader="Style SN 0008"/>

              <CardMedia
                className={classes.media}
                image={t4}
                title="ASIC" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" >
              <del>$ 275.00 </del> <span style={{ color: "red" }}>(-30%)</span>
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>PURCHASE</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}                
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>

        </div>
      </div>


       {/* VINTAGE CARDS */}
      <div style={{ paddingLeft: "100px", paddingTop: "20px" }}><h5 >Vintage</h5></div>
      
      {/* VINTAGE CARDS 1 */}
      <div class="container">
        <div class="row">
          <div class="col">

          <CardHeader
            // change the logo here
              avatar={
                <Avatar alt='Remy Sharp' src={snLogo}></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="NEW BALANCE"
            subheader="Style SN 0008"/>

            <CardMedia
              className={classes.media}
              image={v1}
              title="NEW BALANCE" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" >
              <del>$ 220.00 </del> <span style={{ color: "red" }}>(-30%)</span>
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>PURCHASE</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>

           {/* VINTAGE CARDS 2 */}
          <div class="col">
          <CardHeader
            // change the logo here
              avatar={
                <Avatar alt='Remy Sharp' src={snLogo}></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="ADIDAS"
              subheader="Style SN 00010"/>

              <CardMedia
                className={classes.media}
                image={v2}
                title="ADIDAS" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" >
              <del>$ 215.00 </del> <span style={{ color: "red" }}>(-30%)</span>
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>PURCHASE</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>

        </div>
      </div>

       {/* VINTAGE CARDS 3 */}
      <div class="container">
        <div class="row">
          <div class="col">

          <CardHeader
            // change the logo here
              avatar={
                <Avatar alt='Remy Sharp' src={snLogo}></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="TIGERS"
              subheader="Style SN 00011"/>

              <CardMedia
                className={classes.media}
                image={v3}
                title="TIGERS" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" >
              <del>$ 220.00 </del> <span style={{ color: "red" }}>(-30%)</span>
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>PURCHASE</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>

           {/* VINTAGE CARDS 4 */}
          <div class="col">
          <CardHeader
            // change the logo here
              avatar={
                <Avatar alt='Remy Sharp' src={snLogo}></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="PUMA"
              subheader="Style SN 00012"/>

              <CardMedia
                className={classes.media}
                image={v4}
                title="PUMA" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" >
              <del>$ 250.00 </del> <span style={{ color: "red" }}>(-30%)</span>
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>PURCHASE</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>

        </div>
      </div>

      {/* COLOR CARDS */}
      <div style={{ paddingLeft: "100px", paddingTop: "20px" }}><h5 >COLOR</h5></div>

      {/* COLOR CARDS */}
      <div class="container">
        <div class="row">
          <div class="col">

          <CardHeader
            // change the logo here
              avatar={
                <Avatar alt='Remy Sharp' src={snLogo}></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="CHLOE"
            subheader="Style SN 00013"/>

            <CardMedia
              className={classes.media}
              image={c1}
              title="CHLOE" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" >
              <del>$ 1899.00 </del> <span style={{ color: "red" }}>(-30%)</span>
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>PURCHASE</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>

          {/* COLOR CARDS 2 */}
          <div class="col">
          <CardHeader
            // change the logo here
              avatar={
                <Avatar alt='Remy Sharp' src={snLogo}></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="MONTCLER GENIUIS"
              subheader="Style SN 00014"/>

              <CardMedia
                className={classes.media}
                image={c2}
                title="MONTCLER GENIUIS" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" >
              <del>$ 720.00 </del> <span style={{ color: "red" }}>(-30%)</span>
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>PURCHASE</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>

        </div> 
      </div>

      {/* COLOR CARDS 3 */}
      <div class="container">
        <div class="row">
          <div class="col">

          <CardHeader
            // change the logo here
              avatar={
                <Avatar alt='Remy Sharp' src={snLogo}></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="GUCCI"
              subheader="Style SN 00015"/>

              <CardMedia
                className={classes.media}
                image={c3}
                title="GUCCI" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" >
              <del>$ 1655.00 </del> <span style={{ color: "red" }}>(-30%)</span>
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>PURCHASE</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>

          {/* COLOR CARDS 4 */}
          <div class="col">
          <CardHeader
            // change the logo here
              avatar={
                <Avatar alt='Remy Sharp' src={snLogo}></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="BALENCIAGA"
              subheader="Style SN 00016"/>

              <CardMedia
                className={classes.media}
                image={c4}
                title="BALENCIAGA" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" >
              <del>$1499.00 </del> <span style={{ color: "red" }}>(-30%)</span>
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>PURCHASE</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>

          </div>
        </div>
      </div>

      {/* <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography> */}
      {/* <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}

    </Card>


  );
}
