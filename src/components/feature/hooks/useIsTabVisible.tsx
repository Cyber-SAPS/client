import { useState, useEffect, useCallback } from 'react'

export function useIsTabVisible() {
    const [isVisible, setIsVisible] = useState(!document.hidden)

    const handleVisibility = useCallback(() => {
        setIsVisible(!document.hidden)
    }, [])

    useEffect(() => {
        document.addEventListener('visibilitychange', handleVisibility)

        return () => {
            document.removeEventListener('visibilitychange', handleVisibility)
        }
    }, [handleVisibility])

    return isVisible // returns boolean
}

export default useIsTabVisible

// Hook Use Case
//  You can use this hook to check if the user has changed the tab or lost focus from the browser tab.
//  This type of hook can mainly be used on online exam portals where candidates are not allowed to change the browser tab.
//  to detect how much time the user has lost focus from your page. Just send a request to the server and store the status data.

// function MyComponent() {
//     const isVisible = isTabVisible()
//     return <>
//         {isVisible && <span>Status is Visible</span>}
//     </>
// }