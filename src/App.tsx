import React, { useState } from 'react'; //KKPReact
import './App.css';
import Accordion from "./components/accordion/Accordion";
import OnOff from "./components/onOff/OnOff";

// import Star from "./Star"
// import PageTitle  from "./components/PageTitle"


function App() {
  let [isClick, setIsClick] = useState<boolean | null>(null)


  return (
    <div className="App">
      {/* <PageTitle title={'This is App Title'} /> */}
      <Accordion title={"This is Accordion Title One"} collapsed={true} />
      <Accordion title={"This is Accordion Title Two"} collapsed={false} />
      <OnOff switchButton={(arg) => setIsClick(arg)} isSwitched={isClick} />
      {/* <Star selected={true} />
      <Star selected={false} />
      <Star selected={false} />
       <PageTitle title={'My friends'} /> */}
    </div>
  );
}

export default App;
