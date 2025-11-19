import { li, p } from "motion/react-client";
import { footerCols } from "../../utils/contents";
import Logo from "../icons/Logo";

function Footer() {
  return (
    <footer>
      <div className="w-full m-auto max-w-360 flex flex-col gap-y-6 justify-between md:flex-row px-4 sm:px-8 lg:px-20 py-12 md:py-24">
        <div>
          <a href="#" className="flex items-center gap-x-2 ">
            <Logo className="h-6 w-6" width={2} />
            <p className="text-xl font-bold tracking-tight">TastyBite</p>
          </a>
        </div>

        <div className="grid  grid-cols-[repeat(2,max-content)] gap-y-6 md:grid-cols-[repeat(4,max-content)] gap-x-4">
          {footerCols.map((col) => (
            <div key={col.id}>
              <p className="text-xl font-semibold tracking-loose mb-4">
                {col.category}
              </p>
              <ul className="flex flex-col gap-y-4">
                {col.links.map((link) => (
                  <li key={link.id} className="cursor-pointer">
                    <a
                      href="#"
                      className="hover:text-primary-accent-75 transition-properties text-lg font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
