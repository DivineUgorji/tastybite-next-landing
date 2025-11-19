"use client";
import { motion } from "motion/react";
import Menu from "../../icons/Menu";
import { useMobileMenuContext } from "../../../Contexts/MobileMenuContext";

function MobileMenuIcon() {
  const { mobileMenuOpened, setMobileMenuOpened } = useMobileMenuContext();
  return (
    <motion.button
      initial={{ rotate: 0 }}
      animate={{ rotate: mobileMenuOpened ? 90 : 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="cursor-pointer items-center justify-center md:hidden"
      onClick={() => setMobileMenuOpened(true)}
    >
      <Menu className="h-7 w-7" width={2.5} />
    </motion.button>
  );
}

export default MobileMenuIcon;
