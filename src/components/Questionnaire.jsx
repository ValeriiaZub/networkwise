import React from 'react'

const Questionnaire = ({ description, inputs }) => {

    return <div>
        <p>{description}</p>
        <form>
            {inputs.map(obj => <input type={obj.type} placeholder={obj.placeholder} key={obj.placeholder} />)}
        </form>
    </div>
}

export default Questionnaire