import { TableProps } from './Table.props'
import { ReactNode } from 'react'
import styled from 'styled-components'

const StyledTable = styled.div`
color: ${(props) => props.theme.colors.primary};
letter-spacing: 1px;
font-weight: 400;
height: 65vh;
width: 75vw;
& th, & td{
    padding-left: 25px;
    text-align: left;
    width: 160px;
};
& tbody td {
    cursor: pointer;
}
& tbody tr:hover {
    background: whitesmoke;
}
& th:first-child, & td:first-child{
    padding-left: 0;
}
& th {
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    padding-bottom: 13px;
    font-weight: normal;
}
& td {
    vertical-align: text-top;
    padding-top: 20px;
}
& td span{
    cursor: pointer;
    max-width: 155px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
}
`

export const Table = ({columns, dataSource, onClickRow}: TableProps) => {
    const onClickHandler = (index: number) => {
        onClickRow(index)
    }

    const createTableHeader = () => {
        return columns.map(col => (<th key={col.key}>{col.title}</th>))
    }

    const createRows = () => {
        return dataSource.map((row, index) => {
            return <tr onClick={() => onClickHandler(index)}>
                {
                    Object.entries(row).map(([key, val]) => {
                        if (key !== 'key') {
                            return (
                                <td key={key}>{val as ReactNode}</td>
                            )
                        }
                    })
                }
            </tr>
        })
    }

    return (
        <StyledTable>
            <table cellSpacing={0} cellPadding={0} >
                <thead>
                    <tr>
                        { createTableHeader() }
                    </tr>
                </thead>
                <tbody>
                    {createRows()}
                </tbody>
            </table>
        </StyledTable>
    )    
}