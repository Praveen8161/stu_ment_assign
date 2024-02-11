/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { API } from "../../helpers/API";
import Header from "../../components/Header";

// Assign mentor page
const AssignMentor = () => {
  const [selectedMentor, setSelectedMentor] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);

  const AssignURL = `${API}/assign/stu-to-ment`;

  function handleAssign() {
    if (selectedMentor && checkedItems.length > 0) {
      const values = {
        mentor_id: selectedMentor,
        student_id: checkedItems,
      };

      fetch(AssignURL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((data) => data.json())
        .then((data) => {
          if (data.log) {
            console.log(data.log);
            alert("Student already assigned to the same mentor");
          } else {
            alert("Stuent successfully assigned to the mentor");
            setSelectedMentor("");
            setCheckedItems([]);
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please select a value");
    }
  }

  return (
    <div className="mx-auto md:w-11/12">
      <div>
        <Header />
      </div>

      <p className="px-3 py-1 mb-1 font-medium text-center rounded-md bg-slate-300">
        Assign Mentor for Student
      </p>
      <div className="flex flex-col flex-wrap items-center justify-center gap-8 px-5 py-8 rounded-lg bg-neutral-600">
        {
          <>
            <MentorList
              selectedMentor={selectedMentor}
              setSelectedMentor={setSelectedMentor}
            />

            <StudentList
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
            />
          </>
        }
      </div>
      <div className="flex flex-row items-center justify-center py-2">
        <button
          className="px-3 py-1 mt-1 font-semibold text-center rounded-md bg-slate-300 hover:contrast-150"
          onClick={handleAssign}
        >
          Assign Mentor
        </button>
      </div>
    </div>
  );
};

function StudentList({ checkedItems, setCheckedItems }) {
  const [stuData, setStuData] = useState([]);
  const [noMent, setNoMent] = useState(true);
  const AllStuEndPoints = "student/all";
  const NoMentStuEndPoints = "student/no-mentors";

  useEffect(() => {
    const URL = noMent
      ? `${API}/${AllStuEndPoints}`
      : `${API}/${NoMentStuEndPoints}`;
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((val) => val.json())
      .then((val) => setStuData(val.data))
      .catch((err) => console.log(err));

    setCheckedItems([]);
  }, [noMent]);

  function handelChange(e) {
    if (e.target.checked) {
      setCheckedItems([...checkedItems, e.target.value]);
    } else {
      setCheckedItems(checkedItems.filter((val) => val !== e.target.value));
    }

    console.log(checkedItems);
  }

  return (
    <div className="w-full">
      <div className="w-full">
        {noMent ? (
          <div>
            <button
              onClick={() => setNoMent(false)}
              className="px-3 py-1 font-semibold bg-green-500 rounded-md hover:contrast-150"
            >
              Switch to No mentor
            </button>
            <p className="mb-3 font-semibold text-gray-200">
              All Students List can change mentor
            </p>
          </div>
        ) : (
          <div className="w-full">
            <button
              onClick={() => setNoMent(true)}
              className="px-3 py-1 font-semibold text-left bg-green-500 rounded-md hover:contrast-150"
            >
              Switch to All Student
            </button>
            <p className="mb-3 font-semibold text-gray-200">
              Assign new Mentor
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-row flex-wrap gap-5 px-3 py-2 text-lg max-w-screen justify-normal">
        {stuData?.map((val) => (
          <label key={val._id} className="px-3 py-1 bg-slate-500">
            <input
              type="checkbox"
              value={val._id}
              checked={checkedItems.includes(val._id)}
              onChange={(e) => handelChange(e)}
            />
            {val.student_name}
          </label>
        ))}
      </div>
    </div>
  );
}

function MentorList({ selectedMentor, setSelectedMentor }) {
  const [mentData, setMentData] = useState([]);

  const MentEndPoints = "mentor/all";

  useEffect(() => {
    fetch(`${API}/${MentEndPoints}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((val) => val.json())
      .then((val) => setMentData(val.data))
      .catch((err) => console.log(err));
  }, []);

  const handleMentorChange = (event) => {
    setSelectedMentor(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="mentor" className="font-semibold text-gray-200">
        Select Mentor
      </label>
      <select
        name="mentor"
        id="mentor"
        value={selectedMentor}
        onChange={handleMentorChange}
      >
        <option value={""}>Select Mentor</option>
        {mentData?.map((val) => (
          <option key={val._id} value={val._id}>
            {val.mentor_name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AssignMentor;
