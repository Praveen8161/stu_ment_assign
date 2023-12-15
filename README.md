# Student Mentor Assign Front-End
## Overview
- API to create a new Student Mentor and Assigning them to each other
- Keep track of mentor assigned to the students previously 
- Can change mentor for students it will be automatically updated to both students and mentors

## Working
- Have 3 pages Student, Mentors, Assign
- Student and Mentor pages will retrive and show the details of students and mentors repectively
- Each Mentor card have a Options to see the list of Students assigned to that particular mentor
- And Each students card have a option to see the Previous mentor assigned to that particular student
- In the Assign Page We can select one mentor and one or more students to Assign the students to that selected mentor
- If the Student already have a selected mentor It will not be updated
- but if the student have a different mentor the cuurent mentor will be moved to the Old Mentor list
- and the selected mentor wil be updated as a current mentor
- In the Assign page there is a option to see only the Students that are not Assigned any mentor

## Technologies Used
- React + Vite
- Tailwind CSS

### BackEnd Code
[BackEnd](https://github.com/Praveen8161/student-mentor-assign.git)

- [Live Site](https://spontaneous-pony-3ce76f.netlify.app/)
