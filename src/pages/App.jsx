import { useState } from 'react'
import { styled, Tabs, Tab, TextField } from '@mui/material';
import Find from './Find'
import Matches from './Matches'

const TabList = styled(Tabs)({
    marginBottom: '16px'
})

const App = () => {
    const [value, setValue] = useState('matches');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <>
        <TabList variant="fullWidth" onChange={handleChange} value={value}>
            <Tab value="matches" label="Matches" />
            <Tab value="find" label="Find professionals" />
        </TabList>
        <TextField fullWidth label="Search for role or name" />
        {value === 'matches' ? <Matches /> : <Find />}
    </>
}

export default App