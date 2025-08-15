import Grid from "./components/Grid";
import NavBar from "./components/NavBar";
import Recentprojects from "./components/Recentprojects";
import Hero from "./sections/Hero";

export default function Home() {
    return (
        <>
            
                <NavBar />
                <Hero />
                <Grid />
                <Recentprojects />
         
        </>
    );
}
