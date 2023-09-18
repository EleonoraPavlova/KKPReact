import { TOGGLE_CONSTANT } from "../unControlledAccordion/UnControlledAccordion"

export type ActionType = {
  type: string
}

export type StateType = {
  collapsed: boolean
}


//НЕЛЬЗЯ МЕНЯТЬ ТОТ state КОТОРЫЙ ПРИШЕЛ! РАБОТАТЬ ТОЛЬКО С КОПИЕЙ!
export const reducer = (state: StateType, action: ActionType): StateType => {
  console.log("REDUCER START: ")
  console.log(state)
  console.log(action)
  console.log("REDUCER END")
  switch (action.type) {
    case TOGGLE_CONSTANT:
      // let copyState = { ...state } ///работать строго с копией!
      // copyState.collapsed = !copyState.collapsed
      return {
        ...state, collapsed: !state.collapsed
      };
    default:
      throw new Error("error!");
  }
}