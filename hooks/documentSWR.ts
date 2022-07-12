import useSWR, { SWRConfiguration } from "swr"
import { IDocument } from "../interfaces"

export const documentSWR = (url:string, config:SWRConfiguration={}) => {

    const { data, error } = useSWR<IDocument>(`/api${url}`, config)

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }


}