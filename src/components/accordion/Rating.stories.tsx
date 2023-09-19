
import AccordionRate from "./AccordionRate";
import React, { useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "AccordionRate",
  component: AccordionRate,
}

const AccordionRateMemo = React.memo(AccordionRate)

export const EmptyStars = () => < AccordionRate value={0} />

export const EmptyStars1 = () => < AccordionRate value={1} />

export const EmptyStars2 = () => < AccordionRate value={2} />

export const EmptyStars3 = () => < AccordionRate value={3} />

export const EmptyStars4 = () => < AccordionRate value={4} />

export const ChangeStars = () => {
  const [rating, setRating] = useState<number>(0)

  const callBackHandler = (value: number) => {
    setRating(value)
    return action('stars were changed')
  }

  return <AccordionRateMemo value={rating} callBack={callBackHandler} />
}

