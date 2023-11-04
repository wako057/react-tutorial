import {CORE_CONCEPTS} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import TabButton2 from "./components/TabButton/TabButton2";

function App() {
    function handleSelect() {
        console.log('Hello World - Selected');
    }

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
                <section id="examples">
                    <h2>Example</h2>
                    <menu>
                            <TabButton onSelect={handleSelect}>Component</TabButton>
                            <TabButton onSelect={handleSelect}>JSX</TabButton>
                            <TabButton onSelect={handleSelect}>Props</TabButton>
                            <TabButton onSelect={handleSelect}>States</TabButton>
                        {/*<TabButton2 label='Component 2'></TabButton2>*/}
                    </menu>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
