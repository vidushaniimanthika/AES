import React, { useState } from 'react';
import styles from '../styles/Gpa.module.css';


const GPA = () => {
  const [data, setData] = useState([
    { year: 1, semester: 1, gpa: 3.8, cumulativeGPA: 3.8 },
    { year: 1, semester: 2, gpa: 3.5, cumulativeGPA: 3.65 },
    { year: 2, semester: 1, gpa: 3.9, cumulativeGPA: 3.73 },
    { year: 2, semester: 2, gpa: 3.7, cumulativeGPA: 3.73 },
  ]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Semester</th>
            <th>GPA</th>
            <th>Cumulative GPA</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{row.semester}</td>
              <td>{row.gpa}</td>
              <td>{row.cumulativeGPA}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GPA;
