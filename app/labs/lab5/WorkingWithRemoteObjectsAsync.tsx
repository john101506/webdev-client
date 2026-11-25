"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function WorkingWithRemoteObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<any>({});
  const fetchAssignment = async () => {
    setAssignment(await client.fetchAssignment());
  };
  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title));
  };
  useEffect(() => { fetchAssignment(); }, []);
  return (
    <div id="wd-working-with-objects-async">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <input value={assignment.title ?? ""}
        className="mb-2 block rounded border border-neutral-300 px-2 py-1 text-sm"
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      <textarea value={assignment.description ?? ""}
        className="mb-2 block rounded border border-neutral-300 px-2 py-1 text-sm"
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
      <label className="mb-2 block">
        <input type="checkbox" checked={assignment.completed ?? false}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
        {" "}Completed
      </label>
      <button type="button" onClick={updateTitle}
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
        Update Title
      </button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
    </div>
  );
}
