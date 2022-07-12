import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { UIContext } from '../../context/ui';
import { useRouter } from 'next/router';

import { useTheme } from 'next-themes'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';


export const Navbar = () => {
    const router = useRouter();
    const { openMenu } = useContext(UIContext);

    const { theme, resolvedTheme, setTheme } = useTheme()

    console.log("xxxxcccc ",resolvedTheme);
    return (
        <Box sx={{ width: '100%', height: '10%' }}>
            <AppBar position="static" style={{ height: '100%' }}>
                <Toolbar style={{ height: '100%' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={openMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div" sx={{ flexGrow: 1 }}
                        onClick={() => router.push('/home')}
                        style={{ cursor: 'pointer' }}
                    >
                        LEANSYS
                    </Typography>
                    <div>
                        <Button color='info' variant='outlined'>Login</Button>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
                        >
                            {resolvedTheme === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
                        </IconButton>

                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

