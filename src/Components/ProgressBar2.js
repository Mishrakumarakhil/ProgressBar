import React, { useCallback, useEffect, useRef, useState } from "react";

const ProgressBar2 = () => {
  const [progress, setProgressMade] = useState(0);
  const [animation, setAnimation] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (progress > 100) {
      clearInterval(timer.current);
      setProgressMade(100);
    }
  }, [progress]);

  const handleClick = useCallback(() => {
    setAnimation(true);
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      setProgressMade((prev) => prev + 1);
    }, 50);
  }, []);

  const handleReset = useCallback(() => {
    setProgressMade(0);
    setAnimation(false);
  }, []);
  return (
    <div className="progress_two_heading">
      ProgressBar2 :- OnClick on Start Button Prgress bar fill in Linear way in
      1000ms and click on Reset start bar from zero.
      <div className="progress_two_container">
        <div className={`progress_two_fill`} style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
      <button onClick={handleClick}>Start</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default ProgressBar2;
