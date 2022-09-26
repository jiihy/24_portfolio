import './scss/App.scss';
// images 
import day01 from './img/day01.png'
import day02 from './img/day02.png'
import day03 from './img/day03.png'

// react gsap
import React, { useRef, useEffect, useState } from "react";
// import styled from "styled-components";
import { gsap } from "gsap"

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className='main_profile_area'>
          <div className='inner'>
            <h3 className='title_text'> <span className='point'>하루 일과</span> 대공개!</h3>
            <ul className='profile_list'>
              <li className='profile_item'>
                <img src={day01}></img>
                <strong>출근</strong>
                열심히 씨드머니 벌기
              </li>
              <li className='profile_item'>
                <img src={day02}></img>
                <strong>퇴근</strong>
                지구력을 위해 운동하기
              </li>
              <li className='profile_item'>
                <img src={day03}></img>
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
