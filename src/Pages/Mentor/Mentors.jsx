import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { API } from "../../helpers/API";
import MentorComponent from "../../components/MentorComponent/MentorComponent";
import MentorAdd from "./MentorAdd";

const Mentors = () => {
  const [mentData, setMentData] = useState([]);
  const [showAdd, setShowAdd] = useState("hide");
  const [loading, setLoading] = useState(true);

  const URLEndPoints = "mentor/all";

  useEffect(() => {
    fetch(`${API}/${URLEndPoints}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((val) => val.json())
      .then((val) => {
        setMentData(val.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [mentData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen loading-wave">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
    );
  }

  return (
    <div className="mx-auto md:w-11/12">
      <div>
        <Header />
      </div>
      <div>
        {showAdd === "hide" ? (
          <div>
            <button
              onClick={() => setShowAdd("show")}
              className="px-3 py-1 my-3 font-medium bg-green-300 rounded-md hover:contrast-150"
            >
              Add Mentor
            </button>
          </div>
        ) : (
          <div>
            <MentorAdd setShowAdd={setShowAdd} setMentData={setMentData} />
          </div>
        )}
      </div>
      <div className="grid gap-8 px-5 py-8 rounded-md grid-cols-[repeat(auto-fit,minmax(280px,1fr))] bg-slate-700">
        {mentData?.map((data) => (
          <MentorComponent
            key={data._id}
            id={data._id}
            name={data.mentor_name}
            course={data.course}
            students={data.student_list}
          />
        ))}
      </div>
    </div>
  );
};

export default Mentors;
