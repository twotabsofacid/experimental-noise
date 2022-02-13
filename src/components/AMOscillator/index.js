import { useEffect, useRef, useState } from 'react';
import * as Tone from 'tone';
/**
 * AMOscillator
 */
export default function AMOscillator(props) {
  const osc = useRef(null);
  const partialsInterval = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [freq, setFreq] = useState(30);
  const [oscType, setOscType] = useState('sine');
  const [modType, setModType] = useState('sine');
  const [randomPartials, setRandomPartials] = useState(false);
  const toggleOnOff = (e) => {
    e.preventDefault();
    if (isPlaying) {
      setIsPlaying(false);
      osc.current.stop();
    } else {
      setIsPlaying(true);
      osc.current.start();
    }
  };
  const freqChange = (e) => {
    setFreq(e.target.value);
    osc.current.set({
      frequency: e.target.value
    });
  };
  const oscChange = (e) => {
    setOscType(e.target.value);
    osc.current.set({
      type: e.target.value
    });
  };
  const modChange = (e) => {
    setModType(e.target.value);
    osc.current.set({
      modulationType: e.target.value
    });
  };
  const partialsChange = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      clearInterval(partialsInterval.current);
      partialsInterval.current = setInterval(() => {
        osc.current.partials = new Array(4).fill(0).map(() => Math.random());
      }, 1000);
    } else {
      clearInterval(partialsInterval.current);
    }
  };
  useEffect(() => {
    osc.current = new Tone.AMOscillator(30, oscType, modType).toDestination();
  }, []);
  return (
    <section className="Synth AMOscillator flex flex-column w-25 ba tc pa2">
      <h1>AM Oscillator</h1>
      <input
        type="number"
        onChange={freqChange}
        value={freq}
        min="1"
        max="1000"
        className="mb2"
      ></input>
      <select value={oscType} onChange={oscChange} className="mb2">
        <option value="sine">sine</option>
        <option value="triangle">triangle</option>
        <option value="square">square</option>
      </select>
      <select value={modType} onChange={modChange} className="mb2">
        <option value="sine">sine</option>
        <option value="triangle">triangle</option>
        <option value="square">square</option>
      </select>
      <div className="mb2 flex justify-between">
        <label htmlFor="partials">Random Partials</label>
        <input
          type="checkbox"
          id="partials"
          name="partials"
          onChange={partialsChange}
        />
      </div>
      <button onClick={toggleOnOff}>{isPlaying ? 'Pause' : 'Play'}</button>
    </section>
  );
}
