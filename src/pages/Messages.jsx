import { Box, Typography, TextField } from "@mui/material"
import Card from "../components/Card"


const Messages = () => (
    <>
        <TextField fullWidth label="Search" />
        <Box sx={{ paddingTop: '4px', marginBottom: '1rem' }}>
            <Typography color="primary.gray">
                1 chat{' '}
            </Typography>
        </Box>
        <Card title="Fiona" color="#E8F0FB" description="No worries! I’m glad we matched!" />
    </>
)

export default Messages