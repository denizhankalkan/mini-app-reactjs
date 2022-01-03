import { withStyles } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';

const StyledBadge = withStyles(theme => ({
  badge: {
    top: '40%',
    right: '15%',
    border: `2px solid ${theme.palette.divider}`,
    width: 15,
    height: 15,
    fontSize: 10,
    color: theme.palette.common.pureWhite,
  },
}))(Badge);

const StarredBadge = withStyles(theme => ({
  badge: {
    top: '95%',
    right: '10%',
    border: `2px solid ${theme.palette.divider}`,
    width: 10,
    height: 20,
    color: 'white',
    paddingBottom: 2,
  },
}))(Badge);

export { StyledBadge, StarredBadge };
