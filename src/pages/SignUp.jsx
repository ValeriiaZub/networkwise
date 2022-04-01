import { styled, Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Linkedin from '../assets/images/signup/linkedin.png'
import FooterImg from '../assets/images/signup/sign-in-image.svg'

const Footer = styled('img')({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
})

const TextInput = styled(TextField)({
    marginBottom: 18
})

const BtnContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '25px'
})


const SignUp = () => {
    let navigate = useNavigate();

    const onSubmit = event => {
        const user = {
            firstName: event.target[0].value,
            lastName: event.target[2].value,
            email: event.target[4].value,
            password: event.target[6].value,
        }
        console.log(user)
        navigate("/profile-creation");
    }

    return <Box sx={{ padding: '38px', height: '80%', width: '100%' }}>

        <Typography textAlign="center" fontSize={16} fontWeight={700} color="primary.main" variant="h6">Network wise</Typography>
        <Typography marginBottom="38px" marginTop="25px" fontSize={25} fontWeight={700} color="primary.main" variant="h3">Sign up</Typography>

        <form onSubmit={onSubmit}>
            <TextInput required={true} fullWidth={true} marginBottom="18px" label="First Name" />
            <TextInput required={true} fullWidth={true} marginBottom="18px" label="Last name" />
            <TextInput required={true} fullWidth={true} marginBottom="18px" type="email" label="Email" />
            <TextInput required={true} fullWidth={true} marginBottom="18px" type="password" label="Password" />
            <BtnContainer>
                <Button type="submit" variant="contained">SIGN UP</Button>
            </BtnContainer>
            <BtnContainer>
                <img width="215" height={57} src={Linkedin} alt="" />
            </BtnContainer>
        </form>
        <Footer src={FooterImg} />
    </Box>
}

export default SignUp