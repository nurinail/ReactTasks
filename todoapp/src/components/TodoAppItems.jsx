import React, { useState } from "react";
import styles from "./todoapp.module.scss";
import classNames from "classnames";
import { MdDeleteOutline, MdOutlineChangeCircle } from "react-icons/md";

const TodoAppItems = ({ valueData, setDataValue }) => {
  const [isActive,setIsActive]=useState(true)
  const [updateNewValue, setUpdatedValue] = useState("");
  const handleDelete = (id) => {
    const updatedValueData = valueData.filter((list) => list.id !== id);
    setDataValue(updatedValueData);
  };
  const handleChange = (value, id) => {
    
    const updatedValue = valueData.map((list) => {
      if (list.id == id) {
        return { ...list, value: updateNewValue };
      }
      return list;
    });
    setIsActive(prev=>!prev);
    setDataValue(updatedValue);
  };

  return (
    <div className={styles.todoitem}>
      <div className={styles.head_lists}>
        {valueData.map((list) => (
          <div key={list.id} className={styles.head_lists_item}>
            <input
              className={classNames(styles.head_lists_item_input)}
              type="text"
              onChange={(e) => setUpdatedValue(e.target.value)}
              defaultValue={list.value}
              disabled={isActive}
            />
            <div className={styles.head_lists_item_buttons}>
              <button
                onClick={() => handleDelete(list.id)}
                className={styles.head_lists_item_buttons_item}
              >
                <MdDeleteOutline />
              </button>
              <button
                onClick={() => handleChange(list.value, list.id)}
                className={styles.head_lists_item_buttons_item}
              >
                <MdOutlineChangeCircle />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoAppItems;
