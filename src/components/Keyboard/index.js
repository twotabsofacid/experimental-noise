const Key = ({children, listener = true, className = ""}) => {
  const clickHandler = (e) => {
    if (listener) {
      console.log(`clicked ${children}`);
      // call the listener here...
    }
  }
  return <li className={className} onClick={clickHandler}>{children}</li>
}
/**
 * Keyboard
 */
export default function Keyboard(props) {
  return (
    <section className="Keyboard">
      <ul className="Keyboard__keys Keyboard__keys--white">
        <Key className="Keyboard__key Keyboard__key--white">F</Key>
        <Key className="Keyboard__key Keyboard__key--white">G</Key>
        <Key className="Keyboard__key Keyboard__key--white">A</Key>
        <Key className="Keyboard__key Keyboard__key--white">B</Key>
        <Key className="Keyboard__key Keyboard__key--white">C</Key>
        <Key className="Keyboard__key Keyboard__key--white">D</Key>
        <Key className="Keyboard__key Keyboard__key--white">E</Key>
        <Key className="Keyboard__key Keyboard__key--white">F</Key>
        <Key className="Keyboard__key Keyboard__key--white">G</Key>
        <Key className="Keyboard__key Keyboard__key--white">A</Key>
        <Key className="Keyboard__key Keyboard__key--white">B</Key>
        <Key className="Keyboard__key Keyboard__key--white">C</Key>
        <Key className="Keyboard__key Keyboard__key--white">D</Key>
        <Key className="Keyboard__key Keyboard__key--white">E</Key>
        <Key className="Keyboard__key Keyboard__key--white">F</Key>
        <Key className="Keyboard__key Keyboard__key--white">G</Key>
      </ul>
      <ul className="Keyboard__keys Keyboard__keys--black">
        <Key className="Keyboard__key Keyboard__key--black Keyboard__key--black--note">F#</Key>
        <Key className="Keyboard__key Keyboard__key--black Keyboard__key--black--note">G#</Key>
        <Key className="Keyboard__key Keyboard__key--black Keyboard__key--black--note">A#</Key>
        <Key className="Keyboard__key Keyboard__key--black" listener={false}></Key>
        <Key className="Keyboard__key Keyboard__key--black Keyboard__key--black--note">C#</Key>
        <Key className="Keyboard__key Keyboard__key--black Keyboard__key--black--note">D#</Key>
        <Key className="Keyboard__key Keyboard__key--black" listener={false}></Key>
        <Key className="Keyboard__key Keyboard__key--black Keyboard__key--black--note">F#</Key>
        <Key className="Keyboard__key Keyboard__key--black Keyboard__key--black--note">G#</Key>
        <Key className="Keyboard__key Keyboard__key--black Keyboard__key--black--note">A#</Key>
        <Key className="Keyboard__key Keyboard__key--black" listener={false}></Key>
        <Key className="Keyboard__key Keyboard__key--black Keyboard__key--black--note">C#</Key>
        <Key className="Keyboard__key Keyboard__key--black Keyboard__key--black--note">D#</Key>
        <Key className="Keyboard__key Keyboard__key--black" listener={false}></Key>
        <Key className="Keyboard__key Keyboard__key--black Keyboard__key--black--note">F#</Key>
      </ul>
    </section>
  );
}
