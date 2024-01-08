import {render, screen} from "../test-utils";
import NavBar from "../components/molecules/NavBar";

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
test("Load nav", async () => {
    render(<NavBar />)
    expect( screen.getByText('jobs' )).toBeInTheDocument()
})