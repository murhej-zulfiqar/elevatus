import { render,screen } from '../test-utils';
import '@testing-library/jest-dom'
import Footer from "../components/molecules/Footer";

jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        };
    },
    initReactI18next: {
        type: '3rdParty',
        init: () => {},
    }
}));

test("Load footer ", async ()=>{

    render(<Footer />)

    expect(screen.getByText('Powered by Elevatus')).toBeInTheDocument()
})
