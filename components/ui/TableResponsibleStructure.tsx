import { Box, Grid } from "@mui/material"
import { CellResponsibleStructure } from "./"

export const TableResponsibleStructure = () => {
    return (


        <Box display='flex'
             flexWrap='wrap'    
             alignItems='flex-start'
             sx={{ background:{ xs: 'none', sm: '#fff' } }}
            >
            
            <Grid
                container
                sx={{
                    width:'100%',
                    background: {xs:'#fff', sm:'none'},
                    borderBottom: { xs: 'none', sm: '1px solid #ddd' },
                    border: { xs: '1px solid #ddd', sm: 'none' },
                    padding: {xs:'1%', sm:'0%'},
                    borderRadius: { xs: '7px', sm: '0px' },
                    marginBottom: { xs: '2%', sm: '0%' },
                    display:'flex',
                    flexWrap:'wrap'
                    
                }}>
                <CellResponsibleStructure header={true} title="Nombre documento" value={22} xs={6} sm={3} md={3} lg={3}/>
                <CellResponsibleStructure header={true} title="Nombre documento" value={33} xs={6} sm={3} md={3} lg={3}/>
                <CellResponsibleStructure header={true} title="Nombre documento" value={33} xs={6} sm={3} md={3} lg={3}/>
                <CellResponsibleStructure header={true} title="Nombre documento" value={33} xs={6} sm={3} md={3} lg={3}/>
            </Grid>
            
            <Grid
                container
                sx={{
                    width:'100%',
                    background: {xs:'#fff', sm:'none'},
                    borderBottom: { xs: 'none', sm: '1px solid #ddd' },
                    border: { xs: '1px solid #ddd', sm: 'none' },
                    padding: {xs:'1%', sm:'0%'},
                    borderRadius: { xs: '7px', sm: '0px' },
                    marginBottom: { xs: '2%', sm: '0%' },
                    display:'flex',
                    flexWrap:'wrap'
                }}>
                <CellResponsibleStructure header={false} title="Nombre documento" value={22} xs={6} sm={3} md={3} lg={3}/>
                <CellResponsibleStructure header={false} title="Nombre documento" value={33} xs={6} sm={3} md={3} lg={3}/>
                <CellResponsibleStructure header={false} title="Nombre documento" value={33} xs={6} sm={3} md={3} lg={3}/>
                <CellResponsibleStructure header={false} title="Nombre documento" value={33} xs={6} sm={3} md={3} lg={3}/>
            </Grid>
            
            
            
            
            
            
            
            
            
        

        </Box>
    )
}
