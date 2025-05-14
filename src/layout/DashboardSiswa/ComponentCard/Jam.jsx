import React, { useEffect, useState } from "react";

export default function Kanan() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12; // Convert to 12-hour format

  return (
    <div>
      <div className="text-center text-gray-600 relative flex justify-center items-center">
        <div className="bagian-kiri">
          <span className="text-[5em] sm:text-[6em] md:text-[8em] lg:text-[10em] w-[60px] sm:w-[75px] md:w-[100px] lg:w-[125px]">
            {String(displayHours).padStart(2, "0")}
          </span>
          <span className="text-[6em] sm:text-[7em] md:text-[10em] lg:text-[12em]">
            :
          </span>
          <span className="text-[5em] sm:text-[6em] md:text-[8em] lg:text-[10em] w-[60px] sm:w-[75px] md:w-[100px] lg:w-[125px]">
            {String(minutes).padStart(2, "0")}
          </span>
          <span className="text-[6em] sm:text-[7em] md:text-[10em] lg:text-[12em]">
            .
          </span>
        </div>
        <div className="relative flex content-center items-center flex-col ml-2.5">
          <span className="text-[1.5em] sm:text-[2em] md:text-[3em] lg:text-[3.5em] font-semibold">
            {ampm}
          </span>
          <span className="text-[1.5em] sm:text-[2em] md:text-[3em] lg:text-[3.5em] font-semibold">
            {String(seconds).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
