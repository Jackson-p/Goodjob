import React from 'react'




const Jumao = (props) => {return <h2>{`my father is ${props.father}`}</h2>}
class App extends React.Component{
  render(){
    const soul = 'liaoliao'
    return (
      <div>
        <h1>124镇寝之魂{soul}</h1>
        <Jumao father="wjp"/>
      </div>
    )
  }
}

export default App