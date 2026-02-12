"use client";
import { useState } from "react";
import MenuList from "./MenuList";
import { menu as tastyMenus } from "../../../utils/contents";
import { CaretUp } from "@phosphor-icons/react";

function Menus() {
  const [expanded, setExpanded] = useState(true);
  return (
    <section className="bg-gradient-to-bottom " id="menu">
      <div className="w-full mx-auto max-w-360 px-4 sm:px-8 lg:px-20 py-12 md:py-24 flex flex-col items-center">
        <div className="flex flex-col max-w-180 gap-y-4 items-center text-center self-center mb-12 sm:mb-16">
          <p className="bg-primary-accent-100 text-primary-100 px-8 py-2 rounded-full  text-sm/loose md:text-base/8 shadow-xl">
            Our Menu
          </p>
          <h2 className="text-primary-base-500 font-bold text-2xl/tight tracking-tight md:text-4xl/12">
            What Our Signature Menu <br /> Brings To The Table
          </h2>
          <p className="text-primary-base-200 text-base/normal md:text-lg/normal">
            Our menu is crafted with fresh ingredients and bold flavors, proudly
            serving hundreds of our loyal food lovers who keep coming back for
            the taste they trust.
          </p>
        </div>
        <div className="mb-16">
          {/* <MenuList tastyMenus={tastyMenus.slice(0, expanded ? 6 : 3)} />
          <MenuList tastyMenus={tastyMenus.slice(6, expanded ? 12 : 9)} />
          <MenuList tastyMenus={tastyMenus.slice(12, expanded ? 18 : 15)} /> */}
          <MenuList tastyMenus={tastyMenus.slice(0, expanded ? 16 : 8)} />
          <MenuList tastyMenus={tastyMenus.slice(16, expanded ? 32 : 16)} />
          <MenuList tastyMenus={tastyMenus.slice(32, expanded ? 48 : 24)} />
        </div>
        <button
          className="bg-primary-base-500 text-primary-75 border-2 border-primary-base-500 transition-properties rounded-full px-8 py-2 hover:bg-primary-75 hover:text-primary-base-500 hover:border-primary-base-500 cursor-pointer flex items-center gap-x-2 text-base/loose sm:text-lg/8"
          onClick={() => setExpanded((currentValue) => !currentValue)}
        >
          {expanded ? "Show less" : "Show more"}
          <CaretUp
            width={2}
            className={`rotate-180 transition-all duration-300 ${
              expanded && "rotate-360"
            }`}
            alt="caretup icon"
          />
        </button>
      </div>
    </section>
  );
}

export default Menus;
