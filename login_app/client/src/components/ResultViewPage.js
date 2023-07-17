import React, { useState } from 'react';

const ResultView = () => {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [examType, setExamType] = useState('');
  const [tableData, setTableData] = useState([
    { subID: 'SUB001', subName: 'Mathematics', grade: 'A' },
    { subID: 'SUB002', subName: 'Science', grade: 'B' },
    { subID: 'SUB003', subName: 'English', grade: 'A+' },
  ]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const handleExamTypeChange = (event) => {
    setExamType(event.target.value);
  };

  const handleAddRow = () => {
    const newRow = {
      subID: `SUB00${tableData.length + 1}`,
      subName: 'Subject',
      grade: 'N/A',
    };
    setTableData([...tableData, newRow]);
  };

  const handleGradeChange = (index, event) => {
    const updatedData = [...tableData];
    updatedData[index].grade = event.target.value;
    setTableData(updatedData);
  };

  return (
    <div>
      <h3>Year: {year}</h3>
      <select value={year} onChange={handleYearChange}>
        <option value="">Select an option</option>
        <option value="1">Year 1</option>
        <option value="2">Year 2</option>
        <option value="3">Year 3</option>
      </select>
      <h3>Semester: {semester}</h3>
      <select value={semester} onChange={handleSemesterChange}>
        <option value="">Select an option</option>
        <option value="1">Semester 1</option>
        <option value="2">Semester 2</option>
      </select>
      <h3>Exam Type: {examType}</h3>
      <select value={examType} onChange={handleExamTypeChange}>
        <option value="">Select an option</option>
        <option value="midterm">Midterm Exam</option>
        <option value="final">Final Exam</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Sub ID</th>
            <th>Sub Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.subID}</td>
              <td>{row.subName}</td>
              <td>
                <input
                  type="text"
                  value={row.grade}
                  onChange={(event) => handleGradeChange(index, event)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default ResultView;
