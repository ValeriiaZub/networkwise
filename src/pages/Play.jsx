import { Typography, styled } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal, faWandMagic, faHandsWash, faLaptop, faMessage } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const Flex = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: '3rem'
})

const Container = styled('div')({
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: '1fr',
    margin: '1rem 0rem',
})

const BoxCard = styled(Link)({
    display: 'flex',
    backgroundColor: '#E8F0FB',
    borderRadius: '10px',
    padding: '1.2rem',
    alignItems: 'center',
})

const Awards = styled('div')({
    position: 'absolute',
    top: 0,
    right: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

const Section = ({ title, items = [] }) => (
    <Container>
        <Typography fontWeight={700} color="primary.main">{title}</Typography>
        {items.map(item =>
            <BoxCard to={item.link}>
                <FontAwesomeIcon size="lg" icon={item.icon} />
                <Typography paddingLeft="1rem" color="primary.gray">{item.title}</Typography>
            </BoxCard>
        )}
    </Container>
)

const Play = () => (
    <>
        <Awards>
            <FontAwesomeIcon color="#1821BC" icon={faMedal} />
            <Typography textAlign='center' fontSize="12px" color="primary.gray">
                0 awards
            </Typography>
        </Awards>
        <Flex>
            <FontAwesomeIcon size="6x" icon={faMedal} />
            <Typography textAlign='center' padding="1rem" color="primary.gray">
                Complete your first play module and earn your first award!
            </Typography>
        </Flex>
        <Section title="Design skills and branding"
            items={[
                { icon: faHandsWash, title: 'Personal growth', link: '/app/play/questions' },
                { icon: faWandMagic, title: 'Developing specialty', link: '/app/play/questions' },
            ]}
        />
        <Section title="Design skills and branding"
            items={[
                { icon: faLaptop, title: 'Preparing for an interview', link: '/app/play/questions' },
                { icon: faMessage, title: 'First time reaching out', link: '/app/play/questions' },
            ]}
        />

    </>
)

export default Play