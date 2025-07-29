import React from 'react';

function About() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      {/* Image Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D22AQGb60HD1NmQBA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1689758859921?e=2147483647&v=beta&t=fAfF3C88APnmtPqVTizpdt_0fFk09fh5Ey_thAZFfBo"
          alt="Background"
          className="min-w-[100vw] min-h-[100vh]"
        />

        {/* Dark Overlay */}
        <div className="absolute w-full h-full top-0 left-0 bg-black/60 z-[1]"></div>
      </div>

      {/* Foreground Content */}
      <div className="z-10 px-4 space-y-4">
        <h1 className="font-light text-4xl md:text-6xl">Enterprises Resource Planning</h1>
        <h3 className="font-light text-xl md:text-3xl">
        Enterprise resource planning (ERP) is the integrated management of core business processes, often in real-time and mediated by software and technology.
        </h3>
      </div>
    </section>
  );
}

export default About;
