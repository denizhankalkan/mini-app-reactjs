// eslint-disable-next-line prettier/prettier
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import LocaleToggle from 'containers/LocaleToggle';
import logo from '../Img/logo.png';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.style';

const TopBar = ({ handleDrawerToggle }) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar} elevation={0}>
      <Toolbar id="toolbar" disableGutters>
        <IconButton
          id="sidebar-button"
          className={classes.sidebarToogle}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <div id="messSafe-logo" className={classes.logoContainer}>
          <Link to="/">
            <img src={logo} alt="logo" style={{ width: 40, marginTop: 5 }} />
          </Link>
        </div>

        <Grid container>
          <Grid item xs={3} style={{ display: 'contents' }}>
            <CircleIcon
              color="info"
              fontSize="large"
              style={{ marginTop: '15px' }}
            />
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={12}>
                <h5>Deniz Kalkan</h5>
              </Grid>
              <Grid item xs={12} style={{ marginTop: '-40px' }}>
                <h5>Boni Global - Mess Safe</h5>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            item
            xs={10}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item xs={3} className={classes.bl1}>
              <Button
                variant="outlined"
                startIcon={<ContactSupportIcon />}
                style={{ backgroundColor: '#00cccc' }}
              >
                Support
              </Button>
            </Grid>

            <Grid item xs={1}>
              <LocaleToggle />
            </Grid>
          </Grid>

          <Grid item xs={2}>
            <Grid container style={{ marginLeft: '10px' }}>
              <Grid item xs={6}>
                <h5>Log Out</h5>
              </Grid>
              <Grid item xs={6} style={{ marginTop: '15px' }}>
                <LogoutIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  handleDrawerToggle: PropTypes.func,
};

export default TopBar;
