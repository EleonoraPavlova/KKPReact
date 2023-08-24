
import React, { useState } from "react";
import { action } from "@storybook/addon-actions"
import Accordion from "./Accordion"


export default {
  title: "Accordion",
  component: Accordion,
}


export const AccordionTrue = () => < Accordion title={"Title Accordion"} collapsed={false} setAccordionCollapsed={(value) => alert(value)} />
export const AccordionFalse = () => < Accordion title={"Title Accordion2"} collapsed={true} setAccordionCollapsed={(value) => alert(value)} />


export const AccordionTestChanging = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return <Accordion title={"Title"} collapsed={collapsed} setAccordionCollapsed={setCollapsed} />
}