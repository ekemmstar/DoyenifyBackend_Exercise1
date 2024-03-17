import React, { useState, useEffect } from 'react';
import './table.css'


const Table = () => {
  
  const [message, setMessage] = useState([ ]);
  let heading = ["id", "name", "age", "course"];

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/students');
            const data = await response.json();
            setMessage(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []); 
const handleSubmit = (e) => {
  e.preventDefault();
  message.push(values)
};

const [values, setValues] = useState({
  id: "",
  name: "",
  age: "",
  course: ""
})

const onChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
};
    return (
      <div>
            <table>
            <thead>
                    <tr>
                        {heading.map((head, headID) => (
                            <th key={headID}>{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {message.map((item, index) => (
                        <tr className="tRow" key={index}>
                            <td className="tCol">{item.id}</td>
                            <td className="tCol">{item.name}</td>
                            <td className="tCol">{item.age}</td>
                            <td className="tCol">{item.course}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <form>
                <input
                    onChange={onChange}
                />
                <input
                    onChange={onChange}
                /><input
                    onChange={onChange}
                />
                <input type="submit" onClick={handleSubmit}></input>
            </form>
        </div>
    
      

    )
  }

export default Table
