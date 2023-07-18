
import React,{useState} from "react";
import child from "./child";
import './../styles/App.css';

const App = () => {
  const [modal,showModal]=useState(false);
  const updateParent = ()=>{
    showModal(true);
  };
  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <child updateParent={updateParent} modal={modal} />
    </div>
  );
};

export default App
