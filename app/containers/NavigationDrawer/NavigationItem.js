import PropTypes from 'prop-types';
import React from 'react';

import TabButton from './TabButton';
import ZoomEffectButton from './ZoomEffectButton';

const NavigationItem = ({
  open,
  isActive,
  disabled,
  onClick,
  transitionDelay,
  children,
  title,
}) => (
  <React.Fragment>
    {!open && (
      <TabButton
        menuOpen={open}
        isActive={isActive}
        disabled={disabled}
        onClick={onClick}
        title={title}
      >
        {children}
      </TabButton>
    )}
    {open && (
      <ZoomEffectButton
        transitionDelay={transitionDelay}
        menuOpen={open}
        isActive={isActive}
        onClick={onClick}
        title={title}
      >
        {children}
      </ZoomEffectButton>
    )}
  </React.Fragment>
);

NavigationItem.propTypes = {
  open: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  transitionDelay: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
};

NavigationItem.defaultProps = {
  transitionDelay: '0ms',
  disabled: false,
  children: null,
};

export default NavigationItem;
