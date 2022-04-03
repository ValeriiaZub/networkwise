import { Typography, styled, Box } from "@mui/material"

const Container = styled('div')({
    borderRadius: '10px',
    backgroundColor: '#F9E8FB',
    padding: '20px'
})

const Tag = styled(Typography)({
    borderRadius: '18px',
    padding: '8px 16px',
    border: '1px solid #1821BC'
})

const Card = ({ title, description, tags = [] }) => (
    <Container>
        <Typography color="primary.main">{title}</Typography>
        <Typography color="primary.gray">{description}</Typography>
        {tags.length > 0 ?
            <Box sx={{ paddingTop: '16px' }}>
                {tags.map(tag => <Tag component="span" key={tag}>{tag}</Tag>)}
            </Box> : null
        }
    </Container>
)

export default Card