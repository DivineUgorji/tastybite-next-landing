import { motion } from "framer-motion";
import { whyUs } from "../../utils/contents";

const fadeInAnimationVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index, duration: 0.6, ease: "easeInOut" },
  }),
};

function WhyUs() {
  return (
    <section
      className="bg-primary-75 mx-auto max-w-360 px-4 sm:px-8 lg:px-20 py-12 md:py-24"
      id="service"
    >
      <div className="text-center">
        <h2 className="text-primary-base-500 font-bold text-2xl/tight tracking-tight md:text-4xl/12">
          What Makes Us Different
        </h2>
        <p className="text-primary-base-200 text-base md:text-lg mt-2">
          Here are a few reasons why our customers love us so much
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {whyUs.map((benefit, index) => (
          <motion.li
            key={benefit.id}
            className="flex flex-col items-center px-6 py-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
            variants={fadeInAnimationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={index}
          >
            <benefit.Icon
              alt={benefit.alt}
              width={2}
              className="text-primary-accent-100 mb-6"
            />
            <h4 className="font-semibold text-lg mb-4 text-center">
              {benefit.title}
            </h4>
            <p className="text-center text-sm text-primary-base-300">
              {benefit.description}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default WhyUs;
