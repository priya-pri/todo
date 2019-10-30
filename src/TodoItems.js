import React ,{Component} from "react"
import { throwStatement } from "@babel/types";
class TodoItems extends Component{
    constructor(props){
        super(props);
        this.createTask=this.createTask.bind(this);
       
    }




    createTask(item){
        return <li onClick={()=>this.delete(item.key)} key={item.key}>{item.text}</li>

    }

    delete(key){
        this.props.delete(key);
    }
    render(){
        var todoEnteries=this.props.enteries;
        var listItems=todoEnteries.map(this.createTask)

    return(
        <ul className="theList">
        {listItems}
        </ul>
    )
    
    }
}
export default TodoItems;