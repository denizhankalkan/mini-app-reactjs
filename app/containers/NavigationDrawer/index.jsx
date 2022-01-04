import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import classNames from 'classnames';
import { StyledBadge } from 'components/Badge';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './index.style';
import NavigationItem from './NavigationItem';
import PhoneItem from './PhoneItem';
import Progress from './Progress';

const NavigationDrawer = ({
  classes,
  open,
  selectedMenuIndex,
  onTriggeredOpen,
  onChangedIndex,
}) => {
  const dailyList = 'Daily List';
  const performanceIndicators = 'Device Control';
  const callControl = 'Call Control';

  const handleChangeIndex = index => {
    if (onChangedIndex) {
      onChangedIndex(index);
    }

    if (onTriggeredOpen) {
      onTriggeredOpen();
    }
  };

  return (
    <Drawer
      id="navigation-drawer"
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: classNames(classes.paper, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      open={open}
    >
      <Grid
        container
        className={classNames(classes.root, {
          [classes.rootOpen]: open,
        })}
      >
        <Grid item xs={open ? 4 : 12}>
          <NavigationItem
            isActive={selectedMenuIndex === 0}
            open={open}
            transitionDelay="0ms"
            onClick={() => handleChangeIndex(0)}
            title={dailyList}
          >
            <CalendarTodayRoundedIcon />
          </NavigationItem>
        </Grid>

        <Grid item xs={open ? 4 : 12}>
          <PhoneItem
            isActive={selectedMenuIndex === 1}
            open={open}
            transitionDelay="100ms"
            onClick={() => handleChangeIndex(1)}
            title={callControl}
          >
            <StyledBadge color="primary">
              <PhoneRoundedIcon className={classes.icon} />
            </StyledBadge>
          </PhoneItem>
        </Grid>

        <Grid item xs={open ? 4 : 12}>
          <NavigationItem
            isActive={selectedMenuIndex === 2}
            open={open}
            transitionDelay="200ms"
            onClick={() => handleChangeIndex(2)}
            title={performanceIndicators}
          >
            <BarChartRoundedIcon />
          </NavigationItem>
        </Grid>
      </Grid>
      <Divider
        className={classNames(classes.hr, {
          [classes.hide]: !open,
        })}
      />

      <Zoom
        id="navigation-zoom"
        in={open}
        style={{ transitionDelay: open ? '300ms' : '0ms' }}
      >
        <div
          className={classNames(classes.scrollable, {
            [classes.hide]: !open,
          })}
        >
          {selectedMenuIndex === 2 && <Progress />}
        </div>
      </Zoom>
    </Drawer>
  );
};

NavigationDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  selectedMenuIndex: PropTypes.number,
  onTriggeredOpen: PropTypes.func,
  onChangedIndex: PropTypes.func,
};

NavigationDrawer.defaultProps = {
  selectedMenuIndex: 0,
  onTriggeredOpen: null,
  onChangedIndex: null,
};

const withConnect = connect(null);

export default compose(
  withConnect,
  memo,
)(withStyles(styles, { withTheme: true })(NavigationDrawer));
