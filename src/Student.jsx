import Score from "./Score"

const Student = ({student}) => {
  const {name, bio, scores} = student
  return (
    <>
      <h3>{name}</h3>
      <p><strong>Bio:</strong> {bio}</p>
      {scores.map(score =>
        <Score score={score}/>
        
      )}
      
    </>
  )
}

export default Student