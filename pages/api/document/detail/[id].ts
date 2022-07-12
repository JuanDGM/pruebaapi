import type { NextApiRequest, NextApiResponse } from 'next'
import { mongoDB } from '../../../../database';
import { IDocument } from '../../../../interfaces';
import { Document } from '../../../../models/document';

type Data =
    | { message: string }
    | any

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            let d = req.query;
            return res.status(200).json({message:d});
        //return getAllDocumentBy(req, res)
        default:
            return res.status(400).json({ message: 'BadRequest' });
    }
}

const getAllDocumentBy = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    try {
        let { id } = req.query;
        //let { id } = req.body as { id: string };
        /* await mongoDB.connect();
        const document = await Document.findOne({_id:id}).populate('obsoletes')
        await mongoDB.disconnect(); */
        return res.status(200).json(id)
        
    } catch (error) {
        await mongoDB.disconnect();
        return res.status(500).json({error, message:"Error en server"})
        
    }
    
    
}


