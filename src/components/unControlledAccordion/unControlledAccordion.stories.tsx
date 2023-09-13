
import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import UnControlledAccordion from "./UnControlledAccordion";


export default {
  title: "UnControlledAccordion",
  component: UnControlledAccordion,
}

const items =
  [{
    title: "Paris",
    value: "yes"
  }, {
    title: "Marseille",
    value: "no"
  }, {
    title: "Toulouse",
    value: "yes"
  },
  {
    title: "Nantes",
    value: "no"
  }]

export const UnControlledAccordionTest = () => {
  return <UnControlledAccordion title="Test Title" items={items} onClick={function (value: any): void {
    throw new Error("Function not implemented.");
  }} />
}