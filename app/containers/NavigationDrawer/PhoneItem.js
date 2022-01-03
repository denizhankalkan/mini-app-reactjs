import PropTypes from 'prop-types';
import React from 'react';

import TabButton from './TabButton';
import ZoomEffectButton from './ZoomEffectButton';

const PhoneItem = ({
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
        disabled={disabled}
        isActive={isActive}
        onClick={onClick}
        title={title}
      >
        {children}
      </ZoomEffectButton>
    )}
  </React.Fragment>
);

PhoneItem.propTypes = {
  open: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  transitionDelay: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
};

PhoneItem.defaultProps = {
  transitionDelay: '0ms',
  children: null,
  disabled: false,
};

export default PhoneItem;
