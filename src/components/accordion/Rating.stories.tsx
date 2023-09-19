
import { useState } from "react";
import AccordionRate from "./AccordionRate";
import React from "react";


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

  return < AccordionRateMemo value={rating} onClick={() => setRating(rating)} />
}

