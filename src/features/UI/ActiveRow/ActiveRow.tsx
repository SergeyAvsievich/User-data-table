import styled from "styled-components"
import { ActiveRowProps } from "./ActiveRow.props"

const StyledActiveRow = styled.div`
display: flex;
color: ${props => props.theme.colors.primary};
& div {
    text-align: left;
    width: 172px;
};
& div:nth-child(4) {
    width: 205px;
};
`

export const ActiveRow = ({data}: ActiveRowProps): JSX.Element => {    
    return (
        <StyledActiveRow>
            <div>{data.id}</div>
            <div>{data.firstName}</div>
            <div>{data.lastName}</div>
            <div>{data.email}</div>
            <div>{data.phone}</div>
            <div>{data.address}</div>
            <div>{data.description}</div>
        </StyledActiveRow>
    )
}