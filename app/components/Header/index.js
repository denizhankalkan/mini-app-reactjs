import React, { useEffect } from 'react';
import Card from 'components/ExpansionCard';
import { PropTypes } from 'prop-types';
import { Grid } from '@material-ui/core';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import axios from 'axios';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import HideSourceIcon from '@mui/icons-material/HideSource';
import BatteryCharging20Icon from '@mui/icons-material/BatteryCharging20';
import Battery60Icon from '@mui/icons-material/Battery60';

const Header = ({ title, children, subHeader }) => {
  const baseURL = ' https://apidev.boniglobal.com/Test/DeviceStatistics';
  const [deviceStatics, setDeviceStatics] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then(response => {
      setDeviceStatics(response.data);
    });
  }, []);

  console.log('deviceStatics', deviceStatics?.data);

  return (
    <>
      <Grid container style={{ marginTop: '20px' }}>
        <Grid item xs={3} style={{ height: '125px' }}>
          <Card title="Total Gateway" />
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={4}>
              <Card
                title="Active Gateway"
                number="1"
                element={<OnlinePredictionIcon />}
              />
            </Grid>
            <Grid item xs={3}>
              <Card
                title="Total Device"
                number={deviceStatics?.data.totalDevice}
                element={<TabletAndroidIcon />}
              />
            </Grid>
            <Grid item xs={3}>
              <Card
                title="Law Battery Users"
                number={deviceStatics?.data.lowBatteryCount}
                element={<BatteryCharging20Icon />}
              />
            </Grid>
            <Grid item xs={2}>
              <Card
                title="Average Battery"
                number={deviceStatics?.data.averageBattery}
                element={<Battery60Icon />}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4}>
              <Card
                title="Offline Gateway"
                number={deviceStatics?.data.totalPassive}
                element={<HideSourceIcon />}
              />
            </Grid>
            <Grid item xs={3}>
              <Card title="Active Gateway" />
            </Grid>
            <Grid item xs={3}>
              <Card title="Active Gateway" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

// eslint-disable-next-line react/no-typos
Header.PropTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
