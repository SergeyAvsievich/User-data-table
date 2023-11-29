import { HtagProps } from './Htag.props'
import styled from 'styled-components'

const StyledHtag1 = styled.h2`

`

const StyledHtag2 = styled.h2`
font-size: 18px;
font-weight: 400;
margin: 0;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
color: ${props => props.theme.colors.primary};
text-transform: uppercase;  
`

export const Htag = ({  tag = 'h1', children}: HtagProps) => {
    switch(tag) {
        case 'h1':
            return <StyledHtag1>{children}</StyledHtag1>
        case 'h2':
            return <StyledHtag2>{children}</StyledHtag2>
        default: 
            return <></>
    }
}