import React from 'react'
import {NavWrapper,LinkWrapper} from "../elements"

export const Nav = () => {
    return (
        <NavWrapper>
            <LinkWrapper to="/">Blog</LinkWrapper>
            <LinkWrapper to="/">About</LinkWrapper>
            <LinkWrapper to="/">Contact</LinkWrapper>
        </NavWrapper>
    )
}