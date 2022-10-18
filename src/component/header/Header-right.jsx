import React, { memo } from 'react';
import { RightStyle } from './style';
import IntelLogo from '../../assets/icon/intel';
import Menu from '../../assets/icon/menu';
import User from '../../assets/icon/user';
const HeaderRight = memo(() => {
  return (
    <RightStyle>
      <div className='left'>
        <span>登陆</span>
        <span>注册</span>
        <IntelLogo />
      </div>
      <div className='right'>
        <Menu />
        <User />
      </div>
    </RightStyle>
  );
});

export default HeaderRight;
