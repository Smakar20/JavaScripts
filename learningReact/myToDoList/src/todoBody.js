import React, { Component } from 'react'

export default class ToDoBody extends Component {
    constructor(props){
        super(props)
        this.state = {items: new Set()}
    }
     //to get the number of things to do  
    TodoCount() {
     if(this.state.items.size == 0){
            return <p className="paraFld">Nothing to do</p>
        }else if(this.state.items.size == 1){
            return <p className="paraFld">1 thing to do</p>
        }else{
            return <p className="paraFld">{this.state.items.size} things to do</p>
        }
    }
    //add new button click
    newButtonClick(event){
        event.preventDefault()
        var itemToDo = this.itemToDo.value.trim()
        if(itemToDo != '') this.state.items.add(itemToDo)
        this.itemToDo.value = ''
        this.setState(this.state)
    }

    delButtonClick(item){
        this.state.items.delete(item)
        this.setState(this.state)
    }

   render(){
       var styles = {listStyleType: 'none'}
        return (
            <div>
                <input placeholder="New" className="inpfld" ref={(a) => this.itemToDo = a} maxLength={50}/>
                <button className="btn btn-default bgColorNew" onClick={this.newButtonClick.bind(this)}> + </button>
                {this.TodoCount()}
                <ul className="ulSty"> 
                    {
                        Array.from(this.state.items).map((item,index)=>{
                            return (
                                <li style={styles}>
                                    <input value = {item} className="inpfld"/>
                                    <button className="btn btn-default bgColorDel" onClick={this.delButtonClick.bind(this,item)}> x </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
 
