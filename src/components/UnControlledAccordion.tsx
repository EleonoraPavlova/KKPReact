import AccordionRate from "./accordion/AccordionRate"
import AccordionBody from "./accordion/AccordionBody"
import AccordionTitle from "./accordion/AccordionTitle"
import { useState } from "react"
import { ItemType } from "./accordion/Accordion"

export type AccordionProps = {
  title: string
  items: ItemType[]
  onClick: (value: any) => void
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
        < AccordionBody items={props.items} onClick={props.onClick} />
      </div>}
    </div>
  );
}
export default UnControlledAccordion;