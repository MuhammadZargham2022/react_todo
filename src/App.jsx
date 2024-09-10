import { useState } from 'react';
import './App.scss';
import { IoCloseSharp } from "react-icons/io5";

function App() {
  const [todo, settodo] = useState('');
  const [data, setData] = useState([]);

  const inputValue = (e) => {
    settodo(e.target.value);
  }

  const getData = () => {
    let store = [...data, todo];
    setData(store);
    settodo("");
  }

  const deleteTask = (index) => {
    let filterData = data.filter((val, id) => {
      return id != index;
    })
    setData(filterData);
  }


  return (
    <>
      <div className="container">
        <div>
          <input type="text" className="input-bar" value={todo} onChange={inputValue} placeholder='Enter Value' />
        </div>
        <div>
          <button onClick={getData} className="add-btn">Add</button>
        </div>

      </div>
      <div className="content">
        {data.map((value, index) => {
          return (
            <>
              <div className="taskData">
                <p>{value}</p>
                <i><IoCloseSharp onClick={() => deleteTask(index)} /> </i>
              </div>
            </>
          );
        })}
      </div>
    </>
  )
}

export default App
