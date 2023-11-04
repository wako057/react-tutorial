import {CORE_CONCEPTS} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";

function App() {
    return (
        <div>
            <header><h1>Hello World!</h1></header>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
