import { withStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import PropTypes from 'prop-types';
import React from 'react';
// import { idfy } from 'utils/common';

import TabButton from './TabButton';

const InternalZoomEffectButton = ({
  // transitionDelay,
  menuOpen,
  isActive,
  onClick,
  disabled,
  children,
  title,
}) => (
  <Zoom>
    <TabButton
      disabled={disabled}
      menuOpen={menuOpen}
      isActive={isActive}
      onClick={onClick}
      title={title}
    >
      {children}
    </TabButton>
  </Zoom>
);

InternalZoomEffectButton.propTypes = {
  children: PropTypes.node,
  // transitionDelay: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  title: PropTypes.string,
};

InternalZoomEffectButton.defaultProps = {
  disabled: false,
};

const ZoomEffectButton = withStyles(() => ({}))(InternalZoomEffectButton);

export default ZoomEffectButton;
