import React from 'react';
import { fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
// drawer
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import img4 from '../../img/sneaker.jpg';
// link pages
import { Link, useHistory } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
    display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // drawer
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  // And to use history we need to import it from react-router-dom 
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handlePath =(path) => history.push(path)

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
     <div>
        {/* <Typography className={classes.title} noWrap>
          <Link to='/'style={{textDecoration:'none', color:'white', fontSize: '60px'}} > SNKERS </Link>  
          </Typography> */}
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      
      {/* dashboard & profile */}
      <MenuItem onClick={handleMenuClose}><Link style={{textDecoration:'none', color:'black', fontSize: '15px'}} to='/dashboard'>Dashboard</Link></MenuItem>
      <MenuItem><Link style={{textDecoration:'none', color:'black', fontSize: '15px'}} to='/signIn'>Sign In</Link></MenuItem>
    </Menu>
    </div>
  );

  // carousle https://www.npmjs.com/package/react-responsive-carousel
//   const renderCarousel = (
//     <Carousel infiniteLoop autoPlay>
//     <div className={"carousel-image"}>
//         <img src={'https://i.pinimg.com/originals/5c/24/49/5c2449352cd1e89001dd3985cadfa814.jpg'} />
//     </div>
//     <div className={"carousel-image"}>
//         <img src={'data:image/jpeg;base64,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'} style={{width:"1200"}} />
//     </div>
//     <div className={"carousel-image"}>
//         <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpzqQLj9gKEMmwukoZH-vs6i25NtfxxNgpfA&usqp=CAU'} />
//     </div>
// </Carousel>
//     )

  // carousel mobile
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label=" " color="inherit">
          <Badge badgeContent={1} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label=" " color="inherit">
          <Badge badgeContent={1} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  // drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
 
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{backgroundColor: '#232526'}}>
        <Toolbar>
   
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"> */}
          {/* <Link to ='/menu'>  <MenuIcon /></Link> */}
          
          {/* drawer */}
          {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{ <MenuIcon style={{color:'white'}}/>}</Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
          ))}

          <Link to='/'style={{textDecoration:'none', color:'white', fontSize: '45px',paddingLeft:"30px"}} > SNKERS </Link>  
         
          {/* </IconButton> */}
          {/* <Typography className={classes.title} noWrap>
          <Link to='/'style={{textDecoration:'none', color:'white', fontSize: '60px'}} > SNKERS </Link>  
          </Typography> */}

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}  >
            <IconButton aria-label=" " color="inherit" onClick={()=> handlePath('/white')}>
            <Link style={{textDecoration:'none', color:'white', fontSize: '12px'}} to='/white'>White</Link>
            </IconButton>
            <IconButton aria-label=" " color="inherit" onClick={()=> handlePath('/tech')}>
            <Link style={{textDecoration:'none', color:'white', fontSize: '12px'}} to='/tech'>Tech</Link>
            </IconButton>
            <IconButton aria-label=" " color="inherit" onClick={()=> handlePath('/vintage')}>
            <Link style={{textDecoration:'none', color:'white', fontSize: '12px'}} to='/vintage'>Vintage</Link>
            </IconButton>
            <IconButton aria-label=" " color="inherit" onClick={()=> handlePath('/color')}>
            <Link style={{textDecoration:'none', color:'white', fontSize: '12px'}} to='/color'>Color</Link>
            </IconButton>

            
            <IconButton aria-label="search" color="inherit">
            <SearchIcon />
            </IconButton>
            
            {/* <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
            </IconButton> */}

            {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }} />
           </div>  */}


            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
              <AccountCircle />
            </IconButton>
          </div>


            <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit" >
              <MoreIcon />
            </IconButton>
            </div>


        </Toolbar>
      </AppBar>
{/*       
      {renderCarousel} */}
      {/* {renderMobileMenu}
      {renderMenu} */}
    </div>
  );
}
