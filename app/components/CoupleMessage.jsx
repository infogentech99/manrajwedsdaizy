export default function CoupleMessage() {
  return (
    <div className="bg-[url('/assets/respo_bg_two5.png')] md:bg-[url('/assets/bg_two4.png')] bg-cover bg-no-repeat">
      <div className="h-360 md:h-585 lg:h-800 3xl:h-950">
        <h1 className="text-2xl md:text-2xl lg:text-[36px] text-center text-[#15528A] lg:pt-40 pt-20 jacques-francois">
          INTRODUCING
        </h1>
        <h2 className="text-3xl md:text-xl lg:text-[90px] text-center text-[#15528A] px-3 md:px-17 lg:px-51 3xl:px-103 mt-12 lg:mt-16 font-parisienne-regular leading-5 md:leading-tight">
          The Couple
        </h2>
        <div className="relative flex flex-col items-center mt-12 md:mt-12 lg:mt-20 3xl:mt-30">
          <h2 className=" text-[#15528A] text-left text-xl md:text-4xl lg:text-[68px] 3xl:text-[78px] pl-44 md:pl-114 lg:pl-180 3xl:pl-240 md:mt-2 lg:mt-3 3xl:mt-5 flex flex-col justify-end ">
            <span className="jacques-francois">Sargun</span>
            <span className="lavishly-yours-regular opacity-50 text-[#6CB9FF] text-5xl md:text-7xl lg:text-[150px] tracking-widest -mt-6 pl-5 md:-mt-9 md:pl-10 lg:-mt-19 lg:pl-18">
              &
            </span>
            <span className="jacques-francois -mt-4 md:-mt-6 lg:-mt-10">
              Kopal
            </span>
          </h2>

          <img
            src="/assets/one.png"
            alt="couple"
            className="absolute right-40 w-35 h-28 md:right-78 md:w-60 md:h-46 
                              lg:right-143 lg:w-106 lg:h-83 3xl:right-167 3xl:w-146 3xl:h-103 z-20 cover"
          />
          <img
            src="/assets/two.png"
            alt="couple_one"
            className="absolute top-15 left-6 w-32 h-55 md:left-21 
                               md:top-24 md:w-54 md:h-90 lg:left-50 lg:top-45 lg:w-97 lg:h-166 3xl:left-68 3xl:top-60 3xl:w-117 3xl:h-186 z-10"
          />

          <img
            src="/assets/three.webp"
            alt="flowers"
            className="absolute right-42 top-20 w-27 h-37 md:right-82 md:top-34 md:w-45 
                               md:h-59 lg:right-150 lg:top-61 lg:w-82 lg:h-110 3xl:right-180 3xl:top-75 3xl:w-102 3xl:h-130 z-40"
          />
          <img
            src="/assets/four.png"
            alt="couple"
            className="absolute right-9 top-18 w-39 h-59 md:right-22 md:top-30 md:w-69 
                               md:h-98 lg:right-49 lg:top-55 lg:w-118 lg:h-176 3xl:right-61 3xl:top-67 3xl:w-138 3xl:h-196 z-30"
          />
          <img
            src="/assets/five.png"
            alt="couple"
            className="absolute top-60 right-38 w-40 h-30 md:right-76 md:top-97 md:w-70 
                               md:h-50 lg:right-142 lg:top-181 lg:w-120 lg:h-91 3xl:top-212 3xl:right-170 3xl:w-160 3xl:h-111 z-20"
          />
        </div>

        {/* <h1 className="text-5xl md:text-6xl lg:text-[90px] text-center text-[#15528A] pt-86 md:pt-130 lg:pt-250 3xl:pt-320 leading-tight font-parisienne-regular">
          A Guide for <br />
          Guests
        </h1>

        <div className="flex justify-center mt-20 pb-24 md:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-50 3xl:gap-60">
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/assets/weather.webp"
                alt="weather"
                className="w-31 h-25 md:w-24 md:h-22 lg:w-28 lg:h-26"
              />
              <h2 className="text-[40px] md:text-3xl lg:text-[42px] text-[#15528A] mt-1 jacques-francois">
                Weather
              </h2>
              <p className="text-[14px] lg:text-[15px] text-[#15528A] mt-1 jacques-francois md:leading-5">
                It will be mostly cloudy with <br />
                temperature reaching up <br />
                to 22 degrees at the venue
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/assets/staff.webp"
                alt="drive"
                className="w-28 h-35 md:w-17 md:h-23 lg:w-21 lg:h-27"
              />
              <h2 className="text-[40px] md:text-3xl lg:text-[42px] text-[#15528A] mt-1 jacques-francois">
                Staff
              </h2>
              <p className="text-[14px] lg:text-[15px] md:leading-5 text-[#15528A] mt-1 jacques-francois">
                We recommend the nearby <br />
                lodge called VEGA near the <br />
                venue for the staff members
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/assets/parking.webp"
                alt="car"
                className="w-31 h-25 md:w-26 md:h-23 lg:w-30 lg:h-27"
              />
              <h2 className="text-[40px] md:text-3xl lg:text-[42px] text-[#15528A] mt-1 jacques-francois">
                Parking
              </h2>
              <p className="text-[14px] lg:text-[15px] md:leading-5 text-[#15528A] mt-1 jacques-francois">
                Valet parking for all our <br />
                guests will be available <br />
                at the venue
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-xs md:text-xl lg:text-[26px] text-center text-[#15528A] px-4 md:px-20 lg:px-56 3xl:px-107 pt-10 md:pt-6 lg:pt-16 3xl:pt-16 mt-2 lg:mt-4 lg:leading-tight jacques-francois lg:px-100">
          To help you feel at ease and enjoy every moment of the celebrations,
          we’ve gathered a few thoughtful details we’d love for you to know
          before the big day.
        </h2> */}

        <div className="flex justify-center md:justify-end md:mt-2 mt-100 lg:mt-295 3xl:mt-320 md:pr-5 lg:pr-10 3xl:pr-30">
          <div className="">
            <h2 className="font-cormorant-upright font-semibold text-center text-4xl md:text-4xl lg:text-[64px] text-[#15528A] pt-10 md:pt-90 lg:pt-102 3xl:pt-150 md:leading-8 lg:leading-12 leading-8 px-10 md:px-0">
              Looking forward to <br className="hidden md:block" /> seeing you
            </h2>
            <div className="flex flex-col-1 md:gap-0 gap-0 lg:gap-0 justify-center items-center md:not-first:mt-4">
             <a href="https://wa.me/9179533483" target="_blank" rel="noopener noreferrer">
                <img
                  src="/assets/whatsapp.webp"
                  alt="icon"
                  className="h-8 w-8 md:w-8 md:h-8 lg:w-[42px] lg:h-[42px] 3xl:w-20 3xl:h-20"
                />
              </a>
              <h2 className="font-cormorant font-normal text-xs md:text-sm lg:text-[22px] text-[#15528A]">
                Click the Link to RSVP
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
