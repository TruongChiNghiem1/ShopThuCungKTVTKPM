import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TestAPI() {
    const [messageNodeJs, setMessageNodeJs] = useState('Not connect NodeJs');
    const [messageLaravel, setMessageLaravel] = useState('Not connect Laravel');
    const [messageSpring, setMessageSpring] = useState('Not connect Spring');

    useEffect(() => {
        axios.get('http://localhost:3001/api/data')
            .then(response => setMessageNodeJs(response.data.message))
            .catch(error => console.error(error));

        axios.get('http://localhost:8000/api/data')
        .then(response => setMessageLaravel(response.data.message))
        .catch(error => console.error(error));

        axios.get('http://localhost:8080/api/data')
        .then(response => setMessageSpring(response.data.message))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>{messageNodeJs}</h1>
            <h1>{messageLaravel}</h1>
            <h1>{messageSpring}</h1>
        </div>
    );
}
export default TestAPI
