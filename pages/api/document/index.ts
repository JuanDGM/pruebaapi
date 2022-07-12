import type { NextApiRequest, NextApiResponse } from 'next'
import { mongoDB } from "../../../database"
import { IDocument } from '../../../interfaces'
import { Document } from '../../../models/document'

type Data =
    | { message: string }
    | IDocument
    | IDocument[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'POST':
            return createDocument(req, res)
        case 'GET':
            return getAllDocument(req, res)
        default:
            return res.status(400).json({ message: 'badRequest' })
    }

}

const createDocument = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const data = req.body as IDocument;
    try {
        await mongoDB.connect();
        const newDocument = await Document.create(data);
        await mongoDB.disconnect();
        return res.status(200).json(newDocument)
    } catch (error) {
        return res.status(500).json({message:'BadRequest'})
    }
}

const getAllDocument = async(req: NextApiRequest, res: NextApiResponse<Data>)=> {
    try {
        await mongoDB.connect();
        const documents = await Document.find({});
        await mongoDB.disconnect();
        return res.status(200).json(documents)
    } catch (error) {
        return res.status(500).json({message:'BadRequest'})
    }
}

