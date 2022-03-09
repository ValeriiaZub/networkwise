import Questionnaire from "../components/Questionnaire"
import Wizard from "../components/Wizard"

const Profile = () => (
    <Questionnaire
        description="Add information to your profile you will want others to see."
        inputs={[
            { type: "text", placeholder: "Professional title" },
            { type: "text", placeholder: "Organization" },
            { type: "text", placeholder: "BIO" },
            { type: "text", placeholder: "Portfolio link" },
        ]}
    />
)

const MatchSettings = () => (
    <Questionnaire
        description="This information will be used to match you with your best mentor."
        inputs={[
            { type: "number", info: "How often would you want to get matched to new people?", placeholder: "Number of mentoring nights per weeks" },
            { type: "text", info: "What is the area you are interested in?", placeholder: "Current design interest" },
            { type: "text", info: "What is the area you are the strongest in?", placeholder: "Current design specialty" },
            { type: "number", placeholder: "Number of years working as a professional" },
            { type: "text", info: "What is the area you are interested in?", placeholder: "Mentors to match with level of experience" }
        ]}
    />
)

const PersonalSettings = () => (
    <Questionnaire
        description="This information will be used to suggest you learning and development content."
        inputs={[
            { type: "text", info: "What are the non-design things you like to do in your free time?", placeholder: "Hobbies" },
            { type: "text", info: "What are the skills you think you need to work on?", placeholder: "Skills to improve" },
            { type: "text", info: "What is the most you’re struggling with?", placeholder: "Current design challenge" },
        ]}
    />
)

const ProfileCreation = () => {

    const onComplete = () => {
        console.log('complete')
    }

    return <div>
        <Wizard
            onComplete={onComplete}
            pages={[<Profile />, <MatchSettings />, <PersonalSettings />]}
            titles={["Profile", "Matching settings", "Personal settings"]} />
    </div>
}

export default ProfileCreation