import React, { memo } from 'react'
import HeaderLeft from './Header-left'
import HeaderCenter from './Header-center'
import HeaderRight from './Header-right'
import { HeaderWrapper } from './style'

const Header = memo(() => {
    return (
        <HeaderWrapper>
            <HeaderLeft></HeaderLeft>
            <HeaderCenter></HeaderCenter>
            <HeaderRight></HeaderRight>
        </HeaderWrapper>
    )
})

export default Header