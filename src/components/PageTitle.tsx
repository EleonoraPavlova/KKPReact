type TitleProps = {
    title: String
}

function PageTitle(props: TitleProps) {
  console.log('PageTitle is rendering ')
  return <h1>{ props.title}</h1> 
}

export default PageTitle;