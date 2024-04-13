import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Props {
  targetDate: Date;
}

const CountdownTimer: React.FC<Props> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex items-center">
      <div className="w-10 h-10 f rounded-xl flex items-center justify-center bg-black text-xl mr-4 font-medium text-white">
        {timeLeft.days}
      </div>
      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-black text-xl mr-4 font-medium text-white">
        {timeLeft.hours}
      </div>
      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-black text-xl mr-4 font-medium text-white">
        {timeLeft.minutes}
      </div>
      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-black text-xl mr-4 font-medium text-white">
        {timeLeft.seconds}
      </div>
    </div>
  );
};

export default CountdownTimer;
