
type AccordionTitleType = {
  title: string
  callBack?: () => void
}

function AccordionTitle(props: AccordionTitleType) {
  // const clickButton = () => {
  //   const btn = document.getElementById("button")
  //   btn.addEventListener("click", () => {

  //  } )onClick={clickButton}
  return (<div>
    <button onClick={props.callBack}>{props.title}</button >
  </div>)
}

export default AccordionTitle;