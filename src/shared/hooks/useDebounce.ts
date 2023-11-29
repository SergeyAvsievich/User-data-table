import {useMemo} from 'react'
import { debounce } from '../helpers/debounce.function'
import { useLatest } from './useLatest'

export function useDebounce<T extends (...args: any[]) => any>(cb: T, ms: number) {
    const latestCb = useLatest(cb)
    
    return useMemo(
        () =>
            debounce((...args) => {
                latestCb.current(...args)
            }, ms),
        [ms, latestCb]    
    )
}