import AccordionRate from "./AccordionRate"
import AccordionBody from "./AccordionBody"
import AccordionTitle from "./AccordionTitle"
import React from "react"

export type ItemType = {
  title: string
  value: any
}

export type AccordionProps = {
  title: string
  collapsed: boolean
  items: ItemType[]
  onClick: (value: any) => void
  setAccordionCollapsed: (value: boolean) => void // аргумент обязательно, что ожидает изменение useState!
}

const AccordionBodyMemo = React.memo(AccordionBody)
const AccordionTitleMemo = React.memo(AccordionTitle)

function Accordion(props: AccordionProps) {

  const onChangeHandler = () => {
    props.setAccordionCollapsed(!props.collapsed)
  }

  return (
    <div>
      <AccordionTitleMemo title={props.title} callBack={onChangeHandler} />
      {props.collapsed && <div>
        < AccordionBodyMemo items={props.items} onClick={props.onClick} />
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
export default Accordion;