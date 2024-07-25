import { useState } from "react";
import styles from './Header.module.css';
import icon from '../../assets/imc.png';
import Table from '../Table'; // Certifique-se de que o caminho está correto

const Header = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null); 
    const [showTable, setShowTable] = useState(false); // Estado para mostrar ou esconder a tabela
    const [isFullScreen, setIsFullScreen] = useState(true);

    const handleWeightChange = (e) => setWeight(e.target.value);
    const handleHeightChange = (e) => setHeight(e.target.value);

    const handleCalculateClick = () => {
        const weightValue = parseFloat(weight);
        const heightValue = parseFloat(height);

        if (isNaN(weightValue) || isNaN(heightValue) || heightValue === 0) {
            alert('Please enter valid numbers for weight and height.');
            return;
        }

        const calculatedBmi = weightValue / (heightValue * heightValue);
        setBmi(calculatedBmi);
        setShowTable(true);
        setIsFullScreen(false); // Encolher o cabeçalho
    };

    return (
        <header className={`${styles.header} ${isFullScreen ? styles.fullscreen : styles.shrink}`}>
            <img src={icon} alt="Calculator Icon" className={styles.icon} />
            <h1 className={styles.title}>BMI CALCULATOR</h1>
            <hr className={styles.line} />
            <p className={styles.p}>
                Type your measurements below to find out if your <span className={styles.span}>Body Mass Index</span> is healthy
            </p>
            <div className={styles.inputContainer}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>WEIGHT (kg)</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="e.g: 50.5"
                        value={weight}
                        onChange={handleWeightChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>HEIGHT (m)</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="e.g: 1.60"
                        value={height}
                        onChange={handleHeightChange}
                    />
                </div>
                <button className={styles.button} onClick={handleCalculateClick}>CALCULATE</button>
            </div>
            {showTable && <Table bmi={bmi} />} {/* Exibir a tabela se showTable for true */}
        </header>
    );
};

export default Header;