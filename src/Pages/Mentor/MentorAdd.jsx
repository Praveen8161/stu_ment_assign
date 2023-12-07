/* eslint-disable react/prop-types */
import { useState } from "react";
import { API } from "../../helpers/API";

const MentorAdd = ({setShowAdd, setMentData}) => {

    const endPoints = 'mentor/add';
    const [name,setName] = useState('');
    const [course,setCourse] = useState('');

    function handleAdd(){
        if(!name || !course){
          alert('fields are required')
          return
        }
        const newMentor = {
            mentor_name: name,
            course: course
        }
    
        fetch(`${API}/${endPoints}`, {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newMentor)
        })
        .then((data) => data.json())
        .then((data) => {
            setMentData((pre) => [...pre, data] )
        })
        .catch((err) => console.log(err))
        setShowAdd('hide')
      }

  return (
    <div className="flex flex-col items-center justify-center gap-5 py-3 mb-6" >
        <div className="w-72">
          <div>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mentor Name"
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
          </div>
        </div>  

        <div className="w-72">
          <div>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Course" required 
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              />
          </div>
        </div>

        <div className="flex flex-row justify-around gap-3">
            <button
            onClick={() => setShowAdd('hide')}
            className="px-3 py-1 bg-orange-500 rounded-md"
            >
                Cancel
            </button>

            <button
            onClick={() => handleAdd()}
            className="px-3 py-1 bg-green-500 rounded-md"
            >
                Add
            </button>
        </div>
    </div>
  )
}

export default MentorAdd