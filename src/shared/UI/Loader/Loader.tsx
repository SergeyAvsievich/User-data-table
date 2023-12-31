import { LoaderProps } from './Loader.props'
import styled, {keyframes} from 'styled-components'

const loaderAnimation = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`

const StyledLoader = styled.div`
display: inline-block;
position: relative;
width: 80px;
height: 80px;
& div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 6px solid ${props => props.theme.colors.primary};
    border-radius: 50%;
    animation: ${loaderAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.theme.colors.primary} transparent transparent transparent;
}
& div:nth-child(1) {
    animation-delay: -0.45s;
}
& div:nth-child(2) {
    animation-delay: -0.3s;
}
& div:nth-child(3) {
    animation-delay: -0.15s;
}
`

export const Loader = ({}: LoaderProps): JSX.Element => (
    <StyledLoader>
        <div></div><div></div><div></div><div></div>
    </StyledLoader>
)