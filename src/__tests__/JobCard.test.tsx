import { render, fireEvent,screen } from '../test-utils';
import '@testing-library/jest-dom'
import JobCard from "../components/molecules/JobCard";

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
test("Load Job Card ", async ()=>{

    render(<JobCard title="Frontend" uri="frontend-kfn" career_level={["Entry"]} city="Amman" salary={{min: 0, max:100}}  />)

    expect(screen.getByText('Frontend')).toBeInTheDocument()
})
