import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row flex-wrap items-center justify-center w-full gap-2 px-3 py-2 mb-5 font-medium">
      <button
        className="px-3 py-1 bg-green-300 rounded-md hover:contrast-150"
        onClick={() => navigate("/")}
      >
        Mentors
      </button>

      <button
        className="px-3 py-1 bg-green-300 rounded-md hover:contrast-150"
        onClick={() => navigate("/students")}
      >
        Students
      </button>

      <button
        className="px-3 py-1 bg-green-300 rounded-md hover:contrast-150"
        onClick={() => navigate("/assign")}
      >
        Assign Mentor
      </button>
    </div>
  );
};

export default Header;
