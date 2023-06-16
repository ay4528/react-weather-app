import "./css/default.css";
import "./css/reset.css";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { Container } from "./components/container";
import { Weather } from "./components/weather";

export const App = () => {
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
