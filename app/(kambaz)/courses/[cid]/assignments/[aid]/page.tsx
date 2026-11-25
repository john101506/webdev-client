"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";
import * as client from "../../../client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const setAssignments = useAssignmentsStore((state) => state.setAssignments);
  const isNew = aid === "new";
  const [assignment, setAssignment] = useState<Assignment>(
    isNew
      ? { ...emptyAssignment, course: cid }
      : assignments.find((a) => a._id === aid && a.course === cid) ?? { ...emptyAssignment, course: cid },
  );

  useEffect(() => {
    if (isNew) return;
    const load = async () => {
      const courseAssignments = await client.findAssignmentsForCourse(cid);
      setAssignments(courseAssignments);
      const found = courseAssignments.find((a: Assignment) => a._id === aid);
      if (found) setAssignment(found);
    };
    load();
  }, [cid, aid, isNew]);

  const onAddAssignment = async () => {
    const created = await client.createAssignmentForCourse(cid, assignment);
    addAssignment(created);
  };

  const onUpdateAssignment = async () => {
    const saved = await client.updateAssignment(assignment);
    updateAssignment(saved);
  };

  const save = async () => {
    if (isNew) {
      await onAddAssignment();
    } else {
      await onUpdateAssignment();
    }
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />{" "}
      <br />
      <span id="wd-assignment-id">Assignment id: {aid}</span> <br /><br />
      <textarea
        id="wd-description"
        rows={8}
        className="w-full"
        value={assignment.description}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
      />{" "}
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                id="wd-points"
                type="number"
                value={assignment.points}
                onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-due-date"
                value={assignment.due}
                onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-from"
                value={assignment.available}
                onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-until"
                value={assignment.until ?? ""}
                onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
        Cancel
      </Link>{" "}
      <button type="button" id="wd-save" onClick={save}>
        Save
      </button>
    </div>
  );
}