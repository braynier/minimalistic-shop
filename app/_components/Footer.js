function Footer() {
  return (
    <footer className="bg-[#191919] text-white">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-3 font-bebas text-[42px]">Newsletter</h2>
          <p className="mb-3 text-center">
            Subscribe to our newsletter for special offers and vibrant trends!
          </p>
          <form className="flex flex-col gap-y-3 md:flex-row">
            <input
              className="on mr-3 border-2 px-3 py-2 text-lg text-[#000] outline-none"
              type="text"
              placeholder="Your email"
            />
            <button
              className="border-2 border-[#e9e9e9] px-3 py-2 text-lg uppercase tracking-wider text-secondary transition duration-300 hover:bg-primary"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#000] py-10">
        <div className="mx-auto max-w-7xl">
          <ul className="mb-16 flex flex-wrap items-center justify-center gap-x-14 gap-y-3">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>

          <div className="mx-auto flex w-full flex-col items-center justify-center gap-y-3">
            <p>Copyright &copy; L. Kelly Limited</p>
            <a href="https://www.mindaugasdev.com/" target="_blank">
              MINDAUGAS.DEV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
