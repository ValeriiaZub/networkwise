import { styled, Typography } from "@mui/material"

const InfoBlock = styled(Typography)({
    padding: '10px',
    marginTop: '16px',
    width: '100%',
    backgroundColor: '#E8F0FB'
})

const InfoText = styled(Typography)({
    color: '#00000099',
    margin: '16px 0px',
    width: '100%'
})

const QuestionTitle = ({ question, info, infoText }) => (
    <>
        <Typography width="100%" align="left" fontWeight="700" color="primary.main" fontSize={16} variant="h3">{question}</Typography>
        {info ? <InfoBlock>{info}</InfoBlock> : null}
        {infoText ? <InfoText fontSize="12px">{infoText}</InfoText> : null}
    </>
)

export default QuestionTitle