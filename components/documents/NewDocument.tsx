import { FC } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { leansysApi } from "../../api";
import { IDocument } from "../../interfaces";

type FormData = {
  _id?: string;
  documentName: string;
  documentType: string;
  code: string;
  version: string;
  process: string;
  subProcess: string;
  responsible: string;
  status: string;
  fileVisor: string;
  fileDownload: string;
  createdAt: string;
  updatedAt?: string;
};

interface Props {
  document?: IDocument;
}

export const NewDocument: FC<Props> = ({ document }) => {

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: document
  });

  const onSubmit = handleSubmit(data => {

    !data._id
      ? createDocument(data)
      : updateDocument(data)

  });

  const createDocument = async (data: FormData) => {
    const newDocument = await leansysApi.post<IDocument>('/document', data)
    console.log("en crear", data);
    return newDocument;
  }

  const updateDocument = async (data: FormData) => {
    console.log("En editar", data);
    const newDocument = await leansysApi.put<IDocument>('/document/detail/', data)
    return newDocument;
  }


  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2} display='flex' flexWrap='wrap'>

        <Grid item xs={12} sm={4} md={6}>
          <TextField
            label="Nombre documento"
            autoComplete="off"
            fullWidth
            {...register('documentName', {
              required: 'Este campo es requerido'
            })}
            error={!!errors.documentName}
            helperText={errors.documentName?.message}
          />
          {
            document
              ? (
                <input
                  type="hidden"
                  {...register('_id')}
                />
              ):''
          }
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <TextField
            label="Tipo documento"
            autoComplete="off"
            fullWidth
            {...register('documentType', {
              required: 'Este campo es requerido'
            })}
            error={!!errors.documentType}
            helperText={errors.documentType?.message}
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <TextField
            label="Código"
            autoComplete="off"
            fullWidth
            {...register('code', {
              required: 'Este campo es requerido'
            })}
            error={!!errors.code}
            helperText={errors.code?.message}
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <TextField
            label="Version"
            autoComplete="off"
            fullWidth
            {...register('version', {
              required: 'Este campo es requerido'
            })}
            error={!!errors.version}
            helperText={errors.version?.message}
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <TextField
            label="Proceso"
            autoComplete="off"
            fullWidth
            {...register('process', {
              required: 'Este campo es requerido'
            })}
            error={!!errors.process}
            helperText={errors.process?.message}
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <TextField
            label="Subproceso"
            autoComplete="off"
            fullWidth
            {...register('subProcess', {
              required: 'Este campo es requerido'
            })}
            error={!!errors.subProcess}
            helperText={errors.subProcess?.message}
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <TextField
            label="Responsable"
            autoComplete="off"
            fullWidth
            {...register('responsible', {
              required: 'Este campo es requerido'
            })}
            error={!!errors.responsible}
            helperText={errors.responsible?.message}
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <TextField
            label="Estado"
            autoComplete="off"
            fullWidth
            {...register('status', {
              required: 'Este campo es requerido'
            })}
            error={!!errors.status}
            helperText={errors.status?.message}
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <TextField
            label="Documentos visualizar"
            type="text"
            autoComplete="off"
            fullWidth
            {...register('fileVisor', {
              required: 'Este campo es requerido'
            })}
            error={!!errors.fileVisor}
            helperText={errors.fileVisor?.message}
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <TextField
            label="Documentos descargar"
            type="text"
            autoComplete="off"
            fullWidth
            {...register('fileDownload', {
              required: 'Este campo es requerido'
            })}
            error={!!errors.fileDownload}
            helperText={errors.fileDownload?.message}
          />
        </Grid>


        <Grid item display='flex' alignItems='center' xs={12} sm={4} md={2} >
          {
            document
              ? (
                <>
                  <Button sx={{ margin: '1px' }} type="submit">Editar</Button>
                  <Button sx={{ margin: '1px' }} variant="outlined" color="info" type="submit">Cancelar</Button>
                </>
              ) : (
                <>
                  <Button sx={{ margin: '1px' }} type="submit">Guardar</Button>
                  <Button sx={{ margin: '1px' }} variant="outlined" color="info" type="submit">Borrar</Button>
                </>
              )
          }

        </Grid>

      </Grid>
    </form>
  )
}
