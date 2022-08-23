import { useState, useCallback } from 'react'

type ReqConfig = {
    url: string, 
    method?: string | undefined,
    headers?: HeadersInit | undefined,
    body?: object | null,
    onSuccess?: any | null,
    onFail?: any | null,
}

const useHttp = () => {
    const [fetchedData, setFetchedData] = useState<any>([])
    const sendRequest = useCallback(async (requestConfig: ReqConfig) => {
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            })
            const data = await response.json()
            setFetchedData(data)
            requestConfig.onSuccess && requestConfig.onSuccess()
        } catch (err) {
            console.log(err)
            requestConfig.onFail && requestConfig.onFail()
        }
    }, [])
    return {
        fetchedData,
        sendRequest
    }
}

export default useHttp