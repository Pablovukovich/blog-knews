import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const VideosDeadline = () => {
  return (
    <>
      <div className="w-1/2  bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Videos
        </h2>
        <div className="aspect-video rounded">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="my-custom-swiper  h-full w-full"
          >
            <SwiperSlide>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/CgCVZdcKcqY"
                title="BLACKPINK - ‘뛰어(JUMP)’ M/V"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/8YiR9v3sOpk"
                title="BLACKPINK WORLD TOUR [DEADLINE] TRAILER"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </SwiperSlide>

            <SwiperSlide>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/blIkPgtlQZw"
                title="BLACKPINK 2025 WORLD TOUR TEASER"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </SwiperSlide>

            <SwiperSlide>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/BZR6dcAkIYM"
                title="BLACKPINK 2025 WORLD TOUR SPOT VIDEO"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/otS1Nb3hE1k"
                title="BLACKPINK 2025 WORLD TOUR - Special Moments with BLINKS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
