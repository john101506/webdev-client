"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input className="mb-2 mr-2 rounded border border-neutral-300 px-3 py-1.5"
        value={a} onChange={(e) => setA(e.target.value)} />
      <input className="mb-2 rounded border border-neutral-300 px-3 py-1.5"
        value={b} onChange={(e) => setB(e.target.value)} />
      <div className="flex gap-2">
        <a id="wd-path-parameter-add"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}>
          Add {a} + {b}
        </a>
        <a id="wd-query-parameter-subtract"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}>
          Subtract {a} - {b}
        </a>
        <a id="wd-query-parameter-multiply"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}>
          Multiply {a} * {b}
        </a>
        <a id="wd-query-parameter-divide"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}>
          Divide {a} / {b}
        </a>
      </div>
    </div>
  );
}