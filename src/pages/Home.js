import { useRef, useEffect, useState } from 'react';
import io from 'socket.io-client';
import AMSynth from '../components/AMSynth';
import AMOscillator from '../components/AMOscillator';
import FMOscillator from '../components/FMOscillator';

// Port
const port = process.env.REACT_APP_SERVER_PORT || 6969;

/**
 * Home Page
 */
export default function Home() {
  const socket = useRef(null);
  /**
   * Socket connections and listeners
   */
  useEffect(() => {
    socket.current = io(`http://localhost:${port}`, {
      transports: ['websocket']
    });
    socket.current.on('connect', () => {
      console.log('main connected!');
    });
    socket.current.on('disconnect', () => {
      console.log('main disconnected!');
      socket.current.removeAllListeners();
    });
    socket.current.on('messageFromServer', (data) => {
      console.log(`Received message from Server: ${data}`);
    });
    socket.current.emit('messageFromClient', {
      exampleData: true
    });
    return () => {
      socket.current.removeAllListeners();
    }
  }, []);
  return (
    <main className="flex flex-wrap">
      <AMSynth />
      <AMSynth />
      <AMSynth />
      <AMSynth />
      <AMOscillator />
      <AMOscillator />
      <AMOscillator />
      <AMOscillator />
      <FMOscillator />
      <FMOscillator />
      <FMOscillator />
      <FMOscillator />
    </main>
  );
}
