import { PaginationProps } from "./Pagination.props"
import LeftArrowIcon from '../../assets/arrow-left.svg?react'
import RightArrowIcon from '../../assets/arrow-right.svg?react'
import styled, { css } from 'styled-components'

const StyledPagination = styled.div`
margin-top: 20px;
display: flex;
gap: 25px;
align-items: center;
color: ${props => props.theme.colors.primary};
& svg {
    cursor: pointer;
}
`

const StyledNumberPage = styled.div<{active: boolean}>`
height: 32px;
width: 32px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
cursor: pointer;
${props => props.active && css`
box-shadow: 0px 4px 4px 0px #00000040;
`}
`

export const Pagination = ({countPage, activePage, setActivePage}: PaginationProps): JSX.Element => {
    const onNextPage = () => {
        if (activePage + 1 <= countPage ) {
            setActivePage(activePage + 1)
        }
    }

    const onPrevPage = () => {
        if (activePage - 1 > 0) {
            setActivePage(activePage - 1)
        }
    }

    const onChangePage = (numberPage: number) => {
        setActivePage(numberPage)
    }

    const createPagination = (): JSX.Element => {
        if (countPage > 1) {
            return (
                <>
                    <LeftArrowIcon onClick={onPrevPage} />
                    {
                        [...Array(countPage)].map((_, index) => (
                            <StyledNumberPage
                                active={index + 1 === activePage ? true : false}
                                onClick={() => onChangePage(index + 1)}
                            >{index + 1}</StyledNumberPage>
                        ))
                    }
                    <RightArrowIcon onClick={onNextPage} />
                </>
            )
        }

        return <></>
    }
    
    return (
        <StyledPagination>
            {createPagination()}
        </StyledPagination>
    )
}