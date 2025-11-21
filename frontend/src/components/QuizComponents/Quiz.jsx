import React from 'react'
import "./Quiz.css"


const Quiz = () => {
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>which device is Lorem ipsum dolor sit amet?</h2>
        <ul>
            <li>A. Lorem ipsum dolor sit.</li>
            <li>B. Lorem ipsum dolor sit amet.</li>
            <li>C. Lorem ipsum dolor sit amet.</li>
            <li>D. Lorem ipsum dolor sit amet.</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz
