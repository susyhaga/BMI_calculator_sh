import { useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  const [bmi, setBmi] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const handleCalculate = (bmiValue) => {
    setIsLoading(true); // Ativa o carregamento
    setTimeout(() => { // Simula um delay
      setBmi(bmiValue);
      setShowTable(true);
      setIsLoading(false); // Desativa o carregamento após o delay
    }, 1000);
  };

  return (
    <div>
      <Header onCalculate={handleCalculate} />
      {showTable && <Table bmi={bmi} isLoading={isLoading} />}
    </div>
  );
}

export default App;