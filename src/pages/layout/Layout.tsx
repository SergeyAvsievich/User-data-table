import { LayoutProps } from './Layout.props'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledLayout = styled.div`
display: flex;
padding-top: 10px;
padding-left: 5px;
padding-right: 5px;
`

const Layout = ({ children}: LayoutProps): JSX.Element => {    
    return (
        <StyledLayout>
            <div>
                {children}
            </div>
        </StyledLayout>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayouteCoponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}