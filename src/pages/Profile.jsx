import { Typography, styled, Button } from "@mui/material"
import ProfileImage from '../assets/images/profile/profileImage.png'
import Card from "../components/Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Container = styled('div')({
    margin: "2rem 1rem",
})

const Shade = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#E8F0FB',
    width: '100%',
    height: '180px',
    zIndex: -1
})

const Row = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1rem 0rem'
})

const Flex = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
})

const CircleButton = styled(Button)({
    borderRadius: '50%',
    width: '38px',
    height: '38px',
    minHeight: '38px',
    minWidth: '38px',
    border: '2px solid #23409A'
})

const Profile = () => (
    <Container>
        <Shade />
        <header>
            <Typography fontWeight="700" fontSize='16px' color="primary.main">William</Typography>
            <Typography fontSize='12px' color="primary.gray">Graphic designer</Typography>
        </header>
        <Flex>
            <img width="145" height="145" src={ProfileImage} alt="profile of user William" />
        </Flex>
        <Row container spacing={1}>
            <CircleButton variant="outlined">
                <FontAwesomeIcon size="24px" icon={faLinkedin} />
            </CircleButton>
            <CircleButton variant="outlined">
                <FontAwesomeIcon size="24px" icon={faInstagram} />
            </CircleButton>
            <Button style={{ border: '2px solid #23409A' }} variant="outlined">
                Add link
            </Button>
        </Row>
        <Flex>
            <Card marginBottom="1rem" color="#E8F0FB" description="2020 - current"
                title="Influencer @Instagram" />
            <Card marginBottom="1rem" color="#E8F0FB" title="Bio"
                description="Basketball fan, doer, music blogger, Saul Bass fan and creative consultant. Operating at the sweet spot between art and function to craft experiences both online and in real life. I prefer clear logic to decoration." />
            <Card marginBottom="1rem" color="#E8F0FB" title="Skills"
                tags={["Typography", "UI design", "Illustration"]} />
            <Card marginBottom="1rem" color="#E8F0FB" title="Hobbies"
                tags={["Basketball", "Cooking", "Exotic plants"]} />
            <Card marginBottom="1rem" color="#F0F0F0" title="Examples of work">
                <Typography margin="1rem 0rem" color="primary.gray">
                    You have not yet uploaded your work examples
                </Typography>
                <Button style={{ border: '2px solid #23409A' }} fullWidth={true} variant="outlined">Add examples</Button>
            </Card>
        </Flex>
    </ Container>
)

export default Profile