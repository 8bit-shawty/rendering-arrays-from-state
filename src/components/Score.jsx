import React from 'react'

function Score({score}) {
  return (
    <>
        <h4 style={{textDecoration: "underline"}}>SCORES</h4>
        <p>Date taken: {score.date}</p>
        <p>Score: {score.score}</p>
    </>
  )
}

export default Score