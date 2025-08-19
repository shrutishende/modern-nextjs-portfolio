import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Grid from "./components/Grid";
import NavBar from "./components/NavBar";
import Recentprojects from "./components/Recentprojects";
import TeckStack from "./components/TeckStack";
import Hero from "./sections/Hero";

export default function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <Grid />
            <Recentprojects />
            <Experience />
            <TeckStack />
            <Approach />
            <Contact />
        </>
    );
}
