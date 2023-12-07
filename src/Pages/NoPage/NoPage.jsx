import { useNavigate } from "react-router-dom";

const NoPage = () => {
    const navigate = useNavigate();
    return(
        <div className="grid place-content-center gap-5 w-screen h-screen bg-slate-500">
            <h1>
                This Page Doesn&apos;t Exist
            </h1>
            <button className="bg-red-500 rounded-md px-2 py-2" onClick={() => navigate("/")}>
                Home
            </button>
        </div>
    );
}

export default NoPage;