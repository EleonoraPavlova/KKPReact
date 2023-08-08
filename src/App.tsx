import React, { useState } from 'react'; //KKPReact
import './App.css';
// import Accordion from "./components/accordion/Accordion";
// import ButtonSwitch from "./components/buttonSwitch";
// import UnControlledAccordion from "./components/UnControlledAccordion";
// import UnControlledAccordionRate from "./components/UncontrolledAccordionRate";
import UnControlledOnOff from "./UnControlledOnOff/UnControlledOnOff";
// import Star, { StarValueType } from "./components/Star";
// import OnOff from "./components/onOff/OnOff";

// import Star from "./Star"
// import PageTitle  from "./components/PageTitle"


function App() {
  // let [isClick, setIsClick] = useState<boolean | null>(null)
  // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)


  return (
    <div className="App">
      {/* <PageTitle title={'This is App Title'} /> */}
      {/* <Accordion title={"This is Accordion Title One"} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed} /> */}
      {/* <UnControlledAccordion title={"One accordion"} /> */}
      {/* <UnControlledAccordionRate />
      <UnControlledAccordionRate />
      <UnControlledAccordionRate />
      <UnControlledAccordionRate />  */}
      {/* <ButtonSwitch /> */}
      {/* <OnOff setIsClick={setIsClick} isClick={isClick} /> */}
      < UnControlledOnOff />
      {/* <Star value={starValue} callBack={setStarValue} />
      <Star value={starValue} />
      <Star value={starValue} /> */}
      {/* <PageTitle title={'My friends'} /> */}

    </div>
  );
}

export default App;
