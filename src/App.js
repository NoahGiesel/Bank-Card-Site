import './App.css';

import Header from "./components/Header/Header"
import Landing from "./components/Landing/Landing"
import Objectives from "./components/Objectives/Objectives"
import Slogan from "./components/Slogan/Slogan"
import SignUp from "./components/SignUp/SignUp"
import TextAnimation from "./components/TextAnimation/TextAnimation"

function App() {
  return (
    <div className="App">
      <Header /> 
      <Landing /> 
      <Objectives />
      <Slogan />
      <SignUp />
      <TextAnimation />
       {/* section to buy card = https://codepen.io/ff0004-red/pen/WxJEJZ*/}
    </div>
  );
}

export default App;
