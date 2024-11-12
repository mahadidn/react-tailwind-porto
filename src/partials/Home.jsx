import profilePic from '../assets/img/mdn.jpeg';

export default function Home() {
  return (
    <section id="home" className="pt-36 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
              Hello, i&apos;m{" "}
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white">
                Mahadi Dwi Nugraha
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl dark:text-white">
              RHCSA | Back End Dev Enthusiast
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed dark:text-white">
              I didn&apos;t know what to put, so I just put lorem ipsum :3
            </p>
            {/* <a href="#" class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hubungi Saya</a> */}
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <img
                src={profilePic}
                width={400}
                alt="Mahadi Dwi Nugraha"
                className="max-w-full mx-auto rounded-full border-4 border-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
