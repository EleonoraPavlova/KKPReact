import { useState } from "react"

type ButtonSwitchProps = {
  // on: boolean
}


function ButtonSwitch(props: ButtonSwitchProps) {
  console.log("onOff is rendering")
  let [on, setOn] = useState(false)

  const onStyle = {
    width: '30px',
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    margin: '10px',
    padding: '10px',
    backgroundColor: on ? "green" : 'white'
  }

  const offStyle = {
    width: '30px',
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    margin: '10px',
    padding: '10px',
    backgroundColor: on ? "white" : 'red'
  }

  const indicatorStyle = {
    width: '30px',
    height: "30px",
    borderRadius: "50%",
    border: "1px solid black",
    marginLeft: '5px',
    backgroundColor: on ? "green" : 'red'
  }
  console.log("on " + on)
  return (
    <div>
      <div style={onStyle} onClick={() => { setOn(true) }}>On</div>
      <div style={offStyle} onClick={() => { setOn(false) }}>Off</div>
      <div style={indicatorStyle}></div>
    </div >
  )
}

export default ButtonSwitch;