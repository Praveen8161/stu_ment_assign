/* eslint-disable react/prop-types */

import { useState } from "react";
import ClassStudents from "../../Pages/Mentor/ClassStudents";

const MentorComponent = ({ name, course, students, id }) => {
  const [view, setView] = useState(true);
  return (
    <div className=" bg-zinc-600  p-3 rounded-md min-w-[280px] text-gray-200 flex gap-3 flex-col">
      <p>
        <span className="font-bold ">Mentor Name: </span> {name}
      </p>
      <p>
        <span className="font-bold ">Course: </span>
        {course}
      </p>
      <p>
        <span className="font-bold ">Students: </span>
        {Array.isArray(students) ? students.length : 0}
      </p>
      {view ? (
        <p>
          <span className="font-bold">Student Details: </span>
          <button onClick={() => setView(false)}>Click Here</button>
        </p>
      ) : (
        <div>
          <ClassStudents setView={setView} id={id} />
        </div>
      )}
    </div>
  );
};

export default MentorComponent;
