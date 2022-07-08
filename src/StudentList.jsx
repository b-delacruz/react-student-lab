import Student from "./Student";

const StudentList = (props) => {
  return (
    <>
      <h1>Student List</h1>
      {props.students.map(student =>
        <Student key={student.name} student={student} />
        )}
    </>
  )
}

export default StudentList
