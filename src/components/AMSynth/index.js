import { useEffect, useRef, useState } from 'react';
import * as Tone from 'tone';
/**
 * AMSynth
 */
export default function AMSynth(props) {
  const synth = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [notePlaying, setNotePlaying] = useState('C4');
  const toggleOnOff = (e) => {
    e.preventDefault();
    if (isPlaying) {
      setIsPlaying(false);
      synth.current.triggerRelease();
    } else {
      setIsPlaying(true);
      synth.current.triggerAttack(notePlaying, '16n');
    }
  }
  const noteChange = (e) => {
    setNotePlaying(e.target.value);
    synth.current.setNote(e.target.value);
  }
  useEffect(() => {
    synth.current = new Tone.AMSynth().toDestination();
  }, []);
  return (
    <section className="Synth AMSynth flex flex-column w-25 ba tc pa2">
      <h1>AM Synth</h1>
      <select value={notePlaying} onChange={noteChange} className="mb2">
        <option value="A4">A4</option>
        <option value="B4">B4</option>
        <option value="C4">C4</option>
        <option value="D4">D4</option>
        <option value="E4">E4</option>
        <option value="F4">F4</option>
        <option value="G4">G4</option>
      </select>
      <button onClick={toggleOnOff}>{isPlaying ? 'Pause' : 'Play'}</button>
    </section>
  );
}
