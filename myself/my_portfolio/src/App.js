import './scss/App.scss';
import main_profile_img from './img/main_profile_mouse.png'

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className='main_profile_area'>
          <div className='inner'>
            <ul className='profile_list'>
              <li><div className='main_profile_img' src={require('./img/main_profile_mouse.png')}></div></li>
              <li>내가 개발공부 하는 방법</li>
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
