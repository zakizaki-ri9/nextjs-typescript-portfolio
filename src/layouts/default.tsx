import Header from '../components/navbar/header'

const DefaultLayout: React.FC = props => {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto">{props.children}</div>
    </div>
  )
}

export default DefaultLayout
