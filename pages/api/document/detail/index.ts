import type { NextApiRequest, NextApiResponse } from 'next'
import { mongoDB } from '../../../../database';
import { Document, ObsoleteDocument } from '../../../../models/document';

type Data =
    | { message: string }
    | any


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch (req.method) {
        case 'POST':
            return getAllDocumentBy(req, res)
        case 'PUT':
            return updateDocumentById(req, res)
        default:
            return res.status(400).json({ message: 'BadRequest' });
    }
    
}

const updateDocumentById = async (req: NextApiRequest, res: NextApiResponse<any>) => {
    const data = req.body;
    await mongoDB.connect();
    await ObsoleteDocument.create({
        documentId:data._id,
        file:data,
        version:data.version,
        responsibleAprobe:data.responsibleAprobe,
        dateUpdate:new Date()
    })
    const document = await Document.findByIdAndUpdate(data._id, data)
    await mongoDB.disconnect();
    return res.status(200).json(document)
}

const getAllDocumentBy = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    try {
        //let { id } = req.query as { id: string };
        let { id } = req.body as { id: string };
        await mongoDB.connect();
        const document = await Document.findById(id).populate('obsoletes')
        await mongoDB.disconnect();
        return res.status(200).json(document)
        
    } catch (error) {
        await mongoDB.disconnect();
        return res.status(500).json({error, message:"Error en server"})
        
    }
    }