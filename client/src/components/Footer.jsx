function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="max-w-3xl mx-auto">
          <div className="py-4 px-4 sm:px-0 md:px-4 lg:px-4">
            <div className="text-xs">
              Copyright &copy; {currentYear}
              <a
                href="https://bbima.ml"
                className="ml-1 hover:text-zinc-600"
                target="_blank"
                rel="noreferrer"
              >
                Banggi Bima
              </a>
              .
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
