import {useState} from "react";
import './App.css';
import {io} from 'socket.io-client';
import {v4 as uuidv4} from "uuid";

function App() {
    const [socketInstances, setSocketInstances] = useState([]);
    const initiateSocket = () => {
        const socketList = [];
        for (let i = 0; i <= 10; i++) {
            const socket = io.connect("URL", {
                query: `username=${uuidv4()}`
            });
            socketList.push(socket);
        }
        setSocketInstances(socketList);
    }

    return (
        <div className="App">
            <button onClick={() => initiateSocket()} className="button">Start</button>
        </div>
    );
}

export default App;
