import { TOGGLE_CONSTANT } from "../unControlledAccordion/UnControlledAccordion"
import { StateType, reducer } from "./reducerAccordion"

test("reducer should change value to opposite value - false", () => {
  //data
  const state: StateType = {
    collapsed: true
  }

  //action
  const newState = reducer(state, { type: TOGGLE_CONSTANT })

  // expection
  expect(newState.collapsed).toBe(false)
})

test("reducer should change value to opposite value - true", () => {
  //data
  const state: StateType = {
    collapsed: false
  }
  //action
  const newState = reducer(state, { type: TOGGLE_CONSTANT })

  // expection
  expect(newState.collapsed).toBe(true)
})



test("reducer should change value to opposite value - Throw", () => {
  //data
  const state: StateType = {
    collapsed: false
  }
  //action

  // expection
  expect(() => {
    reducer(state, { type: "FAKE" })
  }).toThrowError()
})