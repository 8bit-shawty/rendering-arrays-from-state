// import React from 'react'
import Score from "./Score.jsx"

function Learner({learner}) {
  return (
    <>
      <h3>Name: {learner.name}</h3>
      <h3>Bio: {learner.bio}</h3>
      {learner.scores.map((score, index) => (
        <Score key={index} score={score}/>
      ))}
    </>
  )
}

export default Learner