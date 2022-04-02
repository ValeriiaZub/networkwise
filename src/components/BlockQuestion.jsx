import { useEffect, useState } from 'react'
import { Button, styled, TextField } from '@mui/material'
import QuestionTitle from './QuestionTitle'

const RadioCard = styled(Button)(({ selected, backcolor }) => ({
    backgroundColor: `${selected ? '#F9E8FB' : (backcolor ?? '#E8F0FB')} !important`,
    color: '#000000BC',
    width: '100%',
    padding: '18px',
    textAlign: 'left'
}))

const RadioCardGroup = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '16px',
    margin: '16px 0px'
})

const BlockQuestion = ({ question, formState, info, color, infoText, options, onChange }) => {
    const [state, setState] = useState(formState ?? {})

    const input = event => {
        setState({ ...state, question: event.target.value })
    }

    const option = key => {
        setState({ ...state, option: key })
    }

    useEffect(() => {
        let isValid = Boolean(state.question)
        if (options.length >= 2) {
            isValid = isValid && Boolean(state.option)
        }
        onChange(state, isValid)
    }, [options, state, onChange])

    return <>
        <QuestionTitle question={question} info={info} infoText={infoText} />
        {options.length >= 2 ? <RadioCardGroup >
            {options.map(({ text, key }) =>
                <RadioCard backcolor={color} selected={key === state.option} onClick={() => option(key)} key={key} variant="text">{text}</RadioCard>
            )}
        </RadioCardGroup> : null
        }
        <TextField margin={options.length === 0 ? '16px 0px 0px 0px' : '0px'}
            fullWidth onChange={input} label='Start typing here' />
    </ >
}

export default BlockQuestion