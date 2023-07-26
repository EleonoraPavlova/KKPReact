
type AccordionTitleType = {
  title: string
}

function AccordionTitle(props: AccordionTitleType) {
  // const clickButton = () => {
  //   const btn = document.getElementById("button")
  //   btn.addEventListener("click", () => {

  //  } )onClick={clickButton}
  return (<div>
    <button>{props.title}</button >
  </div>)
}

export default AccordionTitle;