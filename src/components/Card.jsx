import { Typography, styled } from "@mui/material"

const Container = styled('div')({
    borderRadius: '10px',
    backgroundColor: '#F9E8FB',
    padding: '20px'
})

const Card = ({ title, description }) => (
    <Container>
        <Typography color="primary.main">{title}</Typography>
        <Typography color="primary.gray">{description}</Typography>
    </Container>
)

export default Card