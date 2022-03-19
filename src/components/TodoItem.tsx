import classes from './TodoItem.module.css'

const TodoItem:React.FC<{text:string,removeTodo: ()=>void} > = (props) => {
    const removeTodoHandler = () =>{
        props.removeTodo();
    }

  return (
    <li className={classes.item} onClick={removeTodoHandler} >{props.text}</li>
  )
}

export default TodoItem