import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStyles } from './style';

export default function ProjectCard({ data }) {
    const classes = useStyles();
    return (
        <Card sx={classes.container}>
            <CardMedia
                component="img"
                height="140"
                image={require("../../../assets/images/attendance_management-copy.png")}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data?.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {data?.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">LINK</Button>
            </CardActions>
        </Card>
    );
}
