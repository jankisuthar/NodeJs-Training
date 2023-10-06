const Todo = require("../models/todoModel");

// let todos=[];


//main home page
const getTodo = (req,res)=>{
  
    // res.send("HEllo World!")
    res.render('home',{
        todos,
        isEdit : false,
        singleTodo : {
            id:'',
            task: ''
        }
    });

}



// post data
const addTodo = (req,res)=>{
    let {id} = req.body;
      if(id)
      {
        const {editToDo} = req.body;

        todos.filter((todo)=>{
            if(todo.id == id)
            {
                todo.task = editToDo;
            }
        })
        return res.redirect('/')
      }
      else{
   
        let id = todos.length + 1;
    
        let {todo} = req.body;
        
        let nTodo = {
            id : id,
            task : todo
        }
    
        todos.push(nTodo);
        return res.redirect('/');
    }
}

//delete data
const deleteTodo = (req,res)=>{
    let id = req.params.id;

    let result = todos.filter((todo)=>{
        return todo.id != id;
    })
    todos = result;
    console.log("task delete");
    return res.redirect('/')
}

//edit data
const editTodo = (req,res)=>{
    let {id} = req.params;
    let result = todos.find((todo)=>{
        return todo.id == id
    })
    console.log(result);
    return res.render('home',{
        isEdit : true,
        singleTodo :result,
        todos
    })
}

module.exports = {
    getTodo,addTodo,deleteTodo,editTodo
}