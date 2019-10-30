import React ,{Component} from "react"
import TodoItems from "./TodoItems"
import "./TodoList.css"
class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        };
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }
    addItem(e){
        if(this._inputElement.value!=""){
            var newItem={
                text:this._inputElement.value,
                key:Date.now()
            }
        }
        this.setState((prevState)=>{
            return{
                items:prevState.items.concat(newItem)
            };
        });
        this._inputElement.value=""
        e.preventDefault();
    }

    deleteItem(key){
        var filteredItems=this.state.items.filter(function(item){
                    return(item.key!=key)
        });

        this.setState({
            items:filteredItems
        })
    }

  


    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input type="text"   ref={(a)=>this._inputElement=a} placeholder="enter some text"></input>
                        <button type="submit">add task</button>
                        
                    </form>
                </div>
                <TodoItems enteries={this.state.items}
                    delete={this.deleteItem}
                
                />
            </div>

        );
    }
}

export default Todolist;
