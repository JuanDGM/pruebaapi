import { Box, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
    title: string;
    option?: JSX.Element | JSX.Element[];
    content: JSX.Element | JSX.Element[];
}

export const TitleStructure: FC<Props> = ({ title, option, content }) => {
    return (
        <Box sx={{ width: '100%' }} display='flex' flexWrap='wrap'>
            <div style={{ height: '10%', width: '100%', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
                <Typography>{title}</Typography>
                <Typography>{option}</Typography>
            </div>
            <div style={{ height: '90%', width: '100%', display: 'flex', flexWrap: 'wrap',paddingTop:'2%' }}>
                {content}
            </div>
        </Box>
    )
}
