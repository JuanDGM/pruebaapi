import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 1
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#06102f',
                    /* backgroundColor: 'rgb(40, 36, 61)', */
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 30,
                    fontWeight: 600
                },
                h2: {
                    fontSize: 20,
                    fontWeight: 400
                },
                subtitle1: {
                    fontSize: 18,
                    fontWeight: 600
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    /* backgroundColor:'rgb(40, 36, 61)', */
                    backgroundColor: '#1b2240',
                    boxShadow: '0 8px 30px rgba(20, 20, 20, 0.15)',
                }
            }
        },
        MuiButton: {
            defaultProps: {
                variant: 'outlined',
                size: 'large'
            },
            styleOverrides: {
                root: {
                    margin: '3px',
                    //color:'white'
                },
            }
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                color: 'secondary'
            },
            styleOverrides: {
                root: {
                    margin: '5px'
                }
            }
        },
        MuiSelect: {
            defaultProps: {
                variant: 'outlined',
                color: 'secondary',

            },

        }

    }
  });