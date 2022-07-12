import { Box, Button } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { leansysApi } from '../../api';

export const DocumentList = () => {
    const router = useRouter();

    const [documentRows, setDocumentRows] = useState([])

    useEffect(() => {
        getAllDocuments();
    }, [])

    const accessPage = (id: string) => {
        router.push(`/document/${id}`)
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'documentName',
            headerName: 'Documento',
            type: 'string',
            width: 250,
            editable: false,
        },
        {
            field: 'version',
            headerName: 'Version',
            type: 'number',
            width: 100,
            editable: false,
        },
        {
            field: 'process',
            headerName: 'Proceso',
            type: 'string',
            width: 200,
            editable: false,
        },
        {
            field: 'status',
            headerName: 'Estado',
            type: 'string',
            sortable: false,
            width: 100
        },
        {
            field: 'options',
            headerName: 'Opciones',
            sortable: false,
            width: 150,
            renderCell: ({ row }: GridValueGetterParams) => {
                return (
                    <Button
                        variant='contained'
                        onClick={() => accessPage(`${row.id}`)}
                    >Entrar</Button>
                )
            },
        },
    ];

    const getAllDocuments = async () => {
        const documents = await leansysApi.get('/document');
        const row = documents.data.map((element: any) => (
            {
                id: element._id,
                documentName: element.documentName,
                version: element.version,
                status: element.status,
            }
        ))
        setDocumentRows(row);
    }




    return (
        <Box sx={{ height: 400, width: '100%', background: '#ffffff' }}>
            <DataGrid
                rows={documentRows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    )
}