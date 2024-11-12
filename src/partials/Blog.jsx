import laravel from '../assets/img/blog/Laravel.png';
import ml from '../assets/img/blog/ml.png';
import sister from '../assets/img/blog/sister.png';

export default function Blog() {
  return (
    <section id="blog" className="pt-36 pb-32 bg-slate-100 dark:bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 dark:text-white">
              My Articles
            </h2>
            <p className="font-medium text-md text-secondary">
              I learn things, whether it&apos;s from lectures or self-study
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-700">
              <img
                src={sister}
                alt="Sistem Teristribusi"
                className="p-3 w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href='#'
                    onClick={(e) => e.preventDefault()}
                    className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white"
                  >
                    Distributed System
                  </a>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  how to build a distributed system and can ensure accurate and
                  real-time database across multiple servers
                </p>
                <a
                  href='#'
                  onClick={(e) => e.preventDefault()}
                  className="font-medium text-sm text-white bg-primary py-3 px-6 rounded-full hover:opacity-80 cursor-pointer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-700">
              <img
                src={laravel}
                alt="Sistem Teristribusi"
                className="p-3 w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="#"
                    className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white cursor-pointer"
                    onClick={(e) => e.preventDefault()}
                  >
                    OAuth2 Laravel
                  </a>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  What is OAuth2, and how is it implemented in Laravel 11 using
                  Laravel Passport?
                </p>
                <a
                  href='#'
                  onClick={(e) => e.preventDefault()}
                  className="font-medium text-sm text-white bg-primary py-3 px-6 rounded-full hover:opacity-80 cursor-pointer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-700">
              <img
                src={ml}
                alt="Sistem Teristribusi"
                className="p-3 w-full rounded-lg"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white"
                  >
                    Machine Learning
                  </a>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Implementation of Simple Linear Regression to Predict Drug
                  Sales at Pharmacies
                </p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="font-medium text-sm text-white bg-primary py-3 px-6 rounded-full hover:opacity-80"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
