import React from "react";

const OutOfTheBoxPage = () => {
  return (
    <main className="px-5 pt-20 pb-32">
      <h1 className="text-4xl mb-7  ">Hehehe...</h1>
      <div className="flex flex-col items-center justify-center gap-y-6">
        <iframe
          src="https://www.youtube.com/embed/9CeLkkWt5js?si=rnA8rMo3vu6bcMHz"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/u50UCzk0u7Y?si=KvhhDslt9TwANeIp"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
};

export default OutOfTheBoxPage;
