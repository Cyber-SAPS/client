import { useNetworkState } from '../hooks'

export const NetworkStatus =()=> {
        // Check if user has internet
        const isOnline = useNetworkState()
    return(
        <>
        {/* Display only if device is offline */}
        <div>
        {!isOnline && (
            <div className="toast">
                You are offline. Please check your connectivity and try again.
            </div>
       )}
        </div>
        </>
    )
}