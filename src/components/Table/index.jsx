import React from 'react';
import styles from './Table.module.css';
import gif from '../../assets/medo.gif'

const Table = ({ bmi }) => {
    const getClassification = (bmi) => {
        if (bmi < 18.5) return 'Underweight';
        if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
        if (bmi >= 25 && bmi < 30) return 'Overweight';
        if (bmi >= 30 && bmi < 35) return 'Obesity Class 1';
        if (bmi >= 35 && bmi < 40) return 'Obesity Class 2';
        if (bmi >= 40) return 'Obesity Class 3';
        return '';
    };

    const classification = getClassification(bmi);

    return (
        
        <div className={styles.tableContainer}>
            <div className={styles.centerResult}>
                <h2 className={styles.bmiResultText}>Your BMI is:</h2>
                <p className={styles.glowBmiResult}>{bmi ? bmi.toFixed(2) : 'N/A'}</p>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.subTitle}>Classification</th>
                        <th className={styles.subTitle}>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={classification === 'Underweight' ? styles.highlight : ''}>
                        <td>Underweight</td>
                        <td>Below 18.5</td>
                    </tr>
                    <tr className={classification === 'Normal weight' ? styles.highlight : ''}>
                        <td>Normal weight</td>
                        <td>18.5 to 25</td>
                    </tr>
                    <tr className={classification === 'Overweight' ? styles.highlight : ''}>
                        <td>Overweight</td>
                        <td>25 to 30</td>
                    </tr>
                    <tr className={classification === 'Obesity Class 1' ? styles.highlight : ''}>
                        <td>Obesity Class 1</td>
                        <td>30 to 35</td>
                    </tr>
                    <tr className={classification === 'Obesity Class 2' ? styles.highlight : ''}>
                        <td>Obesity Class 2</td>
                        <td>35 to 40</td>
                    </tr>
                    <tr className={classification === 'Obesity Class 3' ? styles.highlight : ''}>
                        <td>Obesity Class 3</td>
                        <td>40 or higher</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
