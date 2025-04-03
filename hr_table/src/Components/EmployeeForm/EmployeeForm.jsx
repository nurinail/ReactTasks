import React, { useEffect, useState } from 'react';
import styles from './employeeForm.module.scss';
import classNames from 'classnames';
import EmployeeTable from '../EmployeeTable/EmployeeTable';



const EmployeeForm = () => {
  const [employeeData,setEmployeeData]=useState([]);

  const [newEmployee,setNewEmployee]=useState({
    fullname:"",
    email:"",
    phonenumber:"",
    position:"",
    salary:"",
    date:"",
    department:"",
    workplacetype:"",
  })

  const handleChange=(e)=>{
    setNewEmployee({...newEmployee,[e.target.name]:e.target.value})

  }
  const addEmployee=(e)=>{
    e.preventDefault();
    if (
      !newEmployee.fullname ||
      !newEmployee.email ||
      !newEmployee.phonenumber ||
      !newEmployee.position ||
      !newEmployee.salary ||
      !newEmployee.date ||
      !newEmployee.department ||
      !newEmployee.workplacetype
    ) {
      alert("Bütün sahələri doldurun!");
      return;
    }
    setEmployeeData([...employeeData,newEmployee]);
    setNewEmployee({
      fullname:"",
      email:"",
      phonenumber:"",
      position:"",
      salary:"",
      date:"",
      department:"",
      workplacetype:"",
    })

  }




  return (
    <div className={styles.employeeForm}>
      <form  className={styles.form}>
        <div className={styles.form_input}>
            <label htmlFor="fullnameInput" className={styles.form_input_label}>Full name*</label>
            <input id='fullnameInput' name='fullname' type="text" className={styles.form_input_item} onChange={handleChange} value={newEmployee.fullname} placeholder='Full name'/>
        </div>
        <div className={styles.form_input}>
            <label htmlFor="emailInput" className={styles.form_input_label}>Email*</label>
            <input id='emailInput' name='email' type="email" className={styles.form_input_item} onChange={handleChange} value={newEmployee.email} placeholder='Email'/>
        </div>
        <div className={styles.form_input}>
            <label htmlFor="phoneNumberInput" className={styles.form_input_label}>Phone number*</label>
            <input id='phoneNumberInput' name='phonenumber' type="number" className={styles.form_input_item} onChange={handleChange} value={newEmployee.phonenumber} placeholder='Phone number'/>
        </div>
        <div className={styles.form_input}>
            <label htmlFor="positionInput" className={styles.form_input_label}>Position*</label>
            <input id='positionInput' name='position' type="text" className={styles.form_input_item} onChange={handleChange} value={newEmployee.position} placeholder='Posisition'/>
        </div>
        <div className={styles.form_jobInfo}>
            <div className={styles.form_jobInfo_input}>
               <label htmlFor="salaryInput" className={styles.form_jobInfo_input_salary}>Salary*</label>
               <input id='salaryInput' name='salary' type="number" className={styles.form_input_item} onChange={handleChange} value={newEmployee.salary} placeholder='Salary'/>
            </div>
            <div className={styles.form_jobInfo_input}>
               <label htmlFor="dateInput" className={styles.form_jobInfo_input_date}>Date*</label>
               <input id='dateInput' name='date' type="date" className={styles.form_input_item}  onChange={handleChange} value={newEmployee.date}/>
            </div>
        </div>
        <div className={styles.form_jobInfo}>
        <div className={styles.form_jobInfo_input}>
               <label htmlFor="department" className={styles.form_jobInfo_input_salary}>Department*</label>
               <select name="department" id="department"  className={classNames(styles.form_jobInfo_select)} onChange={handleChange} value={newEmployee.department}>
                    <option value="">Select Department</option>
                    <option value="hr">Human Resources (HR)</option>
                    <option value="finance">Finance</option>
                    <option value="accounting">Accounting</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="customer-service">Customer Service</option>
                    <option value="it">Information Technology (IT)</option>
                    <option value="operations">Operations</option>
                    <option value="logistics">Logistics</option>
                    <option value="procurement">Procurement</option>
                    <option value="legal">Legal</option>
                    <option value="r&d">Research and Development (R&D)</option>
                    <option value="pr">Public Relations (PR)</option>
                    <option value="administration">Administration</option>
                    <option value="qa">Quality Assurance (QA)</option>
               </select>
            </div>
            <div className={styles.form_jobInfo_input}>
               <label htmlFor="workplaceType" className={styles.form_jobInfo_input_salary}>Workplace Type*</label>
               <select name="workplacetype" id="workplaceType" onChange={handleChange} value={newEmployee.workplacetype} className={classNames(styles.form_jobInfo_select)}>
                    <option value="">Select Workplace Type</option>
                    <option value="office">Office</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
               </select>
            </div>
          
         
        </div>
        <button onClick={addEmployee} type='submit' className={styles.form_submit}>Add</button>

      </form>
      <EmployeeTable employeeData={employeeData}/>

    </div>
  )
}

export default EmployeeForm
