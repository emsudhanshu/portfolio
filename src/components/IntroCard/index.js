import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { useStyles } from './style';

const IntroCard = () => {

    const classes = useStyles();

    return (
        <Grid sx={classes?.container} item mt={10} container direction={{ xs: 'column', sm: 'row' }} alignItems='center' justifyContent='center'>
            <Grid item xs={4}>
                <Stack>
                    <Typography variant="">Sudhanshu Kakkar</Typography>
                </Stack>
            </Grid>
            <Grid item xs={4} sx={classes.avatar}>
                <img alt="Sudhanshu" src={require('../../assets/images/profile.jpg')} />
            </Grid>
            <Grid item xs={4}>
                <Stack>
                    <Typography variant="">Full Stack Developer with over five years of experience in building scalable applications in banking and logistics domains. Proficient in developing and optimizing web and mobile applications, ensuring high performance and maintainability.</Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default IntroCard;