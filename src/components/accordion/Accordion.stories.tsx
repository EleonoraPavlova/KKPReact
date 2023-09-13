
import React, { useState } from "react";
import Accordion from "./Accordion"
import { action } from "@storybook/addon-actions";


export default {
  title: "Accordion",
  component: Accordion,
}


const onClickCallBack = action("some item was clicked")

export const AccordionTrue = () => < Accordion items={[{ title: "Eleonora", value: "1" }, { title: "Andre", value: "2" }, { title: "Tamara", value: "3" }]}
  onClick={onClickCallBack} title={"Title Accordion"} collapsed={false} setAccordionCollapsed={(value) => alert(value)} />

export const AccordionFalse = () => < Accordion items={[]}
  title={"Title Accordion2"} onClick={onClickCallBack} collapsed={true} setAccordionCollapsed={(value) => alert(value)} />


export const AccordionTestChanging = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return <Accordion
    items={
      [{ title: "Eleonora", value: "1" },
      { title: "Andre", value: "2" },
      { title: "Tamara", value: "3" }]
    }
    onClick={(value) => { alert(`user with this ${value} should be happy`) }}
    title={"Title"}
    collapsed={collapsed}
    setAccordionCollapsed={setCollapsed} />
}