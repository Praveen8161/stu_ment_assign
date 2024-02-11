import { useEffect, useState } from "react";
import { API } from "../../helpers/API";
import Header from "../../components/Header";
import StudentComponent from "../../components/StudentComponent/StudentComponent";
import StudentAdd from "./StudentAdd";

// Student page
const Students = () => {
  const [stuData, setStuData] = useState([]);
  const [showAdd, setShowAdd] = useState("hide");
  const [loading, setLoading] = useState(true);
  const URLEndPoints = "student/all";

  useEffect(() => {
    fetch(`${API}/${URLEndPoints}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((val) => val.json())
      .then((val) => {
        setStuData(val.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [stuData]);

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
              Add Student
            </button>
          </div>
        ) : (
          <div>
            <StudentAdd setShowAdd={setShowAdd} setStuData={setStuData} />
          </div>
        )}
      </div>
      <div className="grid gap-8 px-5 py-8 rounded-md grid-cols-[repeat(auto-fit,minmax(280px,1fr))] bg-slate-700">
        {stuData?.map((data) => (
          <StudentComponent
            key={data._id}
            id={data._id}
            name={data.student_name}
            batch={data.batch}
          />
        ))}
      </div>
    </div>
  );
};

export default Students;
