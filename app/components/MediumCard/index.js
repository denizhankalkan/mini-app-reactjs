import {
  Card,
  CardHeader,
  Grid,
  makeStyles,
  Tooltip,
  Typography,
} from '@material-ui/core';
import clx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './index.style';

const ExpansionCard = props => {
  const { title, width, number, element } = props;
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Card
      className={clx(classes.root, {
        [classes.rootMd]: width === 'md',
      })}
      style={{ height: '180px' }}
    >
      <CardHeader
        title={
          <Grid className={clx(classes.cardTitleGrid)}>
            <Tooltip title={title} interactive placement="top-end">
              <Typography noWrap style={{ marginLeft: 20, marginTop: 10 }}>
                <strong className={classes.strongFontW}>{title}</strong>
              </Typography>
            </Tooltip>
          </Grid>
        }
      />
      <Grid container style={{ marginLeft: 20, marginTop: 20 }}>
        <Grid>
          <strong className={classes.strongFontElement}>{element}</strong>
        </Grid>
        <Grid style={{ marginLeft: 20 }}>
          <strong className={classes.strongFontNumber}>{number}</strong>
        </Grid>
      </Grid>
    </Card>
  );
};

ExpansionCard.propTypes = {
  number: PropTypes.number,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  width: PropTypes.oneOf(['sm', 'md']),
  element: PropTypes.element,
};

ExpansionCard.defaultProps = {
  title: '',
  width: 'sm',
};

export default ExpansionCard;
