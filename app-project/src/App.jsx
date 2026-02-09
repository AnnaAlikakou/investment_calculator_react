import { useState } from 'react'
import './App.css'
import Input from './components/Input';
import Results from './components/Results';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 12,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prev => {
      return {
        ...prev,
        [inputIdentifier]: +newValue
      };
    });
  }

  return (
    <>
      <Input
        label="Initial Investment"
        value={userInput.initialInvestment}
        onChange={(value) => handleChange('initialInvestment', value)}
      />

      <Input
        label="Annual Investment"
        value={userInput.annualInvestment}
        onChange={(value) => handleChange('annualInvestment', value)}
      />

      <Input
        label="Expected Return"
        value={userInput.expectedReturn}
        onChange={(value) => handleChange('expectedReturn', value)}
      />

      <Input
        label="Duration"
        value={userInput.duration}
        onChange={(value) => handleChange('duration', value)}
      />
      {inputIsValid ? <Results input={userInput} /> : <p>Please enter duration greater or equal to than 1</p>}
    </>
  )
}

export default App;
