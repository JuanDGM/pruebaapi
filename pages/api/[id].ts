import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: any
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.setHeader('Content-Type', 'application/json')

    const {id} = req.query;
    
    res.status(200).json({ name: id })
}