import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { TweenMax, Power3 } from "gsap";

// gsap.to(selector명/변수명, 지속시간, {효과 옵션 => css속성: 값})

import './scss/App.scss';
// images 
import day01 from './img/day01.png'
import day02 from './img/day02.png'
import day03 from './img/day03.png'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
  // https://www.youtube.com/watch?v=whk76VMOlp0
  // https://edidiongasikpo.com/using-gsap-scrolltrigger-plugin-in-react
  let day1 = useRef(null);
  let day2 = useRef(null);
  let day3 = useRef(null);

  useEffect(() => {
    TweenMax.from( day1, .8, {
      y:-80, 
      ease: Power3.easeOut,
      pin:true,
      marker:true,
    })}, [])

  return (
    <div className="App">
      <div className="wrap">
        <div className='main_profile_area'>
          <div className='inner'>
            <h3 className='title_text'> <span className='point'>하루 일과</span> 대공개!</h3>
            <ul className='profile_list'>
              <li className='profile_item'>
                <img src={day01} 
                ref={el => day1 = el}
                className="day1"></img>
                <strong>출근</strong>
                열심히 씨드머니 벌기
              </li>
              <li className='profile_item'>
                <img src={day02} 
                ref={el => day2 = el}
                className="day2"></img>
                <strong>퇴근</strong>
                지구력을 위해 운동하기
              </li>
              <li className='profile_item'>
                <img src={day03} 
                ref={el => day3 = el}
                className="day3"></img>
                <strong>자기 전</strong>
                개인 스터디 작업
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// spot_bg script 
const script = document.createElement("script");
script.src="../animation/bg_script.js"
script.async=true;
document.body.appendChild(script);

export default App;
