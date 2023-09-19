import React from 'react';
import { ItemType } from "./Accordion";

export type AccordionBodyProps = {
  items: ItemType[]
  onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyProps) {
  console.log("AccordionBodyMemo")
  return (
    <div>
      <ul>
        {props.items.map((item, index) => <li onClick={() => { props.onClick(item.value) }} key={index}>{item.title}</li>)}
      </ul>
    </div>
  );
}
export default AccordionBody;