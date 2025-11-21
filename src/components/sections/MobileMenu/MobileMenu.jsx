import { motion } from "motion/react";
import Close from "../../icons/Close";
import { navigationLinks } from "../../../utils/contents";
import { useMobileMenuContext } from "../../../Contexts/MobileMenuContext";

function MobileMenu() {
  const { mobileMenuOpened, setMobileMenuOpened } = useMobileMenuContext();
  return (
    <motion.div
      className="bg-primary-base-300/50 fixed inset-0 z-50 flex justify-end px-4 pl-20 backdrop-blur-sm py-4"
      initial="hidden"
      animate={mobileMenuOpened ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, visibility: "hidden" },
        visible: { opacity: 100, visibility: "visible" },
      }}
      transition={{ duration: 0.25 }}
      onClick={() => setMobileMenuOpened(false)}
    >
      <motion.div
        className="bg-primary-base-200 flex basis-80 flex-col justify-between rounded-2xl bg-[url('../assets/Noise.webp')] bg-repeat px-6 py-8"
        initial="hiddden"
        animate={mobileMenuOpened ? "visible" : "hidden"}
        variants={{
          hidden: {
            x: "100%",
            opacity: 0,
            visibility: "hidden",
          },
          visible: {
            x: "0%",
            opacity: 1,
            visibility: "visible",
          },
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <button
            className=" border-primary-75 hover:bg-primary-75 group transition-properties  w-fit cursor-pointer rounded-xl border-2 p-2"
            onClick={() => setMobileMenuOpened(false)}
          >
            <Close
              width={2}
              className="stroke-primary-75 group-hover:stroke-primary-base-300 transition-properties h-4 w-4"
            />
          </button>
          <ul className="mt-16 flex flex-col gap-y-4 ">
            {navigationLinks.map((mobileNavLink) => {
              return (
                <li key={mobileNavLink.id}>
                  <a
                    href={mobileNavLink.href}
                    className="text-primary-100 hover:text-primary-accent-100 transition-properties text-lg/8"
                  >
                    {mobileNavLink.link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-y-3">
          <a
            href="https://wa.me/message/N4ERLPR6KBEWP1"
            rel="noopener noreferrer"
            className="block text-center bg-primary-accent-75 border-primary-accent-75 text-primary-100 hover:bg-primary-75 hover:text-primary-base-300 hover:border-primary-75 transition-properties rounded-full px-4 py-2 border-2 cursor-pointer font-medium text-lg/loose"
          >
            Order Now
          </a>
          <a
            href="#contact"
            className="block text-center border-primary-75 transition-properties text-primary-100 hover:bg-primary-75 hover:text-primary-base-300 box-border cursor-pointer rounded-full border-2 px-4 py-2 font-medium text-lg/loose"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default MobileMenu;
