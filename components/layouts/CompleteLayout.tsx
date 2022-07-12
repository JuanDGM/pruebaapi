import { FC, ReactNode } from "react";
import Head from "next/head";
import { Box, Grid } from "@mui/material";
import { Navbar, Sidebar } from "../ui";

interface Props {
    children: ReactNode;
    title?: string;
    content?: string;
}

export const CompleteLayout: FC<Props> = ({ children, title = 'page', content }) => {

    return (
        <Box>
            <Head>
                <title>{title}</title>
                <meta content={content} />
            </Head>
            <Box flexGrow={1} sx={{ height: '100vh' }} display='flex' flexWrap='wrap' alignContent='flex-start'>
                <Navbar />
                <Sidebar />
                <Grid container sx={{ height: '90%', width: '100%', padding: '1%' }} >
                    {children}
                </Grid>
            </Box>
        </Box>
    )
}
