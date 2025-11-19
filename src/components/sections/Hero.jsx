import Image from "next/image";
import { reviews } from "../../utils/contents";
import Play from "../icons/Play";
import heroImg from "@/assets/graphics/tasty-hero.png";

function Hero() {
  return (
    <div
      className="w-full mx-auto max-w-360 px-4 sm:px-8 lg:px-20 py-12 md:py-24 
      grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-y-12 lg:gap-x-9
      max-[1023px]:grid-cols-1 max-[1023px]:text-center max-[1023px]:place-items-center"
    >
      <div className="max-[1023px]:flex max-[1023px]:flex-col max-[1023px]:items-center">
        <h1
          className="text-primary-base-500 font-bold text-3xl tracking-tight 
          md:text-5xl mb-6 md:mb-10 max-[1023px]:text-center"
        >
          Freshly Made{" "}
          <span className="text-primary-accent-100">Pastries.</span> <br />
          To Satisfy Every Craving
        </h1>

        <p className="text-primary-base-200 text-base md:text-lg mb-6 md:mb-10 max-[900px]:text-center">
          From crispy shawarma to sweet cupcakes, <br />
          Tasty Bite is the best plug for your fresh, flavor-packed pastries,{" "}
          <br />
          crafted with love and care right here in FUTO and Owerri.
        </p>

        <div className="flex flex-col w-full min-[400px]:flex-row gap-4 mb-6 md:mb-10 max-[1023px]:justify-center">
          <a
            href="https://wa.me/message/N4ERLPR6KBEWP1?text=Hello%20I%20want%20to%20order"
            className="bg-primary-accent-100 border-primary-accent-100 text-primary-100 
              rounded-full border-2 px-6 py-3 w-full sm:w-40 text-center font-medium 
              hover:bg-primary-75 hover:text-primary-base-200 transition-properties shadow-xl"
          >
            Order Now
          </a>

          <a
            className="bg-primary-75 text-primary-base-200 border-2 rounded-full 
              px-6 py-3 w-full sm:w-40 text-center font-medium shadow-xl 
              hover:bg-primary-accent-100 hover:text-primary-100 transition-properties"
          >
            Learn More
          </a>
        </div>

        <div className="flex items-center gap-4 max-[900px]:justify-center max-[900px]:text-center">
          <ul className="flex justify-center">
            {reviews.map((review) => (
              <li key={review.id} className="-mr-4 last:mr-0">
                <Image
                  src={review.src}
                  width={48}
                  height={48}
                  alt={review.alt}
                  className="rounded-full border-2 border-primary-accent-75 h-10 md:h-12"
                />
              </li>
            ))}
          </ul>

          <p className="text-base text-primary-base-75">
            Trusted by{" "}
            <span className="font-bold text-primary-accent-100 tracking-tight">
              250+
            </span>{" "}
            food lovers.
          </p>
        </div>
      </div>

      <div className="max-[900px]:order-second max-[1023px]:mb-10">
        <Image
          src={heroImg}
          alt="Hero image"
          width={500}
          height={500}
          className="object-contain mx-auto rounded-lg"
        />
      </div>
    </div>
  );
}

export default Hero;
