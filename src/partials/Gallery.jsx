export default function Gallery() {
  return (
    <section id="gallery" className="pt-36 pb-32 p-4 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Gallery</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 dark:text-white">
              Gallery
            </h2>
            <p className="font-medium text-md text-secondary">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="mt-2 p-2 grid grid-cols-2 gap-2 md:grid-cols-4 md:p-4">
          <h2 className="h-15 text-xl font-semibold text-slate-200 md:col-start-4 md:row-start-2 md:flex">
            <span className="self-center text-3xl text-primary py-6 uppercase">
              MDN
            </span>
          </h2>
          <div className="h-15 text-lg font-bold to-slate-100 md:col-start-2 md:row-start-1 md:flex">
            <span className="self-end dark:text-white">@mahadi_dn</span>
          </div>
          <div className="group grid-card">
            <div className="grid-card-img bg-[url('/img/grid/furina.jpeg')] " />
          </div>
          <div className="group grid-card md:col-start-3 ">
            <div className="grid-card-img bg-[url('img/grid/marin.jpeg')] " />
          </div>
          <div className="group grid-card">
            <div className="grid-card-img bg-[url('/img/grid/me1.jpeg')] " />
          </div>
          <div className="group grid-card">
            <div className="grid-card-img bg-[url('/img/grid/me2.jpeg')] " />
          </div>
          <div className="group grid-card md:col-start-3">
            <div className="grid-card-img bg-[url('/img/grid/frieren2.jpeg')] " />
          </div>
          <div className="group grid-card md:col-start-2">
            <div className="grid-card-img bg-[url('/img/grid/furina2.jpeg')] " />
          </div>
          <div className="group grid-card md:col-start-4">
            <div className="grid-card-img bg-[url('/img/grid/me5.jpeg')] " />
          </div>
          <div className="group grid-card">
            <div className="grid-card-img bg-[url('/img/grid/me3.jpeg')] " />
          </div>
          <div className="group grid-card md:col-start-3">
            <div className="grid-card-img bg-[url('/img/grid/ryo.jpeg')] " />
          </div>
          <div className="group grid-card md:col-start-3">
            <div className="grid-card-img bg-[url('/img/grid/bocchi.jpeg')] " />
          </div>
        </div>
      </div>
    </section>
  );
}
