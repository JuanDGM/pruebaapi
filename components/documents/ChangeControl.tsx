import { Box, Button, Grid, Typography } from "@mui/material"
import { FC } from "react"
import { IDocument } from "../../interfaces"
import styles from '../../styles/Table.module.css'

interface Props {
  document?: IDocument
}

export const ChangeControl: FC<Props> = ({ document }) => {

  console.log("Obsoletes", Object(document).obsoletes);
  return (
    <Box>
      <Grid container display='flex' flexWrap='wrap' sx={{ display: { xs: 'none', sm: 'flex' } }} className={styles.rowTable}>
        <Grid item className={styles.cellTitle} sx={{ width: { sm: '7%' } }} >No</Grid>
        <Grid item className={styles.cellTitle} sx={{ width: { sm: '13%' } }}>Código</Grid>
        <Grid item className={styles.cellTitle} sx={{ width: { sm: '15%' } }}>Nombre documento</Grid>
        <Grid item className={styles.cellTitle} sx={{ width: { sm: '25%' } }}>Descripción</Grid>
        <Grid item className={styles.cellTitle} sx={{ width: { sm: '15%' } }}>Responsable</Grid>
        <Grid item className={styles.cellTitle} sx={{ width: { sm: '10%' } }}>Fecha actualización</Grid>
        <Grid item className={styles.cellTitle} sx={{ width: { sm: '15%' } }}>Opciones</Grid>
      </Grid>

      {
        Object(document).obsoletes.map((element: any,index:number) => (
          <Grid container display='flex' flexWrap='wrap' className={styles.rowTable} key={element._id}>
            <Grid item className={styles.cell} display='flex' flexWrap='wrap' sx={{ width: { xs: '10%', sm: '7%' } }} >
              <Typography className={styles.label} variant='caption' sx={{ width: '100%', display: { sx: 'block', sm: 'none' } }}>No</Typography>
              <Typography variant='body2' sx={{ width: '100%' }}>{index+1}</Typography>
            </Grid>
            <Grid item className={styles.cell} display='flex' flexWrap='wrap' sx={{ width: { xs: '30%', sm: '13%' } }}>
              <Typography className={styles.label} variant='caption' sx={{ width: '100%', display: { sx: 'block', sm: 'none' } }}>Código</Typography>
              <Typography variant='body2' sx={{ width: '100%' }}>{element.file[0].code}</Typography>
            </Grid>
            <Grid item className={styles.cell} sx={{ width: { xs: '60%', sm: '15%' } }}>
              <Typography className={styles.label} variant='caption' sx={{ width: '100%', display: { sx: 'block', sm: 'none' } }}>Nombre documento</Typography>
              <Typography variant='body2' sx={{ width: '100%' }}>{element.file[0].documentName}</Typography>
            </Grid>
            <Grid item className={styles.cell} sx={{ width: { xs: '50%', sm: '25%' } }}>
              <Typography className={styles.label} variant='caption' sx={{ width: '100%', display: { sx: 'block', sm: 'none' } }}>Descripción</Typography>
              <Typography variant='body2' sx={{ width: '100%' }}>Determina la gestión de documentos</Typography>
            </Grid>
            <Grid item className={styles.cell} sx={{ width: { xs: '25%', sm: '15%' } }}>
              <Typography className={styles.label} variant='caption' sx={{ width: '100%', display: { sx: 'block', sm: 'none' } }}>Responsable</Typography>
              <Typography variant='body2' sx={{ width: '100%' }}>{element.file[0].responsible}</Typography>
            </Grid>
            <Grid item className={styles.cell} sx={{ width: { xs: '25%', sm: '10%' } }}>
              <Typography className={styles.label} variant='caption' sx={{ width: '100%', display: { sx: 'block', sm: 'none' } }}>Fecha actualización</Typography>
              <Typography variant='body2' sx={{ width: '100%' }}>{`${new Date(element.dateUpdate).getFullYear()}`}</Typography>
            </Grid>
            <Grid item className={[styles.cell, styles.lastCell].join(' ')} sx={{ width: { xs: '100%', sm: '15%' } }}>
              <Typography className={styles.label} variant='caption' sx={{ width: '100%', display: { sx: 'block', sm: 'none' } }}>Opciones</Typography>
              <Typography variant='body2' sx={{ width: '100%', display:'flex' }}>
                <Button color="warning" style={{ marginRight: '7px' }}>Editar</Button>
                <Button variant="outlined" color="info">Cancelar</Button>
              </Typography>
            </Grid>
          </Grid>
        ))
      }


    </Box>
  )
}
