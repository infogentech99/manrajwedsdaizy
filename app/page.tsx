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
      title:"AN EVENING OF TOASTS & TOGETHERNESS",
      title_ceremony: "Cocktail",
      subtitle: <>An intimate evening of fine spirits, music, <br /> laughter and cherished company</>,
      image: "/assets/cocktail_n.png",
      venue_name: "IRAIUXE,",
      venue_date: "Wednesday, 28 October 2026 ",
      venue_time: " 9:00 PM Onwards",
      venue_address: <>Farm house No. 5, <br /> Khasra No.1508, Bhatti mines, <br />  Asola, New Delhi<br /></>,
      link: "https://maps.app.goo.gl/bEHnAZNQU9e7tqZk6",
    },

    {
      title:"THE SACRED BEGINNING",
      title_ceremony: "Anand Karaj",
      subtitle: <>In the presence of Waheguru Ji, <br />
        two souls come together and two families become one.</>,
      venue_text: <>We invite you to join us as Daizy and Manraj <br />
        take the first steps of their journey as one, <br />
        surrounded by the prayers, blessings and love <br />
        of those who mean the most.</>,
      image: "/assets/anand.png",
      venue_name: "Gurdwara Singh Sabha",
      venue_date: "Friday, 30th October 2026 ",
      venue_time: "11 AM Onwards",
      venue_address: <>M49J+W56, Rd Number 50, <br />Punjabi Bagh, New Delhi</>,
      link: "https://maps.app.goo.gl/XvTQ5BonxsDZeE1m7",
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
      <div className=" bg-[url('/assets/respo_bg_n3.webp')]  md:bg-[url('/assets/bg_n3.webp')]
                       bg-cover bg-no-repeat bg-top md:bg-position-[center_top] lg:bg-center w-full overflow-hidden relative">

        <RoseHeroTemp />

        <div className="pt-38 md:pt-105 lg:pt-150 3xl:pt-00 relative z-10">
          <h2 className="text-[#AE633A] text-center leading-tight text-xl md:text-5xl lg:text-[80px] pb-120
                          md:pb-280 lg:pb-450 3xl:pb-500 flex flex-col items-center gap-y-0 lg:gap-y-5">

            <span className="font-playfair-display italic">Manraj Singh Somal</span>

            <span className="font-playfair-display text-base md:text-2xl lg:text-[38px] tracking-widest font-cormorant italic">Weds</span>

            <span className="font-playfair-display italic">Daizy Singh</span>

          </h2>

          <div className="flex flex-col items-center text-center gap-6 mt-0 lg:pt-50 pt-0">
            <h2 className="text-[#15528A] text-[12px] md:text-xl lg:text-2xl md:pt-8 font-playfair-display">
              ਸਚੁ ਪਿਆਰਾ ਤਬ ਜਾਨੀਐ <br /> ਜਾ ਗੁਰੂ ਸਬਦੁ ਵਿਚਾਰਿ ॥
            </h2>

            <Image
              src="/assets/vachan.webp"
              alt="idol" width={100} height={100}
              className="w-20 h-15.5 md:w-32 md:h-25 lg:w-40 lg:h-31 object-cover" />

            <h2 className="text-[#15528A] text-sm md:text-xl lg:text-2xl md:pt-8 font-playfair-display font-semibold">
              WITH THE BLESSINGS OF WAHEGURU JI
              <br />
              <span className="text-[#15528A] text-xl md:text-xl lg:text-3xl font-playfair-display font-semibold">
                A CELEBRATION OF LOVE, FAMILY & NEW BEGINNINGS</span>
            </h2>

            <h2 className="text-[#15528A] text-xs md:text-lg lg:text-[26px] font-playfair-display">
              Some moments are destined to become cherished memories.
            </h2>
            <h2 className="text-[#15528A] text-xs md:text-lg lg:text-[26px] font-playfair-display">
              With immense joy and gratitude, <br />
              the Singh family requests the pleasure of your presence as
            </h2>

            {/* <Image
              src="/assets/arrow.png"
              alt="arrow"
              width={2048}
              height={253}
              className="md:w-1/5 w-1/2 h-auto"
            /> */}


            {/* <hr className="w-16 lg:w-24 border-[#15528A] my-2 md:my-4" /> */}
            {/* <h2 className="text-[#15528A] text-xs md:text-lg lg:text-[26px] font-playfair-display">
              The Singh Family
            </h2>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-[#15528A] font-playfair-display text-3xl md:text-5xl lg:text-6xl leading-tight lg:tracking-wide tracking-wider">
              INVITES
            </h2> */}

            {/* <p className="text-[#15528A] font-playfair-display text-sm md:text-xl lg:text-3xl mt-6">
              Joyfully invites you to celebrate
            </p> */}

            <h2 className="text-[#15528A] font-playfair-display text-center mt-14 text-4xl md:text-6xl lg:text-[100px] leading-tight font-semibold">
              Daizy Singh
            </h2>

            <p className="text-[#15528A] font-playfair-display text-sm md:text-xl lg:text-3xl mt-0 italic">
              Daughter of Tajish Kaur & Late Jagmohan Singh
            </p>

            <h2 className="text-[#15528A] font-playfair-display text-center mt-4 text-4xl md:text-6xl lg:text-[100px] leading-tight font-semibold">
              <span className="text-[#15528A] font-playfair-display text-center lg:mt-10 mt-0 text-4xl md:text-6xl lg:text-[100px] leading-tight">
                & </span>   <br />Manraj Singh Somal
            </h2>

            <p className="text-[#15528A] font-playfair-display text-sm md:text-xl lg:text-3xl mt-0 italic">
              Son of Gurnam Singh Somal & Jaswinder Kaur Somal
            </p>

            <h2 className="text-[#15528A] text-xs md:text-lg lg:text-[26px] font-playfair-display">
              Begin their journey together, surrounded by the love of their families
            </h2>


            <p className="text-[#15528A] font-playfair-display text-sm md:text-xl lg:text-3xl mt-8 font-bold">
              IN CELEBRATION
            </p>
            <h2 className="text-[#15528A] text-xs md:text-lg lg:text-[26px] font-playfair-display">
              As two hearts unite and two families come together, <br />
              we invite you to share in the joy of this beautiful occasion<br />
              and raise a toast to a lifetime of love, laughter and togetherness.
            </h2>
            {/* <p className="text-[#15528A] font-playfair-display text-sm md:text-xl lg:text-3xl mt-8 font-bold">
              AN EVENING OF TOASTS & TOGETHERNESS
            </p> */}
          </div>

          <div className="flex justify-center mt-8 lg:mt-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 lg:gap-32 3xl:gap-50">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <p className="text-[#15528A] font-playfair-display text-sm md:text-xl lg:text-3xl mt-8 font-bold">
              {event.title}
            </p>
                  <img
                    src={event.image}
                    className="w-75 md:w-76 lg:w-80 3xl:w-100 h-auto rounded-2xl mt-5" />

                  <h2 className="text-[#15528A] font-playfair-display text-3xl md:text-2xl lg:text-[42px] mt-4 uppercase font-bold">
                    {event.title_ceremony}
                  </h2>

                  <h2 className="text-[#15528A] font-playfair-display text-[14x] md:text-xl lg:text-[18px] italic">
                    {event.subtitle}
                  </h2>
                  <h2 className="text-[#15528A] font-playfair-display text-[14x] md:text-xl lg:text-[18px] mt-2">
                    {event.venue_text}
                  </h2>

                  <p className="text-[#15528A] font-playfair-display text-sm md:text-base mt-2">
                    <span className="text-sm md:text-base lg:text-xl font-semibold">{event.venue_date}</span> <br />
                    <span className="text-sm md:text-base lg:text-xl font-semibold">{event.venue_time}</span> <br />
                    <span className="text-sm md:text-base lg:text-xl font-semibold">{event.venue_name}</span> <br />
                    <span className="text-sm md:text-base lg:text-xl">{event.venue_address}</span>
                  </p>


                  <a
                    href={event.link}
                    className="text-[#15528A] md:text-sm text-[12px] mt-2 font-playfair-display font-semibold"
                    target="_blank">
                    VIEW LOCATION →
                  </a>

                </div>
              ))}
            </div>
          </div>




          <div className="relative flex flex-col items-center pt-80 lg:pt-50 3xl:pt-90 3xl:gap-60">
            {/* Center Text */}
            {/* <div className="absolute flex flex-col justify-center text-center md:mb-0 lg:mb-0 md:top-50 lg:top-84 3xl:top-152"> */}
            <div className="absolute left-0 right-0 w-full flex flex-col items-center justify-center text-center md:mb-0 lg:mb-0 md:top-50 lg:top-84 3xl:top-152 -mt-50">

              {/* <p className="text-[#15528A] font-playfair-display text-sm md:text-xl lg:text-3xl mt-8 font-bold">
             
            </p> */}

              <p className="font-playfair-display font-semibold text-xl md:text-2xl lg:text-[40px] text-[#15528A] w-60 leading-5 md:leading-10 lg:w-200 md:w-100">
                AND SO, IT BEGINS…
              </p>
              
              <p className="text-[#15528A] font-eb-garamond text-sm md:text-xl lg:text-2xl mt-4 lg:px-100 3xl:px-150 px-0 md:px-60 italic">
                A new home to build. <br />
                A thousand memories to make. <br />
                A lifetime of laughter, love and togetherness.
              </p>

              <p className="text-[#15528A] font-eb-garamond text-sm md:text-xl lg:text-2xl mt-4 lg:px-100 3xl:px-150 px-0 md:px-60">
                As they begin this journey, <br />
                your presence will be one of the most beautiful<br />
                parts of their celebration.
              </p>


              <p className="text-[#15528A] font-eb-garamond text-sm md:text-xl lg:text-2xl mt-4 lg:px-100 3xl:px-150 px-0 md:px-60">
                Come raise a glass, share a prayer,<br />
                dance a little longer and celebrate a love<br />
                that brings two families together.
              </p>

            </div>
            <Image
              src="/assets/couple.webp"
              alt="couple" width={900} height={1200}
              className="w-108 h-104 md:w-205 md:h-198 lg:w-440 lg:h-374 3xl:w-480 3xl:h-463 object-cover" />
          </div>

        </div>
      </div>

      <CoupleMessage />


      <MarriageCountdown />
    </>
  );
}
