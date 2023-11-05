import {CORE_CONCEPTS, EXAMPLES} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import TabButton2 from "./components/TabButton/TabButton2";
import { useState } from 'react';

function App() {
    const [ selectedTopic, setSelectedTopic ] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
        console.log(selectedTopic);
    }
    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }
    console.log('APP COMPONENT EXECUTING');
    return (
        <>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((coreConcept) =>  <CoreConcept key={coreConcept.title} {...coreConcept} />)}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Example</h2>
                    <menu>
                            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Component</TabButton>
                            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')} >State</TabButton>
                        {/*<TabButton2 label='Component 2'></TabButton2>*/}
                    </menu>
                    {tabContent}
                </section>
                <h2>Time to get started!</h2>
            </main>
        </>
    );
}

export default App;
