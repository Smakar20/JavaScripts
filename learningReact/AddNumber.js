class AddNumber extends React.Component{
	constructor(props){
  super(props)
  this.state = {counter : 0}
  }
  
  handleClick(val){
   this.setState({
   	counter : this.state.counter + val
   })
  }
  
  render() {
  return (
  <div>
  	<div>
  	<button onClick={this.handleClick.bind(this, 1)}>Add 1</button>
    <button onClick={this.handleClick.bind(this, 5)}>Add 5</button><br/>
    </div>
    <input value={this.state.counter}/>
  </div>
  )
  }
}

class App extends React.Component{
	render(){
  	return (
    <div>
    	<AddNumber/>
    </div>
    )
  }
}

ReactDOM.render(<App/>, mountNode)
