"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import RoseHeroTemp from "@/app/components/RoseHeroTemp";
import CoupleMessage from "@/app/components/CoupleMessage";
import MarriageCountdown from "@/app/components/MarriageCountdown";

const FloatingLamp = ({ className, style, reverse = false }: { className: string; style?: React.CSSProperties; reverse?: boolean }) => {
  // Memoize random values to prevent recalculation on re-renders
  const lampValues = useMemo(() => {
    // const duration = 60 + Math.random() * 40; // 60–100s (very slow flow)
    // const duration = 40 + Math.random() * 10; // 40–50s
    const duration = 60 + Math.random() * 10; // 60–70s
    const delay = Math.random() * 15;

    // depth feel - dramatic size variety
    const scale = Math.random() < 0.5
      ? 0.3 + Math.random() * 0.4  // 0.3–0.7 (small lamps)
      : 1.2 + Math.random() * 0.8; // 1.2–2.0 (large lamps)
    const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";

    return { duration, delay, scale, blur };
  }, []); // Empty dependency array means these values are calculated only once

  return (
    <img
      src="/flower_petals.webp"
      alt="petal"
      className={`floating-lamp ${className}`}
      style={{
        animationName: reverse ? 'lampFlowReverse' : 'lampFlow',
        animationDuration: `${lampValues.duration}s`,
        animationDelay: `${lampValues.delay}s`,
        transform: `scale(${lampValues.scale})`,
        filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
        '--scale': lampValues.scale,
        ...style,
      } as React.CSSProperties}
    />
  );
};

