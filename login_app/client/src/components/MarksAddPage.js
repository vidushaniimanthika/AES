import React, { useState } from 'react';
import styles from '../styles/MarkAdd.module.css'

const MarksAdd = () => {
  const [stuID, setStuID] = useState('');
  const [subName, setSubName] = useState('');
  const [subID, setSubID] = useState('');
  const [marks, setMarks] = useState('');

  const handleStuIDChange = (event) => {
    setStuID(event.target.value);
  };

  const handleSubNameChange = (event) => {
    setSubName(event.target.value);
  };

  const handleSubIDChange = (event) => {
    setSubID(event.target.value);
  };

  const handleMarksChange = (event) => {
    setMarks(event.target.value);
  };

  const handleCancel = () => {
    // Reset the form or perform any desired action
    setStuID('');
    setSubName('');
    setSubID('');
    setMarks('');
  };

  const handleSubmit = () => {
    // Perform the submit action with the selected values
    console.log('Stu ID:', stuID);
    console.log('Sub Name:', subName);
    console.log('Sub ID:', subID);
    console.log('Marks:', marks);

    // Reset the form or perform any desired action
    setStuID('');
    setSubName('');
    setSubID('');
    setMarks('');
  };

  return (
    <div className="container mx-auto">
    <div className='flex justify-center'>
    <div className={styles.marks}>
    <div>
      <div> 
      <div className="textbox flex flex-col gap-1">
        <label className='text-large font-bold '>Student ID:</label>
        <div className="textbox flex flex-col gap-3">
        <select value={stuID} onChange={handleStuIDChange} className={styles.optionbox}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        </div>
      </div>
      <div>
        </div>
        <div className="textbox flex flex-col gap-1">
        <label className='text-large font-bold '>Subject Name:</label>
        <div className="textbox flex flex-col gap-3">
        <select value={subName} onChange={handleSubNameChange} className={styles.optionbox} >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        </div>
      </div>
      </div>
      <div>
      <div className="textbox flex flex-col gap-1">
        <label className='text-large font-bold '>Subject ID:</label>
        <div className="textbox flex flex-col gap-3">
        <select value={subID} onChange={handleSubIDChange} className={styles.optionbox}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        </div>
        </div>
      </div>
      <div>
      <div className="textbox flex flex-col gap-1">
        <label className='text-large font-bold '>Marks:</label>
        <div className="textbox flex flex-col gap-3">
        <input type="number" value={marks} onChange={handleMarksChange} className={styles.optionbox} />
      </div>
      </div>
      </div>
      <br />
      <button className= {styles.btn2} onClick={handleSubmit}>Submit</button>
      <button className= {styles.btn3}  onClick={handleCancel}>Cancel</button>
    </div>
    </div>
    </div>
    </div>
  );
};

export default MarksAdd;
