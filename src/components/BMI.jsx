import React, { useState } from "react";

const BMI = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState(null);

    const saveHeight = (e) => {
        setHeight(e.target.value);
    };

    const saveWeight = (e) => {
        setWeight(e.target.value);
    };

    const calculateBmi = (e) => {
        e.preventDefault();
        
        if (height && weight) {
            // Formula: weight (kg) / [height (m)]^2
            const heightInMeters = parseFloat(height) / 100;
            const weightInKg = parseFloat(weight);
            const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
            
            setBMI(bmiValue);
            
            // Optional: Clear inputs after calculation
            setHeight('');
            setWeight('');
        } else {
            alert("Please enter valid values");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center p-10">
            <h1 className="text-2xl font-bold">BMI Calculator</h1>
            <p className="text-center max-w-md mb-4">
                A BMI calculator is a tool that estimates your Body Mass Index (BMI) by using your height (cm) and weight (kg).
            </p>
            <form onSubmit={calculateBmi} className="flex flex-col gap-2">
                <label>Height (cm):</label>
                <input 
                    type="number"
                    value={height}
                    placeholder="e.g. 170"
                    className="border rounded px-2"
                    onChange={saveHeight}
                />
                <label>Weight (kg):</label>
                <input 
                    type='number'
                    value={weight}
                    placeholder="e.g. 70"
                    className="border rounded px-2"
                    onChange={saveWeight}
                />
                <button type="submit" className="border bg-blue-500 text-white rounded mt-4 p-2">
                    Calculate BMI
                </button>
            </form>
            
            <div className="mt-5">
                {bmi ? (
                    <p className="text-lg font-semibold">Your BMI value: {bmi}</p>
                ) : (
                    <p>Enter your Height and Weight to calculate BMI</p>
                )}
            </div>
        </div>
    );
};

export default BMI;
