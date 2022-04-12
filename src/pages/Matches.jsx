import { Box, Typography, styled } from "@mui/material"
import Card from '../components/Card'
import Search from '../assets/images/matches/search.png'

const List = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '16px',
    padding: '16px 0px 32px 0px'
})

const Flex = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center'
})

const Matches = () => {
    return <>
        <Box sx={{ paddingTop: '4px' }}>
            <Typography color="primary.gray">
                You have{' '}
                <Box component='span' color="primary.main">
                    1 match
                </Box>
            </Typography>
        </Box>
        <List>
            <Card
                title="Fiona, Lead designer @ABC"
                description="Just added inclusive design as a new skill. Fiona and you have the same hobbies."
            />
        </List>
        <Flex>
            <img height="250" width="200" src={Search} alt="man with hand up" />
            <Typography padding={1} color="primary.gray">
                Search for more professionals to see more matches
            </Typography>
        </Flex>
    </>
}

export default Matches