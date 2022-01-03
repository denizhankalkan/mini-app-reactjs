import PropTypes from 'prop-types';
import React from 'react';
import { Grid } from '@material-ui/core';
import ExpansionCard from '../ExpansionCard';

const DeviceCard = props => {
  const { title, checkbox, key } = props;

  return (
    <>
      <Grid>
        <ExpansionCard title="Total Gateway" checkbox />
      </Grid>
    </>
  );
};

DeviceCard.propTypes = {
  title: PropTypes.string, // eslint-disable-line react/forbid-prop-types
  checkbox: PropTypes.bool,
};

export default DeviceCard;
