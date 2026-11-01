import AnyVsUnknown from "./AnyVsUnknown";
import Enums from "./Enums"
import FunctionTypes from "./FunctionTypes";
import Interfaces from "./Interfaces";
import Narrowing from "./Narrowing";
import ObjectTypes from "./ObjectTypes";
import TypeAnnotations from "./TypeAnnotations";
import TypedProps from "./TypeProps";
import UnionTypes from "./UnionTypes";
import UtilityTypes from "./UtilityTypes";


export default function TypesPage() {
  return (
    <div id="wd-lab3-types" className="p-4">
      <h2>TypeScript Types</h2>
      <TypeAnnotations />
      <ObjectTypes />
      <Interfaces />
      <UnionTypes />
      <Enums />
      <FunctionTypes />
      <TypedProps />
      <Narrowing />
      <AnyVsUnknown />
      <UtilityTypes />
    </div>
  );
}