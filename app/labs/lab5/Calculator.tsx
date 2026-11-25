"use client";
import { useState } from "react";

const SYMBOLS: Record<string, string> = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
};

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const calculate = async (op: string) => {
    const response = await fetch(
      `/api/lab5/calculator?a=${a}&b=${b}&operation=${op}`,
    );
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
      setResult("");
      return;
    }
    setError("");
    setResult(`${data.a} ${SYMBOLS[data.operation]} ${data.b} = ${data.result}`);
  };
  return (
    <div id="wd-calculator">
      <h3>Calculator (Next.js Web API)</h3>
      <label className="mb-2 block">
        A:{" "}
        <input type="number" value={a}
          className="rounded border border-neutral-300 px-2 py-1 text-sm"
          onChange={(e) => setA(e.target.value)} />
      </label>
      <label className="mb-2 block">
        B:{" "}
        <input type="number" value={b}
          className="rounded border border-neutral-300 px-2 py-1 text-sm"
          onChange={(e) => setB(e.target.value)} />
      </label>
      <label className="mb-2 block">
        Operation:{" "}
        <select value={operation}
          className="rounded border border-neutral-300 px-2 py-1 text-sm"
          onChange={(e) => {
            setOperation(e.target.value);
            calculate(e.target.value);
          }}>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
      </label>
      <button type="button" onClick={() => calculate(operation)}
        className="mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
        Calculate
      </button>
      <input readOnly value={error || result}
        className="block rounded border border-neutral-300 px-2 py-1 text-sm" />
    </div>
  );
}
