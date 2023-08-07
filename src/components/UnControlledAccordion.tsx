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
        < AccordionRate value={0} />
        < AccordionRate value={1} />
        < AccordionRate value={2} />
        < AccordionRate value={3} />
        < AccordionRate value={4} />
        < AccordionRate value={5} />
      </div>}
    </div>
  );
}
export default UnControlledAccordion;