import "./css/default.css";
import "./css/reset.css";
import "./css/style.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { Weather } from "./components/Weather";

export const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Main>
                <Container>
                    <Weather />
                </Container>
            </Main>
            <Footer />
        </div>
    );
};
