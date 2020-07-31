import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';
import Github from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import HomeSharp from '@material-ui/icons/HomeSharp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
}));

const socialLinks = [
  {
    icon: <LinkedIn />,
    link: 'https://www.linkedin.com/in/matthewmarberry/',
  },
  {
    icon: <Github />,
    link: 'https://github.com/marberrym',
  },
  {
    icon: <Instagram />,
    link: 'https://www.instagram.com/jaydoee/?hl=en',
  },
  {
    icon: <Facebook />,
    link: 'https://www.facebook.com/jaydoeee/',
  },
];

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <div className={classes.title}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <HomeSharp />
          </IconButton>
        </div>
        {socialLinks.map((social) => (
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            href={social.link}
          >
            {social.icon}
          </IconButton>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
