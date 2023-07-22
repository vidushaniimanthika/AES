import React, { useState } from 'react';
import styles from '../styles/Mark.module.css'
const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container mx-auto">
    <div className='flex justify-center'>
    <div className={styles.marks}>
      <h3 className='text-xl font-bold '>Year: {selectedOption}</h3>
      <div className="textbox flex flex-col gap-3">
      <select value={selectedOption} onChange={handleSelectChange} className={styles.optionbox}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      </div>
      <h3 className='text-xl font-bold'>Course: {selectedOption}</h3>
      <div className="textbox flex flex-col gap-3">
      <select value={selectedOption} onChange={handleSelectChange} className={styles.optionbox}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      </div>
      <h3 className='text-xl font-bold'>Batch: {selectedOption}</h3>
      <div className="textbox flex flex-col gap-3">
      <select value={selectedOption} onChange={handleSelectChange} className={styles.optionbox}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      </div>
      <h3 className='text-xl font-bold'>Exam Type: {selectedOption}</h3>
      <div className="textbox flex flex-col gap-3">
      <select value={selectedOption} onChange={handleSelectChange} className={styles.optionbox}>
        <option value="">Select an option</option>
        <option value="option1">END</option>
        <option value="option2">MID</option>
      </select><br />
      </div>
      <button className= {styles.btn1} type='submit'>Add</button>
    </div>
    </div>
    </div>
  );
};

const Table = () => {
  const [data, setData] = useState([
    { stuID: 1, subName: 'Math', subID: 'MATH101', marks: 90 },
    { stuID: 2, subName: 'Science', subID: 'SCI101', marks: 85 },
    { stuID: 3, subName: 'English', subID: 'ENG101', marks: 95 },
  ]);

  return (
    <div className="container mx-auto">
    <div className='flex justify-center'>
      <div className={styles.table}>
    <div>
      <table>
        <thead>
          <tr>
            <th>Stu ID</th>
            <th>Sub Name</th>
            <th>Sub ID</th>
            <th>Marks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.stuID}</td>
              <td>{row.subName}</td>
              <td>{row.subID}</td>
              <td>{row.marks}</td>
              <td>
                <button className= {styles.btn2} type='submit' >Edit</button>
                <button className= {styles.btn3} type='submit'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
  );
};

const AppOne = () => {
  return (
    <div className="container mx-auto">
    <div className='flex justify-center'>
      <div className={styles.markspart}>
      <Dropdown />
      <Table />
    </div>
    </div>
    </div>
  );
};

export default AppOne;
