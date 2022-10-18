import React, { memo } from 'react';
import { LeftStyle } from './style';
import LogoIcon from '../../assets/icon/logo';

const HeaderLeft = memo(() => {
  return (
    <LeftStyle>
      <LogoIcon class='icon' />
    </LeftStyle>
  );
});

export default HeaderLeft;
