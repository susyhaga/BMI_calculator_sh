import { useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  const [bmi, setBmi] = useState(null);
  const [showTable, setShowTable] = useState(false);

  const handleCalculate = (weight, height) => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) || heightValue === 0) {
      alert('Please enter valid numbers for weight and height.');
      return;
    }

    const bmiValue = weightValue / (heightValue * heightValue);
    
    
    setTimeout(() => { 
      setBmi(bmiValue);
      setShowTable(true);
    }, 3000); 
  };

  return (
    <div>
      <Header onCalculate={handleCalculate} />
      {showTable && <Table bmi={bmi} />}
    </div>
  );
}

export default App;
