import styled from "styled-components"
import { Htag } from "../../shared"
import { UserDataTable } from "../../widgets"
import { withLayout } from "../layout/Layout"

const StyledMainPage = styled.div`
display: flex;
justify-content: center;
margin: 15px;
`

export const Main = withLayout(({ }): JSX.Element => {
    return (
        <>
            <StyledMainPage>
                <Htag tag="h2">User data table</Htag>
            </StyledMainPage>
            <UserDataTable />
        </>
    )
})
