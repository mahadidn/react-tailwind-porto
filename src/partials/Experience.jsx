export default function Experience() {
  return (
    <section id="experience" className="pt-36 pb-32 p-4 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Experience &amp; Certification
            </h4>
          </div>
        </div>
        {/* Flex container untuk experience dan certification */}
        <div className="w-full px-4 flex flex-col md:flex-row flex-wrap justify-center md:w-10/12 xl:mx-auto md:mx-auto">
          {/* Experience */}
          <div className="mb-12 p-4 md:w-1/2">
            <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg dark:bg-slate-800">
              <h2 className="text-2xl font-semibold mb-4 dark:text-gray-500">
                Experience
              </h2>
              <div className="space-y-6">
                {/* Experience 1 */}
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 dark:bg-dark" />
                  <a href="#" target="_blank">
                    <div>
                      <p className="text-gray-600 text-sm">
                        01 May 2024 - 30 June 2024
                      </p>
                      <p className="text-lg font-semibold hover:text-primary dark:text-gray-500 dark:hover:text-primary">
                        Programmer
                      </p>
                      <p className="text-sm text-gray-500">LPMPP UMRAH</p>
                    </div>
                  </a>
                </div>
                {/* Experience 2 */}
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 dark:bg-dark" />
                  <a href="#" target="_blank">
                    <div>
                      <p className="text-gray-600 text-sm">
                        01 July 2024 - 30 August 2024
                      </p>
                      <p className="text-lg font-semibold hover:text-primary dark:text-gray-500 dark:hover:text-primary">
                        Programmer
                      </p>
                      <p className="text-sm text-gray-500">
                        Diskominfo Kepulauan Riau
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Certification */}
          <div className="mb-12 p-4 md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full dark:bg-slate-800">
              <h2 className="text-2xl font-semibold mb-4 dark:text-gray-500">
                Certification
              </h2>
              <div className="space-y-6">
                <div className="relative pl-8">
                  <a
                    href="https://www.credly.com/badges/06972855-95a3-4969-861c-b182f34218b6/linked_in_profile"
                    target="_blank"
                  >
                    <span className="absolute top-0 left-0 w-2 h-2 bg-gray-300 rounded-full dark:bg-dark" />
                    <p className="text-sm text-gray-500">May 2023</p>
                    <h3 className="text-lg font-semibold hover:text-primary dark:text-gray-500 dark:hover:text-primary">
                      Red Hat Certified System Administrator (RHCSA)
                    </h3>
                    <p className="text-sm text-gray-500">Red Hat</p>
                  </a>
                </div>
                <div className="relative pl-8">
                  <a
                    href="https://www.credly.com/badges/9b547219-9228-4cdf-86bd-92878ba561f8/linked_in_profile"
                    target="_blank"
                  >
                    <span className="absolute top-0 left-0 w-2 h-2 bg-gray-300 rounded-full dark:bg-dark" />
                    <p className="text-sm text-gray-500">September 2023</p>
                    <h3 className="text-lg font-semibold hover:text-primary dark:text-gray-500 dark:hover:text-primary">
                      IBM Artificial Intelligence Practitioner Certificate
                    </h3>
                    <p className="text-sm text-gray-500">IBM</p>
                  </a>
                </div>
                <div className="relative pl-8">
                  <a
                    href="https://www.credly.com/badges/e49f1244-37c4-4233-8f76-810d93edd5fe/linked_in_profile"
                    target="_blank"
                  >
                    <span className="absolute top-0 left-0 w-2 h-2 bg-gray-300 rounded-full dark:bg-dark" />
                    <p className="text-sm text-gray-500">May 2023</p>
                    <h3 className="text-lg font-semibold hover:text-primary dark:text-gray-500 dark:hover:text-primary">
                      Python for Data Science
                    </h3>
                    <p className="text-sm text-gray-500">IBM</p>
                  </a>
                </div>
                <div className="relative pl-8">
                  <a
                    href="https://www.credly.com/badges/8ebb772c-5966-49c5-89da-ae4ea3bc00bd/linked_in_profile"
                    target="_blank"
                  >
                    <span className="absolute top-0 left-0 w-2 h-2 bg-gray-300 rounded-full dark:bg-dark" />
                    <p className="text-sm text-gray-500">May 2023</p>
                    <h3 className="text-lg font-semibold hover:text-primary dark:text-gray-500 dark:hover:text-primary">
                      Enterprise Design Thinking Practitioner
                    </h3>
                    <p className="text-sm text-gray-500">IBM</p>
                  </a>
                </div>
                <div className="relative pl-8">
                  <a
                    href="https://www.credly.com/badges/78f9bce7-b383-4c30-885f-e9a8db70cd07/linked_in_profile"
                    target="_blank"
                  >
                    <span className="absolute top-0 left-0 w-2 h-2 bg-gray-300 rounded-full dark:bg-dark" />
                    <p className="text-sm text-gray-500">June 2023</p>
                    <h3 className="text-lg font-semibold hover:text-primary dark:text-gray-500 dark:hover:text-primary">
                      Enterprise Design Thinking - Team Essentials for AI
                    </h3>
                    <p className="text-sm text-gray-500">IBM</p>
                  </a>
                </div>
                <div className="relative pl-8">
                  <a
                    href="https://www.credly.com/badges/ef3d2c14-dd38-4771-9d12-6f2f84082788/linked_in_profile"
                    target="_blank"
                  >
                    <span className="absolute top-0 left-0 w-2 h-2 bg-gray-300 rounded-full dark:bg-dark" />
                    <p className="text-sm text-gray-500">September 2024</p>
                    <h3 className="text-lg font-semibold hover:text-primary dark:text-gray-500 dark:hover:text-primary">
                      IBM Cybersecurity Practitioner Certificate
                    </h3>
                    <p className="text-sm text-gray-500">IBM</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
