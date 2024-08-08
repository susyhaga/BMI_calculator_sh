import { useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import useLockOrientation from './components/LockLandScape';
import './global.css'; 

function App() {
  const [bmi, setBmi] = useState(null);
  const [showTable, setShowTable] = useState(false);
  
  useLockOrientation(); //bloquear a tela no formato landscape
  
  const handleCalculate = (weight, height) => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) || heightValue === 0) {
      alert('Please enter valid numbers for weight and height.');
      return;
    }

    const bmiValue = weightValue / (heightValue * heightValue);
    
    // useEffect para ações ao montar o componente ou quando o BMI mudar
    useEffect(() => {
      console.log('Component mounted or BMI updated');

      // Optional cleanup function
      return () => {
          console.log('Component unmounted');
      };
  }, [bmi]); // Executa quando o BMI muda

    setTimeout(() => { 
      setBmi(bmiValue);
      setShowTable(true);
    }, 5000); 
  };

  return (
    <div>
      <Header onCalculate={handleCalculate} />
      {showTable && <Table bmi={bmi} />}
    </div>
  );
}

export default App;
