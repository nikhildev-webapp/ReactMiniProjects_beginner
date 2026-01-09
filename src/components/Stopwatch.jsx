import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((prevTime)=>prevTime+1)
            },1000)
        } else {
            clearInterval(intervalId)
        }
        return ()=>clearInterval(intervalId)
    }, [isRunning])
    
    const handleReset = () => {
        setIsRunning(false)
        setTime(0);
    }

      const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${hrs}:${mins}:${secs}`;
    };
  return (
            <div className="flex flex-col items-center p-6 border rounded shadow-md bg-white">
            <h2 className="text-3xl font-mono mb-4">{formatTime(time)}</h2>
            <div className="flex gap-4">
                {!isRunning ? (
                    <button 
                        onClick={() => setIsRunning(true)}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Start
                    </button>
                ) : (
                    <button 
                        onClick={() => setIsRunning(false)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded"
                    >
                        Pause
                    </button>
                )}
                <button 
                    onClick={handleReset}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Reset
                </button>
            </div>
        </div>
      
  )
}

export default Stopwatch