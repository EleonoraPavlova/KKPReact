
import React from "react";
import UnControlledOnOff from "./UnControlledOnOff";
// import { action } from "@storybook/addon-actions/*";


export default {
  title: "UnControlledOnOff",
  component: UnControlledOnOff,
}
// const callBack = action("on or off clicked")

export const OnMode = () => <UnControlledOnOff defaultValue={true} isClickText={"true"} />
export const OffMode = () => <UnControlledOnOff defaultValue={false} isClickText={"false"} />
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>
export const DefaultState = () => <input defaultValue={"yes"} />