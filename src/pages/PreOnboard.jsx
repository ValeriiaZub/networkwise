import { styled, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Link } from "react-router-dom"
import PreOnboardImage from '../assets/images/pre-onboard/pre-onboard.png'


const List = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '25px'
})

const Item = styled(Typography)({
    borderRadius: 10,
    padding: 22,
    margin: "8px 0px",
    backgroundColor: '#E8F0FB',
    textDecoration: 'none',
    color: '#00000099'
})

const Image = styled('img')({
    width: '90%',
    margin: '40px auto 20px auto'
})

const Container = styled('div')({
    padding: 38,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

const Skip = styled(Typography)({
    textDecoration: 'none',
    color: '#2021BC'
})

const PreOnboard = () => (
    <Container style={{ padding: '38px' }}>
        <Typography margin="20 0" align="center" fontSize={16} variant="h6" fontWeight="700" color="primary.main">Network wise</Typography>
        <Image src={PreOnboardImage} alt="happy employees" />
        <Typography align="center" fontSize={24} variant="h3" fontWeight="700" color="primary.main">Before you start your casual reach out</Typography>
        <List>
            <Item to="/profile-creation" as={Link} >Add profile information</Item>
            <Item to="/profile-creation" as={Link} >Set matching with other professionals criteria</Item>
            <Item to="/profile-creation" as={Link} >Adjust personal settings for play and learn content</Item>
        </List>
        <Box sx={{ marginTop: '40px' }}>
            <Skip textDecoration="none" to="/profile-creation" as={Link} color="primary.main">SKIP</Skip>
        </Box>
    </Container>
)

export default PreOnboard