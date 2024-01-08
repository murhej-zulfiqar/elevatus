import React from "react";
import NavBar from "../../molecules/NavBar";
import {Container} from "@mui/material";
import Footer from "../../molecules/Footer";

interface MainProps {
    children: React.ReactElement
}

/**
 * man template of the application which contains header and footer and the container of the main app
 * @param children
 * @constructor
 */
const Main: React.FC<MainProps> = ({children})=>(

    <>
        <NavBar />
        <Container maxWidth='xl' style={{paddingTop: 48, marginTop: 20, minHeight: "88vh"}}>
            {children}
        </Container>
        <Footer/>

    </>


)

export default Main