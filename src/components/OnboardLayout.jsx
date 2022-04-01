import { styled, Typography } from "@mui/material"

const Container = styled('div')({
    padding: 38,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

const OnboardLayout = ({ children }) => (
    <Container style={{ padding: '38px' }}>
        <Typography margin="20px 0px" align="center" fontSize={16} variant="h6" fontWeight="700" color="primary.main">Network wise</Typography>
        {children}
    </Container>
)

export default OnboardLayout