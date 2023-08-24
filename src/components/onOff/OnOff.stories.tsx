
import React, { useState } from "react";
import { action } from "@storybook/addon-actions"
import { OnOff } from "./OnOff";


export default {
  title: "OnOff",
  component: OnOff,
}

const modeHandler = (value: boolean) => action(`${value} was clicked`)


export const OnMode = () => < OnOff isClick={true} setIsClick={(value) => modeHandler(value)} />
export const OffMode = () => < OnOff isClick={false} setIsClick={(value) => modeHandler(value)} />

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)

  return <OnOff isClick={value} setIsClick={() => setValue(!value)} />
}