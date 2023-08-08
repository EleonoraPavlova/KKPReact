
type AccordionTitleType = {
  title: string
  callBack?: () => void
}

function AccordionTitle(props: AccordionTitleType) {
  return (<div>
    <button onClick={props.callBack}>{props.title}</button >
  </div>)
}

export default AccordionTitle;