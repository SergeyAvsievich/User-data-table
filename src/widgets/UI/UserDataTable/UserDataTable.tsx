import { Loader, SearchButton, Table } from '../../../shared'
import { IUserData, useGetUserDataQuery } from '../../../entities'
import {ActiveRow, InputAddress, InputDescription, InputEmail, InputFirstName, InputId, InputLastName, InputPhone, Sort, SortEnum} from '../../../features'
import {useEffect, useState, useReducer } from 'react'
import { Pagination } from '../../../features/UI/Pagination/Pagination'
import { tableReducer } from '../../reducers/table.state'
import styled from 'styled-components'
import { INITIAL_STATE } from '../../constants/table-state.constant'

const StyledLoderWrapper = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const StyledWrapper = styled.div`
padding-top: 5px;
padding-left: 30px;
& span {
  margin-left: 5px;
}
& hr {
  margin: 25px;
}
`
const StyledContainer = styled.div`
display: flex;
gap: 10px;
align-items: center;
& svg {
  cursor: pointer;
}
`
const StyledError = styled.h4`
position: absolute;
color: red;
`

export const UserDataTable = ({}) => {
  const [activePage, setActivePage] = useState<number>(1)
  const [activeRow, setActiveRow] = useState<number>(0)
  const {data: initialData, isLoading} = useGetUserDataQuery('')

  const [searchById, setSearchById] = useState<number | string>('')
  const [searchByFirstName, setSearchByFirstName] = useState<string>('')
  const [searchByLastName, setSearchByLastName] = useState<string>('')
  const [searchByEmail, setSearchByEmail] = useState<string>('')
  const [searchByPhone, setSearchByPhone] = useState<string>('')
  const [searchByAddress, setSearchByAddress] = useState<string>('')
  const [searchByDescription, setSearchByDescription] = useState<string>('')

  const [{userData, sort, countPages}, dispatchTable] = useReducer(tableReducer, INITIAL_STATE)
  let startPage = activePage > 1 ? activePage * 5 - 4 : 1   

  useEffect(() => {
    if (initialData?.length) {
      dispatchTable({type: SortEnum.Init, payload: initialData})
      dispatchTable({type: 'SET_COUNT_PAGES'})
    }
  }, [initialData])

  function constructTableData(tableData: IUserData[]) {
    if (!tableData.length) constractError() 
    const slice = tableData.slice(startPage - 1, startPage + 4)
    const result = slice.map(el => {
      return {
          key: el.id, 
          id: el.id, 
          firstName: el.firstName, 
          lastName: el.lastName, 
          email: el.email, 
          phone: el.phone,
          address: el.address.streetAddress,
          description: <span>{el.description}</span>
      }
    })
    return result
  }

  const constractError = () => {
    const error = [
      {
        key: 'error',
        name: (
          <StyledError>
            Упс... ничего не найдено
          </StyledError>
        )
      }
    ]
    return error
  }

  const onSearchHandler = () => {
      const updetedData = { 
          id: searchById,
          firstName: searchByFirstName,
          lastName: searchByLastName,
          email: searchByEmail,
          phone: searchByPhone,
          address: {
            streetAddress: searchByAddress,
            city: '',
            state: '',
            zip: '',
          },
          description: searchByDescription,
      }

      dispatchTable({type: SortEnum.Init, payload: initialData!})
      dispatchTable({type: 'FILTER', payload: updetedData})
      dispatchTable({type: 'SET_COUNT_PAGES'})
      setActiveRow(0)
  }

  const constructTitleId = () => (
      <StyledContainer>
        <Sort sortState={sort.id} 
          onDescSort={() => dispatchTable({type: SortEnum.DescId})} 
          onAscSort={() => dispatchTable({type: SortEnum.AscId})} 
        />
        <InputId setSearchQuery={setSearchById} />
      </StyledContainer>
  )

  const constructTitleFirstName = () => (
      <StyledContainer>
        <Sort sortState={sort.firstName} 
          onDescSort={() => dispatchTable({type: SortEnum.DescFirstName})} 
          onAscSort={() => dispatchTable({type: SortEnum.AscFirstName})} 
        />
        <InputFirstName setSearchQuery={setSearchByFirstName} />
      </StyledContainer>
  )

  const constructTitleLastName = () => (
      <StyledContainer>
        <Sort sortState={sort.lastName} 
          onDescSort={() => dispatchTable({type: SortEnum.DescLastName})} 
          onAscSort={() => dispatchTable({type: SortEnum.AscLastName})} 
        />
        <InputLastName setSearchQuery={setSearchByLastName}/>
      </StyledContainer>
  )

  const constructTitleDescription = () => (
      <StyledContainer>
        <InputDescription setSearchQuery={setSearchByDescription} />
        <SearchButton onClick={onSearchHandler} />
      </StyledContainer>
  )

  const columns = [
      {
        title: constructTitleId(),
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: constructTitleFirstName(),
        dataIndex: 'firstName',
        key: 'firstName',
      },
      {
        title: constructTitleLastName(),
        dataIndex: 'lastName',
        key: 'lastName',
      },
      {
        title: <InputEmail setSearchQuery={setSearchByEmail} />,
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: <InputPhone setSearchQuery={setSearchByPhone} />,
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: <InputAddress setSearchQuery={setSearchByAddress} />,
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: constructTitleDescription(),
        dataIndex: 'description',
        key: 'description',
      },
  ]

    const onClick = (index: number) => {
        setActiveRow(index + 1)
    }

    return (
      <>
        {isLoading && <StyledLoderWrapper><Loader /></StyledLoderWrapper> }
        {!isLoading && <StyledWrapper>
            <Table 
              dataSource={constructTableData(userData)} 
              columns={columns}
              onClickRow={(val) => onClick(val)}
            />
            <Pagination 
              activePage={activePage} 
              countPage={countPages} 
              setActivePage={(val) => {
                setActivePage(val)
                setActiveRow(0)
              }}
            />
            {
              !!activeRow && initialData?.length && (
                <>
                  <hr/>
                  <ActiveRow data={constructTableData(userData)[activeRow - 1]} />
                </>
              )
            }
        </StyledWrapper>}
      </>
    )
}