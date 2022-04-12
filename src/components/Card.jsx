import { Typography, styled, Box } from "@mui/material"

const Container = styled('div')(props => ({
    borderRadius: '10px',
    backgroundColor: props.color ?? '#F9E8FB',
    padding: '20px',
    width: '100%',
}))

const Tag = styled(Typography)({
    borderRadius: '18px',
    padding: '8px 16px',
    border: '1px solid #1821BC',
    display: 'inline-block',
    margin: '3px 3px'
})

const Card = ({ title, description, tags = [], color = '#F9E8FB', children, ...extraProps }) => (
    <Container color={color} style={{ ...extraProps }}>
        <Typography color="primary.main">{title}</Typography>
        <Typography color="primary.gray">{description}</Typography>
        {tags.length > 0 ?
            <Box sx={{ paddingTop: '16px' }}>
                {tags.map(tag => <Tag component="span" key={tag}>{tag}</Tag>)}
            </Box> : null
        }
        {children}
    </Container>
)

export default Card