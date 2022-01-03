import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const InternalTabButton = ({
  classes,
  menuOpen,
  isActive,
  onClick,
  disabled,
  children,
  title,
}) => (
  <Button
    id={title}
    disabled={disabled}
    onClick={onClick}
    className={classNames(classes.button, {
      [classes.buttonClose]: !menuOpen,
      [classes.activeOpen]: isActive && menuOpen,
      [classes.activeClose]: isActive && !menuOpen,
    })}
    title={title}
  >
    {children}
  </Button>
);

InternalTabButton.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  title: PropTypes.string,
};

InternalTabButton.defaultProps = {
  disabled: false,
};

const TabButton = withStyles(theme => ({
  button: {
    border: `1px solid ${theme.palette.divider}`,
    padding: '15px 10px',
    width: '100%',
    maxWidth: '85px',
  },
  buttonClose: {
    padding: '35px 10px',
    border: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  activeOpen: {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    color: theme.palette.common.pureWhite,
    '&:hover': {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.main,
    },
  },
  activeClose: {
    color: theme.palette.primary.main,
  },
}))(InternalTabButton);

export default TabButton;
