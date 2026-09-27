export default function YourForm() {
    return (
        <form id="wd-your-form">
            <h5>Student Profile</h5>
            <br />
            <h4>Text Field</h4>
            <label htmlFor="wd-text-field-first">First name: </label>
            <input placeholder="john" id="wd-text-field-first" /> <br />
            <label htmlFor="wd-text-field-last">Last name: </label>
            <input placeholder="doe" id="wd-text-field-last" /> <br />
            <label htmlFor="wd-text-field-student-id">Student ID: </label>
            <input 
                type="password"
                defaultValue="NUID"
                id="wd-text-field-student-id"
            />
            <br />
            <h4>Textarea</h4>
            <label>Why am I taking this course:</label>
            <br />
            <textarea
                id="wd-text-area-student-form"
                cols={30}
                rows={10}
                defaultValue="I am taking this course to gain a better understanding of web development so I know more about what I am designing as a systems engineer."
            />
            <br />
            <h4 id="radio-buttons-student-profile">Radio Buttons</h4>
            <label>Class standing:</label>
            <br />
            <input type="radio" name="class-standing" id="wd-radio-freshman" />
            <label htmlFor="wd-radio-freshman">Freshman</label>
            <br />
            <input type="radio" name="class-standing" id="wd-radio-sophomore" />
            <label htmlFor="wd-radio-sophomore">Sophomore</label>
            <br />
            <input type="radio" name="class-standing" id="wd-radio-junior" />
            <label htmlFor="wd-radio-junior">Junior</label>
            <br />
            <input type="radio" name="class-standing" id="wd-radio-senior" />
            <label htmlFor="wd-radio-senior">Senior</label>
            <br />
            <input type="radio" name="class-standing" id="wd-radio-graduate" defaultChecked />
            <label htmlFor="wd-radio-graduate">Graduate</label>
            <br />
            <label>Enrollment type:</label>
            <br />
            <input type="radio" name="enrollment-type" id="wd-radio-full-time" defaultChecked />
            <label htmlFor="wd-radio-full-time">Full-Time</label>
            <br />
            <input type="radio" name="enrollment-type" id="wd-radio-part-time" />
            <label htmlFor="wd-radio-part-time">Part-Time</label>
            <br />
            <h4 id="wd-checkboxes-student-profile">Checkboxes</h4>
            <label>Interests:</label>
            <br />
            <input type="checkbox" name="check-interests" id="wd-chkbox-languages" />
            <label htmlFor="wd-chkbox-languages">Languages</label>
            <br />
            <input type="checkbox" name="check-interests" id="wd-chkbox-music" />
            <label htmlFor="wd-chkbox-music">Music</label>
            <br />
            <input type="checkbox" name="check-interests" id="wd-chkbox-sports" />
            <label htmlFor="wd-chkbox-sports">Sports</label>
            <br />
            <h4 id="wd-dropdowns-major">Dropdowns</h4>
            <h5>Select one</h5>
            <label htmlFor="wd-select-one-major">Major:</label>
            <br />
            <select id="wd-select-one-major" defaultValue="COMPUTER SCIENCE">
                <option value="COMPUTER SCIENCE">Computer Science</option>
                <option value="MUSIC">Music</option>
                <option value="BUSINESS">Business</option>
                <option value="MATH">Math</option>
            </select>
            <br />
            <h5>Select many</h5>
            <label htmlFor="wd-select-many-topics">Topics you wnat to learn: </label>
            <br />
            <select
                multiple
                id="wd-select-many-topics"
                defaultValue={["HTML", "REACT"]}
            >
                <option value="HTML">HTML</option>
                <option value="REACT">React</option>
                <option value="NEXT.JS & ROUTING">Next.JS & Routing</option>
                <option value="APIS">APIs</option>
            </select>
            <br />
            <h4>Typed Fields</h4>
            <label htmlFor="wd-type-fields-email">Email: </label>
            <input 
                type="email" 
                placeholder="jdoe@northeastern.edu"
                id="wd-type-fields-email"
            />
            <br />
            <label htmlFor="wd-type-fields-graduation">Graduation Year: </label>
            <input 
                type="number"
                defaultValue="2026"
                min="1900"
                max="2030"
                id="wd-type-fields-graduation"
            />
            <br />
            <label htmlFor="wd-type-fields-dob">Date of birth: </label>
            <input 
                type="date"
                defaultValue="2000-01-21"
                min="1900-01-01"
                max="2026-12-31"
                id="wd-type-fields-dob"
            />
            <br />
            <label htmlFor="wd-type-fields-rating">Rate your excitement for this course from 0-10: </label>
            <input 
                type="range"
                defaultValue="5"
                min="0"
                max="10"
                id="wd-type-fields-rating"
            />
            <br />
            <h4>Buttons</h4>
            <button id="wd-button-save" type="submit">
                Save
            </button>
            <button id="wd-button-cancel" type="button">
                Cancel
            </button>
        </form>
    );
}