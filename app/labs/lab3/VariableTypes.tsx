export default function VariableTypes() {
    let numberVariable = 123;
    let numberVariable2 = 456;
    let floatingPointNumber = 234.345;
    let stringVariable = "Hello World!";
    let stringVariable2 = "Hello, I'm macintosh.";
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isNumber2 = typeof numberVariable2;
    let isString = typeof stringVariable;
    let isString2 = typeof stringVariable2;
    let isBoolean = typeof booleanVariable;
    let sampleCount = 42;
    let sampleLabel = "Lab 3";
    let isSampleCount = typeof sampleCount;
    let isSampleLabel = typeof sampleLabel;
    return (
      <div id="wd-variable-types">
        <h4>Variables Types</h4>
        numberVariable = {numberVariable}           <br />
        numberVariable2 = {numberVariable2}         <br />
        floatingPointNumber = {floatingPointNumber} <br />
        stringVariable = {stringVariable}           <br />
        stringVariable2 = {stringVariable2}         <br />
        booleanVariable = {booleanVariable + ""}    <br />
        isNumber = {isNumber}                       <br />
        isNumber2 = {isNumber2}                     <br />
        isString = {isString}                       <br />
        isString2 = {isString2}                     <br />
        isBoolean = {isBoolean}                     <br />
        sampleCount = {sampleCount}                 <br />
        isSampleCount = {isSampleCount}             <br />
        sampleLabel = {sampleLabel}                 <br />
        isSampleLabel = {isSampleLabel}
        <hr />
      </div>
    );
  }