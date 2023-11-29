import { SearchButtonProps } from './SearchButton.props'
import SearchIcon from '../../assets/search.svg?react'
import styled from 'styled-components'

const StyledSearchIcon = styled.button`
padding: 7px 10px;
border-radius: 5px;
background: ${props => props.theme.colors.primary};
cursor: pointer;
`
export const SearchButton = ({...props}: SearchButtonProps) => {
    return (
        <StyledSearchIcon  {...props} ><SearchIcon/></StyledSearchIcon>
    )
}