export default function Home() {
  const events = [
    

   


    
     {
      title_ceremony: "Cocktail",
       image: "/assets/cocktail_n.png",
      venue_address: <>Wednesday, October 28th 2026 <br /> Farm house No. 5, Khasra No.1508, <br/> Bhatti mines, Asola, New Delhi, Delhi 110074 <br /> 9:00 PM Onwards</>,
      link: "https://maps.app.goo.gl/bEHnAZNQU9e7tqZk6",
    },

    {
      title_ceremony: "Anand Karaj",
      image: "/assets/anand.png",
      venue_address: <>Friday, October 30th 2026 <br /> GURUDWARA SINGH SABHA, BILHARI <br /> 11 AM Onwards</>,
      link: "https://maps.app.goo.gl/J8xLdsUC1PTdgQrN9",
    },




  ];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch { }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch { }
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);

  return (
    <>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/background_song.mp3" loop preload="auto" playsInline />

      {/* hero section */}
      <div className=" bg-[url('/assets/respo_bg_11zon.webp')] md:bg-[url('/assets/background.webp')] 3xl:bg-[url('/assets/bg.webp')]
                       bg-cover bg-no-repeat bg-top md:bg-position-[center_top] lg:bg-center w-full overflow-hidden relative">

        <RoseHeroTemp />

        <div className="pt-38 md:pt-88 lg:pt-150 3xl:pt-200 relative z-10">
          <h2 className="text-[#AE633A] text-center leading-tight text-xl md:text-5xl lg:text-[80px] pb-120
                          md:pb-350 lg:pb-470 3xl:pb-550 flex flex-col items-center gap-y-0 lg:gap-y-5">

            <span className="font-playfair-display italic">Manraj Singh Somal</span>

            <span className="font-playfair-display text-base md:text-2xl lg:text-[38px] tracking-widest font-cormorant italic">WEDS</span>

            <span className="font-playfair-display italic">Daizy Singh</span>

          </h2>

          <div className="flex flex-col items-center text-center gap-6 mt-0 lg:pt-50 pt-0">
             <h2 className="text-[#15528A] text-[12px] md:text-xl lg:text-2xl md:pt-8 font-playfair-display">
              ਸਚੁ ਪਿਆਰਾ ਤਬ ਜਾਨੀਐ <br/> ਜਾ ਗੁਰੂ ਸਬਦੁ ਵਿਚਾਰਿ ॥
            </h2>

            <Image
              src="/assets/vachan.webp"
              alt="idol" width={100} height={100}
              className="w-20 h-15.5 md:w-40 md:h-40 lg:w-40 lg:h-31 object-cover" />

            <h2 className="text-[#15528A] text-sm md:text-xl lg:text-3xl md:pt-8 font-playfair-display">
              With the blessings of Waheguru
            </h2>

            <hr className="w-16 lg:w-24 border-[#15528A] my-2 md:my-4" />
            <h2 className="text-[#15528A] text-xs md:text-lg lg:text-[26px] font-playfair-display">
              Singh Family
            </h2>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-[#15528A] font-playfair-display text-3xl md:text-5xl lg:text-6xl leading-tight lg:tracking-wide tracking-wider">
              INVITES
            </h2>

            <p className="text-[#15528A] font-playfair-display text-sm md:text-xl lg:text-3xl mt-6">
              you to join us in the wedding celebrations of
            </p>

            <h2 className="text-[#15528A] font-playfair-display text-center mt-14 text-4xl md:text-6xl lg:text-[100px] leading-tight font-medium">
              Manraj Singh Somal
            </h2>

            <p className="text-[#15528A] font-playfair-display text-sm md:text-xl lg:text-3xl mt-4">
              Son of Gurnam Singh Somal & Jaswinder Kaur Somal
            </p>

            <h2 className="text-[#15528A] font-playfair-display text-center mt-4 text-4xl md:text-6xl lg:text-[100px] leading-tight font-medium">
              <span className="text-[#15528A] font-playfair-display text-center lg:mt-10 mt-0 text-4xl md:text-6xl lg:text-[100px] leading-tight">
                & </span>   <br /> Daizy Singh
            </h2>

            <p className="text-[#15528A] font-playfair-display text-sm md:text-xl lg:text-3xl mt-4">
             Daughter of Tajish Kaur & Late Jagmohan Singh
            </p>

            <p className="text-[#15528A] font-playfair-display text-sm md:text-xl lg:text-3xl mt-8">
              On the following events
            </p>
          </div>

          <div className="flex justify-center mt-20 lg:mt-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 lg:gap-32 3xl:gap-50">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    className="w-75 md:w-76 lg:w-80 3xl:w-100 h-auto" />

                  <h2 className="text-[#15528A] font-playfair-display text-3xl md:text-2xl lg:text-[42px] mt-4">
                    {event.title_ceremony}
                  </h2>

                  <p className="text-[#15528A] font-playfair-display text-sm md:text-base mt-2">
                    <span className="text-sm md:text-base lg:text-xl">{event.venue_address}</span> <br />
                  </p>

                  <a
                    href={event.link}
                    className="text-[#15528A] underline md:text-sm text-[12px] mt-2 font-playfair-display"
                    target="_blank">
                    See the route
                  </a>

                </div>
              ))}
            </div>
          </div>


          <div className="relative flex flex-col items-center pt-30 lg:pt-50 3xl:pt-90 3xl:gap-60">
            {/* Center Text */}
            {/* <div className="absolute flex flex-col justify-center text-center md:mb-0 lg:mb-0 md:top-50 lg:top-84 3xl:top-152"> */}
            <div className="absolute left-0 right-0 w-full flex flex-col items-center justify-center text-center md:mb-0 lg:mb-0 md:top-50 lg:top-84 3xl:top-152 -mt-10">
              <p className="font-parisienne-regular font-medium text-2xl md:text-2xl lg:text-[70px] text-[#0064BF]">
                With <br />Love From Us
              </p>

              <p className="text-[#15528A] font-eb-garamond text-sm md:text-xl lg:text-3xl mt-4 lg:px-150 px-25 md:px-60">
                Thank you for being part of our journey.
                Your presence makes this celebration truly
                meaningful, and we look forward to sharing
                these cherished moments with you.
              </p>
            </div>
            <Image
              src="/assets/couple.webp"
              alt="couple" width={900} height={1200}
              className="w-108 h-104 md:w-205 md:h-198 lg:w-440 lg:h-374 3xl:w-480 3xl:h-463 object-cover"/>
          </div>

        </div>
      </div>

      <CoupleMessage />

      {/* <div className="bg-[url('/assets/respo_three.webp')] md:bg-[url('/assets/bg_three.webp')] bg-cover bg-no-repeat">
        <div className="h-253 md:h-179 lg:h-380 3xl:h-421 flex flex-col items-center relative">
          <img src="/assets/logo_n.png" alt="logo" width={250} height={300} className="absolute top-50 w-28 h-28 md:top-41 md:w-31 md:h-35 lg:top-84 3xl:w-46 lg:w-52 lg:h-48 3xl:top-118 lg:ml-40 3xl:ml-0" />
        
        
        </div>
      </div> */}


        <div className="hidden md:block bg-[url('/assets/bg_three.webp')] bg-cover bg-no-repeat bg-center">
        <div className="lg:h-330 md:h-180 flex pt-80 justify-center">
          {/* <img src="/assets/logo_n.png" alt="logo" className="w-32 h-48 md:w-40 lg:w-60" /> */}
        </div>
      </div>


      {/* mobile visible section */}
      <div className="md:hidden bg-[url('/assets/respo_three.webp')] bg-cover bg-no-repeat">
        <div className="h-230 flex  justify-center pt-50">
          {/* <img src="/assets/logo_n.png" alt="logo" className="w-40 h-36" /> */}
        </div>
      </div>


      <MarriageCountdown />
    </>
  );
}
