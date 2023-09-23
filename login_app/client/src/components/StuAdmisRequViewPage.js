import React, { useState } from 'react';
import styles from '../styles/StuAminRequView.module.css'


const StuAdmisRequViewPage = () => {
  const [selectedExam, setSelectedExam] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  // Sample data for the table
  const tableData = [
    {
      Date: '2023-07-19',
      Course: 'Mathematics',
      Exam: 'end',
      Year: '2023',
      Semester: 'Summer',
      Status: 'pending',
      Action: <button className= {styles.btn2}>Apply</button>,
      View: <button className= {styles.btn3}>View</button>
    },
    // Add more data entries as needed
  ];

  return (
    <div>
      <div className= {styles.topic}>
      <h1 className='text-xl font-bold '>Student Addmission Request View Page</h1>
      </div>
      <div className={styles.searchbar}>
      <div class="flex items-center space-x-2">
        <input
        class="py-2 px-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            // Implement search functionality here if needed
          }}
        />

        
        <select value={selectedExam} onChange={(e) => setSelectedExam(e.target.value)} class="py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="">Select Exam Type</option>
          <option value="end">End Exam</option>
          <option value="mid">Mid Exam</option>
        </select>
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} class="py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="">Select Year</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          {/* Add more years as needed */}
        </select>
        <select value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)} class="py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="">Select Semester</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
          {/* Add more semesters as needed */}
        </select>
        <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} class="py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="">Select Course</option>
          <option value="math">Mathematics</option>
          <option value="science">Science</option>
          {/* Add more courses as needed */}
        </select>
        </div>
      </div>
      
      <div className={styles.tabledesign}>
     
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Course</th>
            <th>Exam (end/mid)</th>
            <th>Year</th>
            <th>Semester</th>
            <th>Status</th>
            <th>Action</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.Date}</td>
              <td>{row.Course}</td>
              <td>{row.Exam}</td>
              <td>{row.Year}</td>
              <td>{row.Semester}</td>
              <td>{row.Status}</td>
              <td>{row.Action}</td>
              <td>{row.View}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};


export default StuAdmisRequViewPage;
