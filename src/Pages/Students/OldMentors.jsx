/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { API } from "../../helpers/API";

const OldMentors = ({id, setView}) => {
    const endPoints = 'student/oldmentors';
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch(`${API}/${endPoints}/${id}` , {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((data) => data.json())
        .then((data) => {
            if(Array.isArray(data.data)){
                setList(data.data[0].old_mentors)
            }else{
                setList(data);
            }
            
            setLoading(false);
        })
        .catch((err) => console.log(err))

    },[]);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-screen p-1 mx-auto bg-white/50">
        <div className="flex flex-col w-full gap-5 px-3 mx-auto xl:w-2/6 lg:w-3/6 md:w-3/6 sm:w-4/6 xs:w-5/6 xs:max-w-[400px] sm:max-w-none bg-slate-500 pb-4 pt-8 rounded-md max-h-[90vh] relative overflow-y-auto overflow-x-hidden">
            <p className="font-semibold text-center">Old Mentors List</p>
            {
                list.error ? (
                    <div>
                        {list.error}
                    </div>
                ) :
                (
                    <div>
                        {
                            loading ? (
                                <div>Loading...</div>
                            ) : 
                            (
                                list?.map((val,idx) => 
                                <OldMentorList
                                key={idx}
                                name={val.mentor_name}
                                course={val.course}
                                />
                                )
                            )
                        } 
                    </div>
                )
            }
            <button
            className="sticky bottom-0 z-10 px-3 py-1 -translate-x-1/2 bg-gray-900 rounded-md right-2/4 w-max left-1/2 text-slate-100"
            onClick={() => setView(true)}
            >
                Close
            </button>
        </div>
    </div>
  )
}


function OldMentorList({name, course}){ 
    return (
        <div className="mb-3">
        <p><span>Mentor Name: </span>{name}</p>
        <p><span>Course: </span>{course}</p>
        <hr className="bg-black opacity-10"/>
        </div>
    )
}

export default OldMentors