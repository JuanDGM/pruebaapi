export interface IDocument {
    _id?: string;
    documentName: string;
    documentType: string;
    code: string;
    version: string;
    process: string;
    subProcess: string;
    responsible: string;
    status: string;
    fileVisor?: string;
    fileDownload?: string;
    createdAt: string;
    updatedAt?: string;
}