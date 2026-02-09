import Image from "next/image";
import { motion } from "framer-motion";
import { usePlausible } from "next-plausible";

function Menu({ tastyMenu }) {
  const plausible = usePlausible();

  // Handle WhatsApp link click
  const handleOrderClick = (e) => {
    e.preventDefault();
    plausible("menu_order_click");

    const message = `Hi! Just saw ${tastyMenu.title} on your website and it's looking too good. I'd like to place an order`;
    // const message = `Hi! Saw this on your website and it's looking too good 👀 I'd like to order ${tastyMenu.title}`;
    const whatsappUrl = `https://wa.me/2349161681691?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.li
      className="flex flex-col px-6 py-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 40 }}
      viewport={{ once: false, amount: "100% " }}
      transition={{ opacity: { duration: 0.75, ease: "easeInOut" } }}
      id="Menu"
    >
      <div style={{ position: "relative", width: "100%", height: "300px" }}>
        <Image
          className="rounded-xl"
          src={tastyMenu.src}
          alt={tastyMenu.title || "Menu item"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="bg-primary-90 flex flex-col gap-y-4 flex-1 mt-4">
        <h4 className="font-semibold text-xl tracking-tight text-primary-base-500">
          {tastyMenu.title}
        </h4>
        <p className="text-primary-base-200 text-base md:text-lg grow">
          {tastyMenu.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-primary-base-75">
            Price: <span className="font-semibold">{tastyMenu.price}</span>
          </p>
          {/* <a
            href="https://wa.me/message/N4ERLPR6KBEWP1"
            className="bg-primary-accent-100 text-primary-100 px-3 py-2 border-2 rounded-xl sm:font-medium md:text-base text-sm"
            onClick={() => plausible("menu_order_click")}
          >
            Order Now
          </a> */}

          {/* <a
            href={`https://wa.me/2349161681691?text=Hello%2C%20I%20want%20to%20order%20${encodeURIComponent(tastyMenu.title)}`}
            className="bg-primary-accent-100 text-primary-100 px-3 py-2 border-2 rounded-xl sm:font-medium md:text-base text-sm"
            onClick={() => plausible("menu_order_click")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Now
          </a> */}

          <button
            onClick={handleOrderClick}
            className="bg-primary-accent-100 text-primary-100 px-3 py-2 border-2 rounded-xl sm:font-medium md:text-base text-sm cursor-pointer"
          >
            Order Now
          </button>
        </div>
      </div>
    </motion.li>
  );
}

export default Menu;
