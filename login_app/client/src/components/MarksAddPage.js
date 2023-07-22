import React, { useState } from 'react';

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
    <div>
      <div>
        <label>Stu ID:</label>
        <select value={stuID} onChange={handleStuIDChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div>
        <label>Sub Name:</label>
        <select value={subName} onChange={handleSubNameChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div>
        <label>Sub ID:</label>
        <select value={subID} onChange={handleSubIDChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div>
        <label>Marks:</label>
        <input type="number" value={marks} onChange={handleMarksChange} />
      </div>
      <br />
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default MarksAdd;
