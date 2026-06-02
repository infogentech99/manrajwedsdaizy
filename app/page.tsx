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
      title_ceremony: "Mehendi",
      image: "/assets/mehendi.webp",
      venue_address: <>Friday, March 9th 2026 <br /> Taj Exotica Resort, Goa <br /> 9pm Onwards</>,
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    },

    {
      title_ceremony: "Haldi",
      image: "/assets/haldi.webp",
      venue_address: <>Friday, March 9th 2026 <br /> Taj Exotica Resort, Goa <br /> 6pm Onwards</>,
      link: "https://maps.app.goo.gl/ywMPWwHjbXvqwiWc8",
    },
    {
      title_ceremony: "Cocktail",
      image: "/assets/cocktail.webp",
      venue_address: <>Friday, March 9th 2026<br /> JW Mariott, Mussoorie <br /> 6pm Onwards</>,
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    },

    {
      title_ceremony: "Pre-wedding",
      image: "/assets/pre_wedding.webp",
      venue_address: <>Friday, March 9th 2026 <br /> Taj Exotica Resort, Goa <br /> 6pm Onwards</>,
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    },

    {
      title_ceremony: "Anand Karaj",
      image: "/assets/anand_karaj.webp",
      venue_address: <>Friday, March 9th 2026 <br /> Taj Exotica Resort, Goa <br /> 6pm Onwards</>,
      link: "https://maps.app.goo.gl/mxcwCxWhH1TXBC8c9",
    },


    {
      title_ceremony: "Reception",
      image: "/assets/reception.webp",
      venue_address: <>Friday, March 9th 2026 <br /> Taj Exotica Resort, Goa <br /> 6pm Onwards</>,
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
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
      <div className=" bg-[url('/assets/respo_bg.webp')] md:bg-[url('/assets/background.webp')] 3xl:bg-[url('/assets/bg.webp')]
                       bg-cover bg-no-repeat bg-top md:bg-position-[center_top] lg:bg-center w-full overflow-hidden relative">
        
        <RoseHeroTemp />

        <div className="pt-40 md:pt-88 lg:pt-160 3xl:pt-200 relative z-10">
          <h2 className="text-[#AE633A] text-center leading-tight text-2xl md:text-5xl lg:text-[80px] pb-120
                          md:pb-350 lg:pb-470 3xl:pb-550 flex flex-col items-center gap-y-0 lg:gap-y-5">

            <span className="parisienne-regular">Harpreet</span>

            <span className="jacques-francois text-base md:text-2xl lg:text-[38px] tracking-widest font-cormorant">WEDS</span>

            <span className="parisienne-regular">Ritika</span>

          </h2>

          <div className="flex flex-col items-center text-center gap-6 mt-0 lg:pt-50 pt-0">
            <Image
              src="/assets/shabd.webp"
              alt="idol"  width={100} height={100}
              className="w-13 h-8 md:w-26 md:h-14 lg:w-38 lg:h-22 object-cover"/>
            <Image
              src="/assets/vachan.webp"
              alt="idol"  width={100} height={100}
              className="w-20 h-15 md:w-40 md:h-30 lg:w-59 lg:h-45 object-cover"/>

            <h2 className="text-[#15528A] text-sm md:text-xl lg:text-3xl md:pt-8 jacques-francois">
              With the heavenly blessings of <br /> Our late grandparents, <br /> Sdn. Gurmeet Kapoor and Sd. Maninder Singh.
            </h2>

            <hr className="w-16 lg:w-24 border-[#15528A] my-2 md:my-4" />
            <h2 className="text-[#15528A] text-xs md:text-lg lg:text-[26px] jacques-francois">
              The Kapoor Family
            </h2>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-[#15528A] jacques-francois text-3xl md:text-5xl lg:text-6xl leading-tight lg:tracking-wide tracking-wider">
              INVITES
            </h2>

            <p className="text-[#15528A] jacques-francois text-sm md:text-xl lg:text-3xl mt-6">
              you to join us in the wedding celebrations of
            </p>

            <h2 className="text-[#15528A] jacques-francois text-center mt-14 text-4xl md:text-6xl lg:text-[100px] leading-tight font-medium">
              HARPREET
            </h2>

            <p className="text-[#15528A] jacques-francois text-sm md:text-xl lg:text-3xl mt-4">
              S/O <br /> Dharmender Singh and Jaya Kaur
            </p>

            <h2 className="text-[#15528A] jacques-francois text-center mt-4 text-4xl md:text-6xl lg:text-[100px] leading-tight font-medium">
              <span className="text-[#15528A] jacques-francois text-center lg:mt-10 mt-0 text-4xl md:text-6xl lg:text-[100px] leading-tight">
                & </span>   <br /> RITIKA
            </h2>

            <p className="text-[#15528A] jacques-francois text-sm md:text-xl lg:text-3xl mt-4">
              D/O <br /> Manak Kapoor and Rani Kapoor
            </p>

            <p className="text-[#15528A] jacques-francois text-sm md:text-xl lg:text-3xl mt-8">
              On the following events
            </p>
          </div>

          <div className="flex justify-center mt-20 lg:mt-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-32 3xl:gap-50">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    className="w-75 md:w-76 lg:w-80 3xl:w-100 h-auto"/>

                  <h2 className="text-[#15528A] jacques-francois text-3xl md:text-2xl lg:text-[42px] mt-4">
                    {event.title_ceremony}
                  </h2>

                  <p className="text-[#15528A] jacques-francois text-sm md:text-base mt-2">
                    <span className="text-sm md:text-base lg:text-xl">{event.venue_address}</span> <br />
                  </p>

                  <a
                    href={event.link}
                    className="text-[#15528A] underline md:text-sm text-lg mt-2 jacques-francois"
                    target="_blank">
                    See the route
                  </a>

                </div>
              ))}
            </div>
          </div>


          <div className="relative flex flex-col items-center pt-30 lg:pt-50 3xl:pt-90 3xl:gap-60">
            {/* Center Text */}
            <div className="absolute flex flex-col justify-center items-center text-center md:mb-0 lg:mb-0 md:top-50 lg:top-84 3xl:top-152">
              <p className="font-Cormorant font-semibold text-lg md:text-2xl lg:text-[38px] text-[#0064BF]">
                MEET THE
              </p>

              <h2 className="text-6xl md:text-7xl lg:text-[130px] text-center text-[#6CB9FF] lg:pt-12 font-cormorant-upright lg:leading-18 md:leading-8 leading-6 pt-6">
                <span className="text-[#15528A] font-cormorant-upright">Bride</span> <br /> & <br /> <span className="text-[#15528A]">Groom</span>
              </h2>
            </div>
            <Image
              src="/assets/couple.webp"
              alt="couple" width={900} height={1200}
              className="w-108 h-104 md:w-205 md:h-198 lg:w-393 lg:h-374 3xl:w-480 3xl:h-463 object-cover"/>
          </div>
          
        </div>
      </div>

      <CoupleMessage />

      <div className="bg-[url('/assets/respo_three.webp')] md:bg-[url('/assets/bg_three.webp')] bg-cover bg-no-repeat">
        <div className="h-253 md:h-179 lg:h-330 3xl:h-421 flex flex-col items-center relative">
          <img src="/assets/logo.webp" alt="logo" width={250} height={300} className="absolute top-50 w-20 h-24 md:top-41 md:w-31 md:h-35 lg:top-84 lg:w-46 lg:h-52 3xl:top-118" />
        </div>
      </div>

      <MarriageCountdown />

      {/* <div className="fixed top-5 left-5 z-50">
        <a href="https://invitearc.com/">
          <button className="flex items-center gap-3 border-white border-2 bg-white/0 backdrop-blur text-white px-6 py-3 rounded-full shadow-lg cursor-pointer">
            <span className="text-3xl leading-none">←</span>
            <span className="text-[16px] font-semibold">
              Exit Preview
            </span>
          </button>
        </a>
      </div> */}
    </>
  );
}
