import React, {useEffect, useState} from 'react'

const Courses = () => {

    const [course, setCourse] = useState([]);
    let heading = ["id", "symbol", "Register"]; 
    
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/courses');
            const data = await response.json();
            setCourse(data);
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
        if(!values.id || !values.symbol) {
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
        symbol: '',
    })

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

  return (
    <div>
        <table >
                <thead >
                    <tr>
                        {heading.map((head, headID) => (
                            <th key={headID}>{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {course.map((item, index) => (
                        <tr className="tRow" key={index}>
                            <td className="tCol">{item.id}</td>
                            <td className="tCol">{item.name}</td>
                            <td className="tCol">{item.symbol}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
    </div>
  )
}

export default Courses
