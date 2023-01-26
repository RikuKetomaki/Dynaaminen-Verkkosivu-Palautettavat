import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  // UseStates
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  // Forms submit function
  function calculateSubmit(e) {
    e.preventDefault();

    // Variables
    let liters = 0;
    let grams = 0;
    let gramsLeft = 0;
    let burning = 0;
    let alcoholLevel = 0;

    // Define variables values
    liters = bottles * 0.33;
    grams = liters * 8 * 4.5;
    burning = weight / 10;
    gramsLeft = grams - (burning * time);

    // Check if male or female
    if (gender === 'male') {
      alcoholLevel = gramsLeft / (weight * 0.7); 
    } else {
      alcoholLevel = gramsLeft / (weight * 0.6);
    }

    // If blood alcohol level anwser is negative, result print 0
    if (alcoholLevel >= 0) {
      setResult(alcoholLevel);
    } else {
      setResult(0);
    }
  }

  return (
    <>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={calculateSubmit}> 
        <div>
          <label>Weight </label>
          <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles </label>
          <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        
        <div>
          <label>Time </label>
          <select name="time" value={time} onChange={e => setTime(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label>Gender </label>
          <input type="radio" name="gender" value="male" defaultchecked onChange={e => setGender(e.target.value)} /><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(1)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </>
  );
}

export default App;
