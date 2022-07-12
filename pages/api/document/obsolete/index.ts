import type { NextApiRequest, NextApiResponse } from 'next'
import { mongoDB } from '../../../../database';
import { IObsoleteDocument } from '../../../../interfaces';
import { ObsoleteDocument } from '../../../../models/document';

type Data = 
    | { message: string }
    | IObsoleteDocument

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch (req.method) {
        case 'POST':
            return createObsoleteDocument(req, res);
        default:
            return res.status(200).json({ message: 'Example' });
    }
    
}

const createObsoleteDocument = async(req: NextApiRequest, res: NextApiResponse<Data>)=> {
    await mongoDB.connect();
    const obsoleteDocument:IObsoleteDocument = await ObsoleteDocument.create(req.body);
    await mongoDB.disconnect();
    return res.status(200).json(obsoleteDocument);
}
