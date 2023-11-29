export function debounce<T extends (...args: any[]) => any>(fn: T, wait: number) {
    let timeout: ReturnType<typeof setTimeout> | undefined
    return function(...args: any[]) {
        const later = () => {
            clearTimeout(timeout)
            fn.apply(this, args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}