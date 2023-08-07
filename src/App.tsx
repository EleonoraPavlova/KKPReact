import React, { useState } from 'react'; //KKPReact
import './App.css';
// import Accordion from "./components/accordion/Accordion";
// import ButtonSwitch from "./components/buttonSwitch";
// import UnControlledAccordion from "./components/UnControlledAccordion";
import UnControlledAccordionRate from "./components/UncontrolledAccordionRate";
// import OnOff from "./components/onOff/OnOff";

// import Star from "./Star"
// import PageTitle  from "./components/PageTitle"


function App() {
  let [isClick, setIsClick] = useState<boolean | null>(null)


  return (
    <div className="App">
      {/* <PageTitle title={'This is App Title'} /> */}
      {/* <Accordion title={"This is Accordion Title One"} collapsed={true} />
      <Accordion title={"This is Accordion Title Two"} collapsed={false} /> */}
      {/* <UnControlledAccordion title={"One"} /> */}
      <UnControlledAccordionRate />
      <UnControlledAccordionRate />
      <UnControlledAccordionRate />
      <UnControlledAccordionRate />
      {/* <ButtonSwitch /> */}
      {/* <OnOff switchButton={(arg) => setIsClick(arg)} isSwitched={isClick} /> */}
      {/* <Star selected={true} />
      <Star selected={false} />
      <Star selected={false} />
       <PageTitle title={'My friends'} /> */}
    </div>
  );
}

export default App;
