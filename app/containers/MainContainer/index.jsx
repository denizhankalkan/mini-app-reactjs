import { Box, Grid, withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from 'components/TopBar';
// import { changeIninStatus } from 'containers/App/actions';
import {
  makeSelectPinnedTabs,
  makeSelectTabs,
  makeSelectUser,
} from 'containers/App/selectors';
// import CollapsableBreadcrumbs from 'containers/CollapsableBreadcrumbs';
import NavigationDrawer from 'containers/NavigationDrawer';
// import { makeSelectCurrentInteraction } from 'containers/PhoneProvider/selectors';
import PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import styles from './index.style';

const Container = ({
  location,
  classes,
  currentInteraction,
  tabs,
  pinnedTabs,
}) => {
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

  const getMainContentSize = () => 12 - 4 * pinnedTabs.length;

  // const withPinnedContainer = (innerChildren) => (
  //   <Grid container spacing={1}>
  //     {pinnedTabs.map((tabPinned) => (
  //       <Grid key={`tab-pinned-component-${tabPinned.id}`} item xs={4}>
  //         {tabPinned.component}
  //       </Grid>
  //     ))}

  //     <Grid item xs={getMainContentSize()}>
  //       {innerChildren}
  //     </Grid>
  //   </Grid>
  // );

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <TopBar handleDrawerToggle ={handleDrawerToggle} />
        <NavigationDrawer
          open={open}
          selectedMenuIndex={drawerTabIndex}
          onTriggeredOpen={handleTriggeredOpen}
          onChangedIndex={onChangedIndex}
        />
        <Box width="100%" className={classes.content}>
          <div className={classes.toolbar} />
          {/* <main className={classes.content}>
            {tabs.length > 0 && <CollapsableBreadcrumbs tabs={tabs} />}
            {pinnedTabs.length > 0 && withPinnedContainer(children)}
            {pinnedTabs.length === 0 && children}
          </main> */}

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
  tabs: PropTypes.arrayOf(PropTypes.shape({})),
  pinnedTabs: PropTypes.arrayOf(PropTypes.shape({})),
  currentInteraction: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Container.defualtProps = {
  currentInteraction: '',
};

const mapStateToProps = createStructuredSelector({
  // currentInteraction: makeSelectCurrentInteraction(),
  pinnedTabs: makeSelectPinnedTabs(),
  tabs: makeSelectTabs(),
  user: makeSelectUser(),
});

// export function mapDispatchToProps(dispatch) {
//   return {
//     onChangeIninStatus: (status) => dispatch(changeIninStatus(status)),
//   };
// }

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(withRouter(withStyles(styles, { withTheme: true })(Container)));
