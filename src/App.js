import React, {useState} from 'react'
import Todolist from './todolist'

function App() {
  const [inputlist, setInputList] = useState("")
  const [items , setitems] = useState([])
  const [prior, setprior] = useState("")
  

  //input
  const itemEvent = (e)=>{
    setInputList(e.target.value)
  }
//options
  const priolist = (e)=>{
    setprior(e.target.value)
  }

//
  const itemList = ()=>{
  setitems([...items, {prior , inputlist}] )
  console.log(items);
  } 

  const deletitems = (id)=>{
        // console.log("deleted");

        setitems(olditems=>{
          return olditems.filter((ele, idx)=>{
            return idx !== id
          })
        })
  }

  const datacomponents = items.map((data, index)=>{
    return <Todolist id={index} priority={data.prior} text={ data.inputlist } onSelect={deletitems} />
  })
  return (
    <div >
      <h1>Todo List</h1>
      <input name="task" onChange={itemEvent}  value={inputlist}/>

      <select name="priority"  onChange={priolist}>
        <option value="high">high</option>
        <option value="medium">medium</option>
        <option value="low">low</option>
      </select>
      <button onClick={itemList}>Submit</button>
      <ul>
        {datacomponents}
      </ul>
    </div>
  );
}

export default App;
