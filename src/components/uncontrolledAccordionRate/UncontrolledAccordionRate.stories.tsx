
import React from "react";
import UnControlledAccordionRate from "./UncontrolledAccordionRate";
import { action } from "@storybook/addon-actions";



export default {
  title: "UnControlledAccordionRate",
  component: UnControlledAccordionRate,
}
const callBack = action("changed")

export const Test = () => <UnControlledAccordionRate defaultValue={0} onChange={callBack} />
