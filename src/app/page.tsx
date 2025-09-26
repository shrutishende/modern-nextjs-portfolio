import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import HeroNew from "./components/HeroNew";
import NavBar from "./components/NavBar";
import Recentprojects from "./components/Recentprojects";
import TeckStack from "./components/TeckStack";

export default function Home() {
    return (
        <>
            <main className="relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
                <NavBar />
                <HeroNew />
                <Grid />
                <Recentprojects />
                <Experience />
                <TeckStack />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
