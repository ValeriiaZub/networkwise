

import { Box, Typography, styled } from "@mui/material"
import Card from '../components/Card'

const List = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '16px',
    padding: '16px 0px 32px 0px'
})

const Find = () => (<>
    <Box sx={{ paddingTop: '4px' }}>
        <Typography color="primary.gray">
            <Box component='span' color="primary.main">
                8
            </Box>
            {' '}professionals match your settings
        </Typography>
    </Box>
    <List>
        <Card
            title="Work @ABC"
            description="3 designers who worked at the same company and have similar hobbies"
            tags={["mutual interests"]}
        />
        <Card
            title="Educated @SheridanCollege"
            description="5 designers who have similar education"
            tags={["Sheridan College"]}
        />
    </List>
</>
)

export default Find