import { render,screen } from '../test-utils';
import '@testing-library/jest-dom'
import JobSummary from "../components/molecules/JobSummary";



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


test("Load Summary", async ()=> {

    render(<JobSummary job_type={["Full time"]}
                       salary={{min: 0, max: 1000}}
                       industry={["Tech"]}
                       years_of_experience={["5"]}
                       posted_at="2021-11-10 19:20:55" location={{city: "Amman",country: "Jordan"}} degree={["Bachelor"]} career_level={["Entry"]} />)

    expect(screen.getByText("Tech")).toBeInTheDocument()
})