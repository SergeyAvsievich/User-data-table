import { InputProps } from './Input.props'
import styled from 'styled-components'

const StyledInput = styled.input`
width: 136px;
border-radius: 5px;
border: 1px solid ${(props) => props.theme.colors.primary};
padding: 5px 5px;
outline: none;
font-size: 18px;
&::placeholder {
    color: ${(props) => props.theme.colors.primary};
};
&::webkit-input-placeholder {
    color: ${(props) => props.theme.colors.primary};
};
&::-moz-placeholder {
    color: ${(props) => props.theme.colors.primary};
};
`

export const Input = ({ className, ...props }: InputProps) => {
    return (
        <StyledInput
            {...props}
        />
    )
}