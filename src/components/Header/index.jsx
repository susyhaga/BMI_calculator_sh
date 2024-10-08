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
            <div className={styles.headerElements}>
                <img src={icon} alt="Calculator Icon" className={styles.icon} />
                <h1 className={styles.title}>BMI CALCULATOR</h1>
                <div className={styles.text}>
                    <h3 className={styles.textTitle}>What is BMI?</h3>
                    <p className={styles.textP}>It is a powerful tool has been used to estimate how much body fat someone has to understand whether they are a healthy weight for their height. While it is a quick, easy-to-use, and popular measure, it can also be misleading in certain cases and for some groups of people.</p>
                </div>
                <div className={styles.containerInput}>
                    <p className={styles.p}>
                        Type your measurements below to find out if your Body Mass Index is healthy
                    </p>
                    <div className={styles.inputGroups}>
                        <div className={styles.inputElement}>
                            <label className={styles.label} name="weight">WEIGHT (kg)</label>
                            <input
                                className={styles.input}
                                id="weight"
                                type="text"
                                placeholder="e.g: 50.5"
                                value={weight}
                                onChange={handleWeightChange} 
                            />
                        </div>
                        <div className={styles.inputElement}>
                            <label className={styles.label}name="height">HEIGHT (m)</label>
                            <input
                                className={styles.input}
                                id="height"
                                type="text"
                                placeholder="e.g: 1.60"
                                value={height}
                                onChange={handleHeightChange}
                            />
                        </div>
                        <button className={styles.button} onClick={handleCalculateClick}>CALCULATE</button>
                    </div>
                </div>
                {showTable && <Table bmi={bmi} />} {/* Exibir a tabela se showTable for true */}
                <footer className={styles.footer}>
                    <div class={styles.footerContainer}>
                        <p>® 2024 BMI CALCULATOR - All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </header>
    );
};

export default Header;