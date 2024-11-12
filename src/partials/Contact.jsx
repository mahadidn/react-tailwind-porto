export default function Contact() {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Tidak bisa mengirim pesan untuk saat ini');
  }

  return (
    <section
      id="contact"
      className="pt-36 pb-32 bg-slate-100 dark:bg-slate-800"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 dark:text-white">
              Contact Me
            </h2>
            <p className="font-medium text-md text-secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus, assumenda.
            </p>
          </div>
        </div>
        <form>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="name"
                className="text-base font-bold text-primary uppercase"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="email"
                className="text-base font-bold text-primary uppercase"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary invalid:focus:ring-red-600 invalid:focus:border-red-600 peer"
              />
              <p className="text-sm m-1 text-red-600 invisible peer-invalid:visible">
                Email tidak valid
              </p>
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="message"
                className="text-base font-bold text-primary uppercase"
              >
                Message
              </label>
              <textarea
                type=""
                id="message"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                defaultValue={""}
              />
            </div>
            <div className="w-full px-4">
              <button
                id="button-form"
                className="text-base font-semibold text-white bg-primary py-3 px-6 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500"
                onClick={(e) => {handleFormSubmit(e)}}
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
