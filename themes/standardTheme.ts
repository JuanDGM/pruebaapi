import { colors, createTheme } from "@mui/material";
import { fontSize } from "@mui/system";

export const standardTheme = createTheme({
    palette: {
        mode: 'light',
        background:{
            default:'#f5f5f5'
        },
        primary:{
            main: '#651fff',
            light: '#834bff',
            dark: '#4615b2'    
        },
        secondary:{
            main:'#1e88e5',
            dark:'#155fa0',
            light:'#4b9fea'
        },
        success:{
            main:'#00897b',
            light:'#4caf50'
        },
        info:{
            main:'#64b5f6'
        },
        warning:{
            main:'#e64a19'
        },  
        error:{
            main:'#d32f2f'
        },
        grey:{
            A100:"100"
        }
        
    },
    components:{
        MuiTextField:{
            defaultProps: {
                variant: 'filled',
                color: 'primary',
                size:'small'
            },
            styleOverrides: {
                root: {
                    margin: '5px'
                }
            }
        },
        MuiAppBar:{
            defaultProps:{
                elevation: 0
            },
            styleOverrides:{
                root:{
                    background: '#1a237e',
                    color: '#ffffff'
                }
            }
        },
        MuiTabs:{
            defaultProps:{
                variant:'scrollable',
                
            },
            styleOverrides:{
                root:{

                 }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fffff',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                    margin: '5px'
                }
            }
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'large',
                color:'primary'
            },
            styleOverrides: {
                root: {
                    fontSize:12,
                },
            }
        },
    }
});