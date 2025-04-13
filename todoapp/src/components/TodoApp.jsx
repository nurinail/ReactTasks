import React, { useEffect, useState } from "react";
import styles from "./todoapp.module.scss";
import classNames from "classnames";
import TodoAppItems from "./TodoAppItems";

const TodoApp = () => {
  const [value, setValue] = useState('');
  const [valueData, setDataValue] = useState([]);
  const handleAddList = (event) => {
    if (event.key === "Enter") {
      const newValue = {
        id:Date.now(),
        value:value
      }; 
      setDataValue(prev=>[...prev,newValue]);
      setValue("");
    }
  };
  
  useEffect(() => {
    console.log(valueData);
  }, [valueData]);
  return (
    <div className={styles.todoapp}>
      <div className={styles.head}>
        <h1 className={styles.head_title}>TODO</h1>
        <input
          onKeyDown={handleAddList}
          onChange={(e)=>setValue(e.target.value)}
          className={classNames(styles.head_input)}
          type="text"
          placeholder="Create a new todo…"
          value={value}
        />
        <TodoAppItems setDataValue={setDataValue} valueData={valueData} />
      </div>
    </div>
  );
};

export default TodoApp;
