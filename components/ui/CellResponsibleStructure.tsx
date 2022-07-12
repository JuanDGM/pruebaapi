import { Grid, Typography } from "@mui/material"
import { FC } from "react"

interface Props {
    title?: string;
    value?: any;
    header?: boolean;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
}

export const CellResponsibleStructure: FC<Props> = ({ title, header = false, value, xs = 12, sm = 6, md = 4, lg = 3 }) => {
    return (
        <Grid item
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            sx={{
                padding: '1%',
                borderRight: { sx: 'none', sm: '1px solid #ddd' },
                borderBottom: { sx: 'none', sm: '1px solid #ddd' }
            }}>
            <div style={{ width: '100%' }}>

                {
                    header
                        ? <Typography variant="body1" sx={{display:{xs:'none', sm:'flex'}}}>{title}</Typography>
                        : (
                            <>
                                <Typography
                                    component='span'
                                    variant='caption'
                                    sx={{ display: { xs: 'flex', sm: 'none' } }}
                                >{title}</Typography>
                                <Typography variant="body1">{value}</Typography>
                            </>
                        )
                }


            </div>
        </Grid>
    )
}
