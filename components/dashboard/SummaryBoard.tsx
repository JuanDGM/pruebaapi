import { Box, Card, Typography } from "@mui/material"
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import styles from '../../styles/Dashboard.module.css';

export const SummaryBoard = () => {
    return (
        <Box flexGrow={1} display='flex' flexDirection='column' sx={{padding:'3%'}}>
            <Card className={styles.card}>
                <div style={{width:'100%',height:'40px',display:'flex'}}>
                    <div style={{width:'25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <ArrowBackIosNewRoundedIcon/>
                    </div>
                    <div style={{width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography variant="body2">MiGestión</Typography>
                    </div>
                    <div style={{width:'25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <ArrowForwardIosRoundedIcon/>
                    </div>
                </div>
                <div style={{width:'100%'}}>
                    <table style={{width:'100%', fontSize:'14px'}}>
                        <thead>
                        <tr>
                            <td style={{width:'60%'}}>Modulo</td>
                            <td style={{width:'20%'}}>N°</td>
                            <td style={{width:'20%'}}>%</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Documentos</td>
                            <td>5</td>
                            <td>80%</td>
                        </tr>
                        <tr>
                            <td>Planes acción</td>
                            <td>5</td>
                            <td>80%</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
        </Box>
    )
}
