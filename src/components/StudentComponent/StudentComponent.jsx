/* eslint-disable react/prop-types */

import { useState } from "react";
import OldMentors from "../../Pages/Students/OldMentors";

const StudentComponent = ({ name, batch, id }) => {
  const [view, setView] = useState(true);

  return (
    <div className=" bg-zinc-600 p-3 rounded-md min-w-[280px] text-gray-200 flex gap-3 flex-col">
      <p>
        <span className="font-bold ">Student Name: </span> {name}
      </p>
      <p>
        <span className="font-bold ">Batch: </span>
        {batch}
      </p>
      {view ? (
        <p>
          <span className="font-bold ">Old Mentor: </span>
          <button onClick={() => setView(false)}>Click Here</button>
        </p>
      ) : (
        <div>
          <OldMentors setView={setView} id={id} />
        </div>
      )}
    </div>
  );
};

export default StudentComponent;
