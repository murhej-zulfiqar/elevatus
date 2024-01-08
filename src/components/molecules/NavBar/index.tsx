import {AppBar, Toolbar} from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";
import {LanguageButton, NavBarLink} from "./styles";
import {NavLink} from "react-router-dom";


/**
 * Header of the application which contains logo and translation button
 * @constructor
 */
const NavBar:React.FC = ()=> {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        const dir = i18n.dir(lng)
        document.dir = dir
    };
    return (<AppBar position="fixed" elevation={4}>
        <Toolbar sx={{flexGrow: 1}}>
            <img src='/images/elevatus-logo.png' alt='Logo' width='200'/>
            <NavBarLink  variant="h6"><NavLink data-testid='menu-jobs' to="/">{t('jobs')}</NavLink></NavBarLink>
            <div style={{flexGrow: 1}}/>
            <LanguageButton variant="text"  color="secondary" onClick={()=> changeLanguage(t('locale'))}>{t('lang')}</LanguageButton>
        </Toolbar>


    </AppBar>)
}

export default NavBar