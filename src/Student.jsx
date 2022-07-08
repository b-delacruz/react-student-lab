import Score from "./Score"

const Student = ({student}) => {
  const {name, bio, scores} = student
  return (
    <>
      <h3>{name}</h3>
      <p><strong>Bio:</strong> {bio}</p>
      <h3>Scores</h3>
      {scores.map(score =>
        <Score score={score}/>
      )}
      
    </>
  )
}

export default Student