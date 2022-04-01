import { styled, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Link } from "react-router-dom"
import PreOnboardImage from '../assets/images/pre-onboard/pre-onboard.png'
import OnboardLayout from '../components/OnboardLayout'

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
    margin: '20px auto 20px auto'
})

const Skip = styled(Typography)({
    textDecoration: 'none',
    color: '#2021BC'
})

const PreOnboard = () => (
    <OnboardLayout>
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
    </OnboardLayout>
)

export default PreOnboard