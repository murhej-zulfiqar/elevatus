import React, {ReactElement, Suspense} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import {ThemeProvider} from "@mui/material";
import './config/i18n'
import {theme} from "./styles/them";

import {BrowserRouter} from "react-router-dom";


const AllTheProviders = ({children}: {children: React.ReactNode}) => {
    return (
        <ThemeProvider theme={theme}>
        <Suspense fallback='loading'>
            <BrowserRouter>
            {children}
            </BrowserRouter>
        </Suspense>
    </ThemeProvider>
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}