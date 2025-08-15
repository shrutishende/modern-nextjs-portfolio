import Grid from "./components/Grid";
import Recentprojects from "./components/Recentprojects";
import Hero from "./sections/Hero";

export default function Home() {
    return (
        <>
           
                <div>
                    <Hero />
          <Grid />
          <Recentprojects/>
                </div>
           
        </>
    );
}
