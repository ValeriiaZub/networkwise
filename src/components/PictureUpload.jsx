import QuestionTitle from "./QuestionTitle"
import { Button, styled } from '@mui/material'
import { useEffect, useRef } from "react"

const PreviewContainer = styled('div')({
    width: '224px',
    height: '224px',
    borderRadius: '4px',
    border: '2px solid #1821BC',
    marginBottom: '16px'
})

const PictureUpload = ({ question, description, onChange }) => {
    const ref = useRef(null)

    const change = event => {
        if (ref.current) {
            const image = URL.createObjectURL(event.target.files[0])
            ref.current.src = image
            onChange(image)
        }
    }

    useEffect(() => {
        const img = ref.current
        return () => {
            if (img) {
                URL.revokeObjectURL(img.src)
            }
        }
    }, [ref])

    return <>
        <QuestionTitle question={question} infoText={description} />
        <PreviewContainer>
            <img width="100%" height="100%" ref={ref} alt="user" />
        </PreviewContainer>
        <Button component="label" accept="image/*" onChange={change} type="file" variant="outlined">
            UPLOAD PICTURE
            <input type="file" hidden />
        </Button>
    </>
}

export default PictureUpload