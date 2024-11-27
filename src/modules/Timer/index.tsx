import React, { useEffect, useState } from "react";

const Timer: React.FC<{ onTimerEnd: () => void }> = ({ onTimerEnd }) => {
  const [time, setTime] = useState(90);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          onTimerEnd();
          return 90;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimerEnd]);

  return (
    <div className="text-center py-6">
      <p className="text-lg font-semibold">Time: {time} seconds</p>
      <button
        onClick={() => {
          onTimerEnd();
          setTime(90);
        }}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Skip
      </button>
    </div>
  );
};

export default Timer;
