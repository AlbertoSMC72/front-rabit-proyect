import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

type MessageType = {
    title: string;
    name: string;
    price: string;
};

const socket: Socket = io('http://52.72.28.83:5000');

function App() {
    const [messages, setMessages] = useState<MessageType[]>([]);

    useEffect(() => {
        socket.on('mesagess', (message: MessageType) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            <h1>Socket.IO Client</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>
                        <strong>Titulo:</strong> {message.title}, <strong>Nombre:</strong> {message.name}, <strong>Precio:</strong> {message.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
