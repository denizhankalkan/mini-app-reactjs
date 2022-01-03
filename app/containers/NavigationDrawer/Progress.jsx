import { Grid, makeStyles, Typography, withTheme } from '@material-ui/core';
import ProgressLabel from 'components/ProgressLabel';
import React from 'react';

const styles = theme => ({
  panelContainer: {
    padding: '5px 10px',
    margin: '5px',
    height: 94,
    background: theme.palette.common.paleGrey,
    border: `1px solid ${theme.palette.common.lightPeriwinkle}`,
    borderRadius: '2px',
    '&:hover': {
      color: theme.palette.primary.main,
      background: theme.palette.background.paper,
      cursor: 'pointer',
    },
  },
  panelContainerTitleContainer: {
    display: 'table-cell',
    verticalAlign: 'middle',
    height: 70,
  },
  panelSummaryTitle: {
    padding: '0px 8px',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  panelSummaryDetailTitle: {
    padding: '0px 8px',
    fontSize: '14px',
  },
  progressLabel: {
    margin: '4px 0 4px 4px',
  },
});

const datas = [
  {
    id: 0,
    label: 'Map Operations',
    target: 50,
    completed: 45,
  },

  {
    id: 1,
    label: 'Heatmap',
    target: 50,
    completed: 30,
  },

  {
    id: 2,
    label: 'Restricted Area',
    target: 50,
    completed: 30,
  },
  {
    id: 3,
    label: 'Zone Management',
    target: 50,
    completed: 30,
  },
  {
    id: 4,
    label: 'Zone Management',
    target: 50,
    completed: 30,
  },
  {
    id: 5,
    label: 'Zone Management',
    target: 50,
    completed: 30,
  },
];

const ChartSummary = ({ theme }) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return datas.map(item => (
    <div key={`item-${item.id}`} className={classes.panelContainer}>
      <Grid container>
        <Grid item xs={4}>
          <ProgressLabel
            className={classes.progressLabel}
            progress={(100 * item.completed) / item.target}
            trackColor={theme.palette.common.lightGrayishBlue}
            textColor={theme.palette.text.primary}
            size={75}
            progressWidth={8}
            trackWidth={8}
            cornersWidth={4}
            text={`%${item.completed}`}
          />
        </Grid>
        <Grid item xs={8}>
          <div className={classes.panelContainerTitleContainer}>
            <Typography className={classes.panelSummaryTitle}>
              {item.label}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  ));
};
export default withTheme(ChartSummary);
