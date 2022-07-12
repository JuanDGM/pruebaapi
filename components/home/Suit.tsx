import { Box, Grid } from "@mui/material"
import { AccessModule } from "./AccessModule"

export const Suit = () => {
    return (
        <Box flexGrow={1}>
            <Grid container display='flex' flexWrap='wrap'>
                <AccessModule title={"Documentos"} path={"/document"} />
                <AccessModule title={"Documentos"} path={"/document"} />
                <AccessModule title={"Documentos"} path={"/document"} />
            </Grid>
        </Box>
    )
}
