import mongoose, { Schema, Model } from "mongoose";
import { IDocument } from "../../interfaces";

const schema = new Schema({
    documentName: { type: String, require: true },
    documentType: { type: String, require: true },
    code: { type: String, require: true },
    version: { type: String, require: true },
    process: { type: String, require: true },
    subProcess: { type: String, require: true },
    responsible: { type: String, require: true },
    status: { type: String, require: true },
    fileVisor: { type: String },
    fileDownload: { type: String },
    createdAt: { type: String, require: true },
    updatedAt: { type: String, require: true }
}, {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
})

schema.virtual('obsoletes', {
    ref: 'ObsoleteDocument',
    localField: '_id',
    foreignField: 'documentId'
})


const Document: Model<IDocument> = mongoose.models.Document || mongoose.model('Document', schema)

export default Document;