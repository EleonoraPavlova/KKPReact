
import AccordionRate from "./AccordionRate"
import AccordionBody from "./AccordionBody"
import AccordionTitle from "./AccordionTitle"

export type AccordionProps = {
  title: string
  collapsed: boolean
  setAccordionCollapsed: (value: boolean) => void // аргумент обязательно, что ожидает изменение useState!
}

function Accordion(props: AccordionProps) {

  const setAccordionCollapsedHandle = () => {
    props.setAccordionCollapsed(!props.collapsed)
  }

  return (
    <div>
      <AccordionTitle title={props.title} callBack={setAccordionCollapsedHandle} />
      {props.collapsed && <div>
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
export default Accordion;