import { useRef, useState } from 'react'

import './App.css'
import React from 'react'

export default function App() {
  const [tasks, setTasks] = useState([]);
  const taskname = useRef();
  const taskdesc = useRef();
  const [loading, setLoading] = useState(false);
  const AddTask = () => { 
    setLoading(true);
    setTimeout(() => {
      
      let newtask = {
        id: tasks.length + 1,
        name: taskname.current.value,
        description: taskdesc.current.value,
        status: false,
      }
      setTasks([...tasks, newtask]);
      taskname.current.value = "";
      taskdesc.current.value = "";
      setLoading(false);
    }, 1000);
    
    
    
  }
  const DeleteTask = (id) => { 
    let newTask = [...tasks];
    newTask.splice(id, 1);
    setTasks(newTask);
  }
  const complete = (id) => { 
    let newtask = [...tasks];
    if (newtask[id].status == false) {
      newtask[id].status=true
    }
    setTasks(newtask);
  }

  const Noncomplete = (id) => {
      let newtask = [...tasks];
      if (newtask[id].status == true) {
          newtask[id].status = false;
      }
      setTasks(newtask);
  };
  
  return (
      <>
          <div className="d-flex justify-content-center align-items-center pt-4 flex-column gap-5">
              <h1>To Do List</h1>
              <div className="d-flex text-white flex-column justify-content-center rounded-4 align-items-center bg-dark p-5 gap-5">
                  <h1>Add Task</h1>
                  <input ref={taskname} type="text" placeholder="Task Name" className="form-control" />
                  <input ref={taskdesc} type="text" placeholder="Task Description" className="form-control" />
                  <button onClick={AddTask} className="btn btn-primary w-100">
                      {loading==true ? (
                          <div className="spinner-border text-light" role="status">
                              <span className="visually-hidden">Loading...</span>
                          </div>
                      ) : (
                          "Add Task"
                      )}
                  </button>
              </div>
          </div>

          <table className={`table mt-5 ${tasks.length==0? `d-none`:``} table-dark`}>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Task Name</th>
                      <th>Task Description</th>
                      <th>Status</th>
                      <th className="text-center">Action</th>
                  </tr>
              </thead>
              <tbody>
          {tasks.map((el, index) => {
                    return(
                      <tr>
                          <td>{index + 1}</td>
                          <td>{el.name}</td>
                          <td>{el.description}</td>
                        <td className={ el.status == false ? `text-danger` : `text-success`}>{el.status == false ? `Not Completed` : `Completed`}</td>
                          <td className="d-flex justify-content-evenly gap-2 align-items-center ">
                          <button onClick={() => { complete(index)}} className="btn btn-outline-success">Complete</button>
                          <button onClick={() => { DeleteTask(index)}} className="btn btn-outline-danger">Delete</button>
                              <button onClick={() => { Noncomplete(index)}} className="btn  btn-outline-warning"> Non Complete</button>
                          </td>
                      </tr>);
                  })}
              </tbody>
          </table>
      </>
  );
}
















































































// function App() {
//   const [tasks, setTasks] = useState([
    
//   ]);
 
//   const count = tasks.length;
//   const taskname = useRef();
//   const taskdescription = useRef();
//   const [loadingadd, setLoadingadd] = useState(false);
 


//   const addTask = () => {
//        setLoadingadd(true);

//     setTimeout(() => {
//       let taskName = taskname.current.value;
//       let taskDescription = taskdescription.current.value;
//       let newTask = {
//         id: tasks.length + 1,
//         name: taskName,
//         description: taskDescription,
//         status: false,
//       };
//       setTasks([...tasks, newTask]);
//     setLoadingadd(false);

//     }, 1000);
//   }
//   const deleteTask = (id) => {
     
    
//     setTimeout(() => {
// let newtask = [...tasks];
// newtask.splice(id - 1, 1); //! this will delete the task from the array
//       setTasks(newtask);
    
      
//     }, 100);
//   }
//   const markAsDone = (id) => { 
      

//     setTimeout(() => {
//       let newtask = [...tasks];
//       if (newtask[id - 1].status == false) {
//         newtask[id - 1].status = true;
//         setTasks(newtask);
//       }


//     }, 100);
    
    
//   }
//   const markAsNotDone = (id) => { 
     

//     setTimeout(() => {
//       let newtask = [...tasks];
//       if (newtask[id - 1].status == true) {
//         newtask[id - 1].status = false;
//         setTasks(newtask);
//       }
    

//     }, 100);
//   }

//   return (
//       <>
//           <div className="d-flex flex-column gap-5 pt-3 justify-content-center align-items-center">
//               <h1>To Do List</h1>
//               <div className="d-flex text-white rounded-4 gap-5 p-5 flex-column justify-content-center align-items-center bg-dark">
//                   <h1>Add New Task</h1>
//                   <input type="text" className="form-control" ref={taskname} placeholder="Task Name" />
//                   <input type="text" className="form-control" ref={taskdescription} placeholder="Task Description" />
//                   <button onClick={addTask} className="btn btn-outline-primary w-100">
//                       {loadingadd == true
//               ? (
//                   <div className="spinner-border text-white" role="status">
//                       <span className="visually-hidden">Loading...</span>
//                   </div>
//               )
//                           : `Add Task`}
//                   </button>
//               </div>

//               <table className={`table table-dark${count == 0 ? ` d-none` : ``} p-2 w-100`}>
//                   <thead className="w-100">
//                       <tr>
//                           <th>#</th>
//                           <th>Task Name</th>
//                           <th>Task Description</th>
//                           <th>Task Status</th>
//                           <th>Actions</th>
//                       </tr>
//                   </thead>
//                   <tbody>
//                       {tasks.map((el, index) => {
//                           return (
//                               <tr>
//                                   <td>{index + 1}</td>
//                                   <td>{el.name}</td>
//                                   <td>{el.description}</td>
//                                   <td className={el.status == true ? `text-success` : `text-danger`}>{el.status == true ? `Done ` : `Not Done `}</td>
//                                   <td className="d-flex justify-content-evenly align-items-center ">
//                                       <button id={ index+1} onClick={() => markAsDone(index + 1)} className="btn btn-outline-success">
//                                          Done
//                                       </button>
//                                 <button id={ index+1}  onClick={() => deleteTask(index + 1)} className="btn btn-outline-danger">
//                                          Delete
//                                       </button>
//                                       <button id={ index+1} className="btn btn-outline-warning" onClick={() => markAsNotDone(index + 1)} type="button">
//                                          Not Done
//                                       </button>
//                                   </td>
//                               </tr>
//                           );
//                       })}
//                   </tbody>
//               </table>
//           </div>
//       </>
//   );
// }

// export default App
