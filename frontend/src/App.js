import React, { useState, useEffect } from "react";
import './App.css';

import Main from './components/Main'
import Header from './components/Header'
import About from "./components/About";

// for prod
// import { io } from "socket.io-client"

// for dev
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000";

function App() {

    const [mySocket, setMySocket] = useState()
    const [screenShown, setScreenShown] = useState("main")

    useEffect(() => {
        // const socket = io(); // for prod
        const socket = socketIOClient(ENDPOINT); // for dev
        setMySocket(socket)
    }, []);

    return (
        <div className="app">
            <Header
                setScreenShown={setScreenShown}
            ></Header>
            <div className="app-body">
                {(screenShown == "main")
                    ? <Main socket={mySocket}></Main>
                    : <></>
                }
                {(screenShown == "about")
                    ? <About></About>
                    : <></>
                }
            </div>
        </div>
    );
}

export default App;