import { Link, useLocation, Outlet } from "react-router-dom"
import { Box, styled, Typography } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faUsers, faLightbulb, faCircleUser } from '@fortawesome/free-solid-svg-icons'


const AppContainer = styled('div')({
    padding: ' 16px 32px',
    width: '100%'
})

const Flex = styled('div')({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    borderBottom: '1px solid #1821BC',
    paddingBottom: '8px'
})

const Item = styled(Box)(({ selected }) => ({
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '8px',
    padding: '10px 16px',
    border: `${selected ? '1px solid #1821BC' : 'transparent'}`,
    backgroundColor: `${selected ? '#E8F0FB' : 'transparent'}`,
}))



const AppLayout = () => {
    let location = useLocation();

    return <>
        <Typography color="primary.main" padding='16px' align="center" fontWeight={700}>Network wise</Typography>
        <Flex>
            <Link to="/app/messages">
                <Item selected={location.pathname.startsWith('/app/messages')}>
                    <FontAwesomeIcon icon={faMessage} />
                    <Typography color="primary.gray" fontSize="12px">Messages</Typography>
                </Item>
            </Link>
            <Link to="/app">
                <Item selected={location.pathname === '/app'}>
                    <FontAwesomeIcon icon={faUsers} />
                    <Typography color="primary.gray" fontSize="12px">People</Typography>
                </Item>
            </Link>
            <Link to="/app/play">
                <Item selected={location.pathname.startsWith('/app/play')}>
                    <FontAwesomeIcon icon={faLightbulb} />
                    <Typography color="primary.gray" fontSize="12px">Play</Typography>
                </Item>
            </Link>
            <Link to="/app/profile">
                <Item selected={location.pathname.startsWith('/app/profile')}>
                    <FontAwesomeIcon icon={faCircleUser} />
                    <Typography color="primary.gray" fontSize="12px">Profile</Typography>
                </Item>
            </Link>
        </Flex>
        <AppContainer>
            <Outlet />
        </AppContainer>
    </>
}

export default AppLayout