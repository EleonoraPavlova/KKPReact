
import AccordionBody from "../accordion/AccordionBody"
import AccordionTitle from "../accordion/AccordionTitle"
import { useReducer } from "react"
import { ItemType } from "../accordion/Accordion"
import { reducer } from "../uncontrolledAccordionRate/reducerAccordion"
import React from "react"

export type AccordionProps = {
  title: string
  items: ItemType[]
  onClick: (value: any) => void
}


export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"


const AccordionTitleMemo = React.memo(AccordionTitle)

function UnControlledAccordion(props: AccordionProps) {
  console.log("отрисовка")
  // let [collapsed, setCollapsed] = useState(true)

  let [state, dispatch] = useReducer(reducer, { collapsed: true })

  const AccordionTitleHandle = () => {
    dispatch({ type: TOGGLE_CONSTANT })
  }

  return (
    <div>
      <AccordionTitleMemo title={props.title} callBack={AccordionTitleHandle} />
      {!state.collapsed && <div>
        < AccordionBody items={props.items} onClick={props.onClick} />
      </div>}
    </div>
  );
}
export default UnControlledAccordion;