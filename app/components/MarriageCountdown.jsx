"use client";
import { useEffect, useState } from "react";

export default function MarriageCountdown() {
    const TARGET_DATE = new Date("2026-11-28").getTime();
  const [timeLeft, setTimeLeft] = useState({
  days: 14,
  hours: 12,
  minutes: 28,
  seconds: 0, 
});

useEffect(() => {
  const updateCountdown = () => {
    const now = new Date().getTime();
    const diff = TARGET_DATE - now;

    if (diff <= 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
      (diff % (1000 * 60)) / 1000
    );

    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  updateCountdown();

  // Update every second
  const interval = setInterval(updateCountdown, 1000);

  return () => clearInterval(interval);
}, []);

    return (
        <>
            <div className="bg-[url('/assets/bg_four.webp')] bg-cover bg-no-repeat">
                <div className="flex flex-col h-70 md:h-89 lg:h-165 3xl:h-210 md:gap-3 lg::gap-8 3xl:gap-8">
                    <h2 className="text-xl md:text-4xl lg:text-[60px] text-center text-[#15528A] pt-18 md:pt-11 lg:pt-42 3xl:pt-55 font-parisienne-regular">The Journey Begins</h2> 
                     <p className="text-xs md:text-xl lg:text-[26px] text-[#15528A] mt-4 text-center px-6 md:px-25 lg:px-65 3xl:px-120 font-playfair-display">
                        Surrounded by family and friends, we can't wait to celebrate <br/>
this beautiful moment with you.
                    </p>
                    <h2 className="text-xl md:text-4xl lg:text-[52px] text-center text-[#15528A] jacques-francois"> {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M {timeLeft.seconds}S</h2>
                   
                    <div className="flex flex-col-1 gap-4 justify-center items-center mt-2 md:mt-0">
                       <a href="https://www.instagram.com/theinvitearc/" target="_blank"><img src="/assets/instagram.webp" alt="icon" className="w-5 h-5 md:w-10 md:h-10"/></a>
                       
                    </div>
                    <p className="text-xs md:text-xl lg:text-[32px] text-[#15528A] mt-2 md:mt-0 text-center jacques-francois">
                        © <a href="https://invitearc.com/" target="_blank">InviteArc</a> 2026 </p>
                </div>
            </div>
        </>
    );
} 