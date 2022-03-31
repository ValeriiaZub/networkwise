import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { Grid, Box, Button, Typography } from "@mui/material";
import Hero from "../assets/images/index/hero.png";
import Landing1 from "../assets/images/index/landing1.png";
import Landing2 from "../assets/images/index/landing2.svg";
import Landing3 from "../assets/images/index/landing3.svg";
import Landing5 from "../assets/images/index/landing5.svg";
import Me from "../assets/images/index/me.png";

const Item = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
})

const ImageContainer = styled('div')({
    width: '100%',
    display: 'flex',
    paddingBottom: 25,
})

const Image = styled('img')({
    width: '100%',
})

const H1 = styled(Typography)({
    fontSize: 40,
    paddingBottom: 25,
    fontWeight: 700
})

const Paragraph = styled(Typography)({
    paddingBottom: 25,
    fontWeight: 400,
    textAlign: 'center'
})

const Point = styled(Typography)({
    paddingBottom: 24,
    fontWeight: 700,
})


const Index = () => (
    <Box sx={{ padding: '38px', height: '80%' }}>
        <Grid container spacing={10}>
            <Grid item xs={12}>
                <Item>
                    <ImageContainer>
                        <Image src={Hero} alt="hero greeting user" />
                    </ImageContainer>
                    <H1 color="primary.main" variant="h1">Network wise</H1>
                    <Paragraph>A new way of finding career friends though skills and interests.</Paragraph>
                    <Button as={Link} to="/signup" variant="contained">SIGN UP</Button>
                    <Button variant="text">Login</Button>
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Point color="primary.main">Are you a student?</Point>
                <Point color="primary.main">Early in your career?</Point>
                <Point color="primary.main">Switching from a different career?</Point>
                <Point color="primary.main">Having trouble finding your brand?</Point>
            </Grid>
            <Grid item xs={12}>
                <Typography style={{ marginBottom: 44 }} fontWeight={700} color="primary.main" variant="h5">Find your designer strength and specialty</Typography>
                <Image src={Landing2} alt="hero greeting user" />
            </Grid>
            <Grid item xs={12}>
                <Typography style={{ marginBottom: 44 }} fontWeight={700} color="primary.main" variant="h5">Learn about unspoken industry rules though learning and matching!</Typography>
                <Image src={Landing1} alt="hero greeting user" />
            </Grid>
            <Grid item xs={12}>
                <Typography style={{ marginBottom: 44 }} fontWeight={700} color="primary.main" variant="h5">Connect with many like minded professionals</Typography>
                <Image src={Landing3} alt="hero greeting user" />
            </Grid>
            <Grid item xs={12}>
                <Typography style={{ marginBottom: 44 }} fontWeight={700} color="primary.main" variant="h5">And so much more content!</Typography>
                <Image src={Landing5} alt="hero greeting user" />
            </Grid>
            <Grid item xs={12}>
                <Item>
                    <Image src={Me} alt="hero greeting user" />
                    <Paragraph style={{ paddingBottom: 32 }}>Created by a young designer who has gone though 4 portfolio redesigns, numerous coffee chats, public speaking challenges, and dozens of hackathons</Paragraph>
                    <Button as={Link} to="/signup" variant="contained">SIGN UP</Button>
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item>
                    <Typography>Valeriia Zub</Typography>
                    <Typography>for Interaction design studies,</Typography>
                    <Typography>Sheridan College</Typography>
                </Item>
            </Grid>
        </Grid>
    </Box>
)

export default Index;