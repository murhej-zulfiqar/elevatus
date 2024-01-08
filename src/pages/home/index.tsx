import React from 'react'
import Main from "../../components/templates/Main";
import JobList from "../../components/organisms/JobList";




const Home: React.FC = ()=>{
    return (
        <Main>
            <JobList />
        </Main>
    )
}
export default Home