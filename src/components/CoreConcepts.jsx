import {CORE_CONCEPTS} from "../data";
import CoreConcept from "./CoreConcept/CoreConcept";
import Section from "./Section";

export default function CoreConcepts() {
    return (
        <Section title="Core Concepts" id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((coreConcept) =>  <CoreConcept key={coreConcept.title} {...coreConcept} />)}
            </ul>
        </Section>
    );
};