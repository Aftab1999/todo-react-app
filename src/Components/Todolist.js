import React,{useState} from 'react'

function Todolist(Props) {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [status,setStatus] = useState('');

   // store state values on the aaray or local storage,
   // render the state value on a div

    const handleSubmit = event => {
        event.preventDefault();
        const todo = {
          title,
          description,
          status
        };
        console.log(JSON.stringify(todo, null, 2));
        setTitle("");
        setDescription("");
        setStatus("");
      };

//     let todos = [];

// const handleSubmit = event => {
//   event.preventDefault();
//   const todo = {
//     title,
//     description,
//     status
//   };
//   todos.push(todo);
//   console.log(todos);
// };


  return (

    <div className="App">

      <h3>Todo List</h3>

      <h4>Create Task</h4>

      
      <div>

      <form onSubmit={handleSubmit}>
        
        <label>
          Todo Title:
          <input
            type="text"
            value={title}
            onChange={e=> setTitle(e.target.value)}
          
          />
        </label>
        <br />

        <label>
          Todo Description:
          <input
            type="text"
            value={description}
            onChange={e=> setDescription(e.target.value)}


          
           
          />
        </label>
        <br />

        <label>
          Todo Status:
          <select value={status}  onChange={e=> setStatus(e.target.value)}>
            <option value="">Select</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </label>
        <br />

        <button type="submit">Add Todo</button>
      </form>

      </div>

      <div style={{marginTop:'50px'}}>

        <p> Title: {title}</p>

        <p> Description: {description}</p>

        <p> Status: {status}</p>

      </div>

     
  

         
    </div>
  );
}

export default Todolist;
