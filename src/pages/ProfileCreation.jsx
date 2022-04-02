import { useEffect, useState } from 'react'
import BlockQuestion from "../components/BlockQuestion"
import OnboardLayout from '../components/OnboardLayout'
import PictureUpload from '../components/PictureUpload'
import { Button, Typography, styled } from '@mui/material'
import { useNavigate } from "react-router-dom";

const QUESTIONNAIRE = [
    {
        question: "How many years of professional experience do you have?",
        options: [
            { key: 'professional', text: 'What’s professional experience?' },
            { key: 'student', text: 'I’m a student, I have no experience' }
        ]
    },
    {
        question: "What is your professional title?",
        info: "Match it to your future interest",
        options: [
            { key: 'non-confident', text: 'What do I put as a title' },
            { key: 'confident', text: '"Student" in title?' }
        ],
        color: '#FBF3E8'
    },
    {
        question: "Where do you work at?",
        options: [
            { key: 'freelancer', text: 'I am a freelancer' },
            { key: 'student', text: 'I\'m a student, what to do?' }
        ],
    },
    {
        question: "Write your bio",
        info: "Tap to autofill the field with our secret formula",
        options: []
    },
    {
        question: "Share your social media",
        infoText: "Adding your social media links is essential for other people to get to know you before connecting.",
        options: []
    }
]

const Flex = styled('div')((props) => ({
    display: 'flex',
    justifyContent: props.justify,
    width: '100%',
    alignItems: 'center',
    marginBottom: '24px',
    marginTop: props.top ?? '0px'
}))

const ProfileCreation = () => {
    const navigate = useNavigate()
    const [form, updateForm] = useState({})
    const [flows, updateFlowValues] = useState([])
    const [valid, setValid] = useState(false)
    const [page, setPage] = useState(0)

    const saveForm = () => {
        if (flows[page]) {
            updateFlowValues(flows.map((flow, i) => i === page ? form : flow))
        } else {
            updateFlowValues([...flows, ...[form]])
        }
    }

    const next = () => {
        if (page === 5) {
            navigate('/app')
        }
        saveForm()
        setValid(false)
        updateForm({})
        setPage(page + 1)
    }

    const back = () => {
        saveForm()
        if (page === 0) {
            navigate(`/pre-onboard`)
        } else {
            updateForm(flows[page - 1])
            setValid(true)
            setPage(page - 1)
        }
    }

    const updatePhoto = image => {
        if (image) {
            setValid(true)
        } else {
            setValid(false)
        }
    }

    return <OnboardLayout>
        <Flex justify="space-between">
            <Button>Back</Button>
            <Typography color="primary.gray">Profile information</Typography>
        </Flex>
        <Typography marginBottom="16px" width="100%" textAlign="left" color="primary.gray">{page + 1} / 6</Typography>
        {page < 5 ?
            <BlockQuestion
                question={QUESTIONNAIRE[page].question}
                info={QUESTIONNAIRE[page].info}
                infoText={QUESTIONNAIRE[page].infoText}
                options={QUESTIONNAIRE[page].options}
                color={QUESTIONNAIRE[page].color}
                formState={form}
                onChange={(update, isValid) => {
                    updateForm(update)
                    setValid(isValid)
                }}
            /> :
            <PictureUpload
                onChange={updatePhoto}
                question="Upload your neutral headshot"
                description="Your face should tale about 60% of the picture. Use neutral background and good lightning."
            />
        }
        <Flex top="32px" justify="space-between">
            <Button onClick={back} variant="outlined">BACK</Button>
            <Button onClick={next} disabled={!valid} variant="contained">
                {page + 1 <= 5 ? 'NEXT' : 'FINISH'}
            </Button>
        </Flex>

    </OnboardLayout>
}

export default ProfileCreation