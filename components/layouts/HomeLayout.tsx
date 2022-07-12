import { FC, ReactNode } from "react"
import Head from "next/head"
import { Box, Grid } from "@mui/material"
import { Navbar, Sidebar } from "../ui";

interface Props {
    children: ReactNode;
    sideContent?: JSX.Element | JSX.Element[];
    title?: string;
    content?: string;
}

export const HomeLayout: FC<Props> = ({ children, sideContent, title = 'page', content }) => {
    return (
        <Box>
            <Head>
                <title>{title}</title>
                <meta content={content} />
            </Head>
            <Box flexGrow={1} sx={{ height: '100vh' }} display='flex' flexWrap='wrap' alignContent='flex-start'>
                <Navbar />
                <Grid container sx={{ height: '90%', display:{xs:'none', md:'flex'}, width: { md: '20%' } }}>
                    <Sidebar />
                    {sideContent}
                </Grid>
                <Grid container sx={{ height: '90%', width: { xs: '100%', md: '80%' },padding:'1%' }} >
                    {children}
                </Grid>
            </Box>
        </Box>
    )
}
