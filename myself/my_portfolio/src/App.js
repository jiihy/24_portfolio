import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <div className="test">
        리액트 초기 셋팅 완료!
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
