import React, { useCallback, useState } from "react";

const ProgressBar1 = () => {
  const [animation, setAnimation] = useState(false);

  const handleClick = useCallback(() => {
    setAnimation(true);
  }, []);
  return (
    <div className="progress_one_heading">
      ProgressBar1 :- OnClick on Start Button Prgress bar fill in Linear way in 3000ms.
      <div className="progress_one_container">
        <div
          className={`progress_one_fill ${animation ? "animation" : ""}`}
        ></div>
      </div>
      <button onClick={handleClick}>Start</button>
    </div>
  );
};
export default ProgressBar1;
