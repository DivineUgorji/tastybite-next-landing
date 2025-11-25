import { navigationLinks } from "../../utils/contents";
import Logo from "../icons/Logo";
import Play from "../icons/Play";
import MobileMenuIcon from "./MobileMenu/MobileMenuIcon";
import { usePlausible } from "next-plausible";

function Navigation() {
  const plausible = usePlausible();
  return (
    <nav className="w-full mx-auto px-4 max-w-360 flex justify-between md:flex md:justify-between md:items-center sm:px-8 lg:px-20">
      <a href="#" className="flex gap-x-2 items-center">
        <Logo className="h-6" width={2} />
        <p className="text-xl font-bold tracking-tight">TastyBite</p>
      </a>

      <div className="hidden  md:flex md:gap-x-6 md:items-center">
        <ul className="hidden gap-y-6 md:flex md:gap-x-6 md:font-medium md:text-[1.1rem]">
          {navigationLinks.map((navLinks) => (
            <li key={navLinks.id}>
              <a href={navLinks.href}>{navLinks.link}</a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/message/N4ERLPR6KBEWP1"
          className="bg-primary-accent-100 border-primary-accent-100 text-primary-100 rounded-full px-8 py-2 border-2 cursor-pointer text-base/loose hover:bg-primary-accent-75 hover:border-primary-accent-75 transition-properties font-medium text-[1rem]"
          onClick={() => plausible("Desktop_Navbar_order_click")}
        >
          Order Now
        </a>
      </div>

      <MobileMenuIcon />
    </nav>
  );
}

export default Navigation;
