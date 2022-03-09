import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    let navigate = useNavigate();

    const onSubmit = () => {
        navigate("/profile-creation");
    }

    return <div>
        <h5>Network wise</h5>
        <h1>Sign up</h1>

        <form onSubmit={onSubmit}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Sign Up" />
        </form>
        <button>Sign in with Linkedin</button>
    </div>
}

export default SignUp