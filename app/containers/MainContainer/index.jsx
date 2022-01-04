import { Box, withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from 'components/TopBar';
import {
  makeSelectPinnedTabs,
  makeSelectTabs,
  makeSelectUser,
} from 'containers/App/selectors';
import NavigationDrawer from 'containers/NavigationDrawer';
import PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styles from './index.style';

const Container = ({ location, classes, currentInteraction }) => {
  const [open, setOpen] = useState(false);
  const [drawerTabIndex, setDrawerTabIndex] = useState(0);
  const [isHome, setHome] = useState(true);

  useEffect(() => {
    if (location.pathname === '/' && !isHome) {
      setHome(true);
    } else if (location.pathname !== '/' && isHome) {
      setHome(false);
    }
  }, [isHome, location.pathname]);

  useEffect(() => {
    if (currentInteraction) {
      setOpen(true);
      setDrawerTabIndex(1);
    }
  }, [currentInteraction]);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleTriggeredOpen = () => {
    setOpen(true);
  };

  const onChangedIndex = index => {
    setDrawerTabIndex(index);
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <TopBar handleDrawerToggle={handleDrawerToggle} />
        <NavigationDrawer
          open={open}
          selectedMenuIndex={drawerTabIndex}
          onTriggeredOpen={handleTriggeredOpen}
          onChangedIndex={onChangedIndex}
        />
        <Box width="100%" className={classes.content}>
          <div className={classes.toolbar} />
        </Box>
      </div>
    </>
  );
};

Container.propTypes = {
  classes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({}),
  currentInteraction: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Container.defualtProps = {
  currentInteraction: '',
};

const mapStateToProps = createStructuredSelector({
  pinnedTabs: makeSelectPinnedTabs(),
  tabs: makeSelectTabs(),
  user: makeSelectUser(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(withRouter(withStyles(styles, { withTheme: true })(Container)));
