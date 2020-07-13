import styled from "styled-components"

export const NavWrapper = styled.nav`
    grid-column:10/span 3;
    grid-row:1/2;
    align-items: center;
    display: flex;
    
    @media ${props =>props.theme.breakpoints.tablet}{
        grid-column: 2/span 6;
    }
`