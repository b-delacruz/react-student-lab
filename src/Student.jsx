import Score from "./Score"

const Student = ({student}) => {
  const {name,bio,scores} = student
  return (
    <>
      <h1>{name}</h1>
      <p>{bio}</p>
      <h3>Scores</h3>
      {scores.map(score =>
        <Score score={score}/>
      )}
    </>
  )
}

export default Student
