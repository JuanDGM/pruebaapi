import mongoose,{Schema, Model} from "mongoose";
import { IDocument, IObsoleteDocument } from "../../interfaces";

const schema = new Schema({
    documentId: {type:Schema.Types.ObjectId, ref:'Document'},
    dateUpdate: {type: String},
    responsibleAprobe: {type: String},
    version: {type: String},
    file: {type: Array<IDocument>},
},{
    timestamps:true
});

const ObsoleteDocument:Model<IObsoleteDocument> = mongoose.models.ObsoleteDocument || mongoose.model('ObsoleteDocument', schema)

export default ObsoleteDocument;