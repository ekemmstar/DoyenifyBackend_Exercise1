import { useState, useEffect } from 'react';
import './table.css'

const TableComponent = () => {

    const [message, setMessage] = useState([]);
    let heading = ["id", "name", "age", "course"]; 
    
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

    useEffect(() => {
        fetchData();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!values.id || !values.age || !values.name || !values.course) {
            alert ("please fill all required values")
            return;
        }
        try {
            const response = await fetch('http://localhost:3000/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            const data = await response.json();
            console.log('Data posted:', data);
            // After successful post, refetch data to update the table
            fetchData();
            
        } catch (error) {
            console.error('Error posting data:', error);
        }
        window.location.reload()
    };

    const [values, setValues] = useState({
        id: '',
        name: '',
        age: '',
        course: '',
    })

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return (
        <div className='fullPg'>
            <table >
                <thead >
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
                    type="number" name="id" value={values.id} placeholder='id...'
                />
                <input
                    onChange={onChange}
                    type="text" name="name" value={values.name} placeholder='name...'
                />
                <input
                    onChange={onChange}
                    type="number" name="age" value={values.age} placeholder='age...'
                />
                <input
                    onChange={onChange}
                    type="text" name="course" value={values.course} placeholder='course...'
                />
                <input type="submit" onClick={handleSubmit}></input>
            </form>
        </div>



    )
}

export default TableComponent;
