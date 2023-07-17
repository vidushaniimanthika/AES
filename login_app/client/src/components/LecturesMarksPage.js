import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h3>Year: {selectedOption}</h3>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <h3>Course: {selectedOption}</h3>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <h3>Batch: {selectedOption}</h3>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <h3>Exam Type: {selectedOption}</h3>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="option1">END</option>
        <option value="option2">MID</option>
      </select><br />
      <button>Add</button>
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
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AppOne = () => {
  return (
    <div>
      <Dropdown />
      <Table />
    </div>
  );
};

export default AppOne;
