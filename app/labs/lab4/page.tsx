"use client";

import ClickEvent from "./ClickEvent";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import ContextExamples from "./context/ContextExamples";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import ContextProfileForm from "./context/ContextProfileForm";
import ZustandCounter from "./zustand/ZustandCounter";
import ZustandExamples from "./zustand/ZustandExamples";
import ZustandProfileForm from "./zustand/ZustandProfileForm";
import ReduxExamples from "./redux/ReduxExamples";
import Effect from "./Effect";


const sayHello = (message: string) => {
    alert(message);
};

const name = (name: string) => {
    alert(name);
};

const sampleFromParent = () => {
    alert("Sample from parent");
};

export default function Lab4() {
    return (
        <div id="wd-lab4">
            <h2>Lab 4</h2>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} message="Hello from Lab 4" nameFunction={name} myName="Name: John" theOtherFunction={sampleFromParent} />
            <CounterBroken />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ProfileForm />
            <ParentStateComponent />
            <PropDrilling />
            <UrlEncoding />
            <ContextExamples />
            <ContextProfileForm />
            <ZustandCounter />
            <ZustandExamples />
            <ZustandProfileForm />
            <ReduxExamples />
            <Effect />
        </div>
    );
}
