type StarPropsType = {
  selected: boolean;
  callBack?: () => void;
}

function Star(props: StarPropsType) {

  if (props.selected === true) {
    return <button onClick={props.callBack}><b> star </b></button>
  } else {
    return <button onClick={props.callBack}> star </button>
  }
}

export default Star;