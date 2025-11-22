import React, { useRef, useState } from "react";
import "./Quiz.css";
import { data } from "../../assets/data";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [item, setItem] = useState(data[index]);
  let [lock, setLock] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4]
  // bước 2
  // nếu item.ans = ans thì e.target (tức là element được ghi nhớ) 
  // add 1 classname  ="correct" và ngược lại

  // bước 3
  // lock bằng false thì mới được phép chạy đổi classname
  const checkAns = (e, ans) => {
    if (lock === false){
      if (item.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[item.ans - 1].current.classList.add("correct")
      }
    };
  }

  return (
    <div className="container">
      <h1>Quiz App</h1>

      <hr />

      <h2>
        {index + 1}. {item.question}
      </h2>

    {/* bước 1 */}
    {/* khi click vào element được xác định 
    biến e ghi nhớ element này rồi checkAns với element được ghi nhớ 
    và ans = 1 (ví dụ nếu chọn câu A) */}

      <ul>
        <li ref={Option1} onClick={(e) => {checkAns(e, 1)}}>A. {item.option1}</li>
        <li ref={Option2} onClick={(e) => {checkAns(e, 2)}}>B. {item.option2}</li>
        <li ref={Option3} onClick={(e) => {checkAns(e, 3)}}>C. {item.option3}</li>
        <li ref={Option4} onClick={(e) => {checkAns(e, 4)}}>D. {item.option4}</li>
      </ul>
      
      <button>Next</button>
      
      <div className="index">{index + 1} of 5 {}</div>
    </div>
  );
};

export default Quiz;
