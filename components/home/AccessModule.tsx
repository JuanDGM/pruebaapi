import { FC } from 'react';
import NextLink from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Link } from '@mui/material';

interface Props {
    title: string;
    icon?: JSX.Element | JSX.Element[];
    path: string;
}

export const AccessModule: FC<Props> = ({ title, path, icon }) => {
    return (
        <Grid item style={{  marginRight: '1%',marginBottom: '3%' }} xs={5} sm={4} md={3}>
            <NextLink passHref href={path} >
                <Link>
                    <Card sx={{ width:'100%', marginRight: '1%' }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {title}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small">Learn More</Button> */}
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Link>
            </NextLink>
        </Grid>

    );
}
