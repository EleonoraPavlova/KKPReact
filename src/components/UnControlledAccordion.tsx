import AccordionRate from "./accordion/AccordionRate"
import AccordionBody from "./accordion/AccordionBody"
import AccordionTitle from "./accordion/AccordionTitle"
import { useState } from "react"

export type AccordionProps = {
  title: string
}

function UnControlledAccordion(props: AccordionProps) {

  let [collapsed, setCollapsed] = useState(true)

  const AccordionTitleHandle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div>
      <AccordionTitle title={props.title} callBack={AccordionTitleHandle} />
      {collapsed && <div>
        < AccordionBody />
      </div>}
    </div>
  );
}
export default UnControlledAccordion;