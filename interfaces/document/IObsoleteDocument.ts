import { IDocument } from "./IDocument";

export interface IObsoleteDocument{
    documentId: string;
    dateUpdate: string;
    responsibleAprobe:string;
    version: string;
    file: IDocument[];
}