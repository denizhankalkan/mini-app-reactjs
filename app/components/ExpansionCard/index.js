import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  Grid,
  IconButton,
  makeStyles,
  Tooltip,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clx from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import styles from './index.style';

const ExpansionCard = props => {
  const {
    children,
    title,
    subheader,
    checkbox,
    checked,
    editable,
    onChange,
    expandStatus,
    width,
    number,
    element,
  } = props;
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = () => {
    onChange(!checked);
  };

  useEffect(() => {
    setExpanded(!expandStatus);
  }, [!expandStatus]);

  return (
    <Card
      className={clx(classes.root, {
        [classes.cardContent]: !checkbox,
        [classes.rootMd]: width === 'md',
      })}
      style={{ height: '80px' }}
    >
      <CardHeader
        // action={
        //   <IconButton
        //     className={clx(classes.expand, {
        //       [classes.expandOpen]: expanded,
        //     })}
        //     onClick={handleExpandClick}
        //     aria-expanded={expanded}
        //   >
        //     <ExpandMoreIcon />
        //   </IconButton>
        // }
        title={
          <Grid
            className={clx(classes.cardTitleGrid, {
              [classes.cardTitleGridWithAvatar]: checkbox,
            })}
          >
            <Tooltip title={title} interactive placement="top-end">
              <Typography noWrap style={{marginLeft: 20}}>
                <strong className={classes.strongFontW}>{title}</strong>
              </Typography>
            </Tooltip>
          </Grid>
        }
      />
      <Grid container style={{ marginLeft: 20, marginTop: 20 }}>
        <Grid>{element}</Grid>

        <Grid>{number}</Grid>
      </Grid>

      <Collapse timeout="auto">
        <CardContent
          number={
            <Typography noWrap>
              <strong className={classes.strongFontW}>{number}</strong>
            </Typography>
          }
        />
      </Collapse>
    </Card>
  );
};

ExpansionCard.propTypes = {
  children: PropTypes.node.isRequired,
  number: PropTypes.number,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  subheader: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
  checkbox: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  editable: PropTypes.bool,
  expandStatus: PropTypes.bool,
  width: PropTypes.oneOf(['sm', 'md']),
  element: PropTypes.element,
};

ExpansionCard.defaultProps = {
  checkbox: false,
  title: '',
  subheader: '',
  onChange: () => {},
  checked: true,
  editable: true,
  expandStatus: false,
  width: 'sm',
};

export default ExpansionCard;
