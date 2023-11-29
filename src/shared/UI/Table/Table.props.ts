import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface IColumns {
    title: ReactNode
    dataIndex: string
    key: string
}

export interface TableProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    columns: IColumns[],
    dataSource: any[]
    onClickRow: (index: number) => void 
}