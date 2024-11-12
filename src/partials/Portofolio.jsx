import ami from '../assets/img/portofolio/ami.png';
import restkominfo from '../assets/img/portofolio/restapikominfo.png';

export default function Portofolio() {
  return (
    <section
      id="portofolio"
      className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portofolio
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 dark:text-white">
              My Projects
            </h2>
            <p className="font-medium text-md text-secondary">
              Projects that I have worked on
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img
                src={ami}
                alt="audit mutu internal"
                width="w-full"
              />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
              Sistem Audit Mutu Internal UMRAH
            </h3>
            <p className="font-medium text-base text-secondary">
              Internal quality audit system, this system is to conduct internal
              quality audits in each study program at Raja Ali Haji Maritime
              University. Created using Codeigniter4.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img
                src={restkominfo}
                alt="REST API KOMINFO"
                width="w-full"
              />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
              Rest API Diskominfo Kepri
            </h3>
            <p className="font-medium text-base text-secondary">
              Back end for the diskominfo kepri portal application, made using
              Laravel 11.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
