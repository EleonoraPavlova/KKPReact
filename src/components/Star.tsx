export type StarPropsType = {
  selected?: boolean;
  callBack?: () => void;
}

function Star(props: StarPropsType) {

  return (<button onClick={props.callBack}>
    {props.selected ? <b> Star </b> : " Star "}
  </button>)
}

export default Star;