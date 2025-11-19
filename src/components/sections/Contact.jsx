import Clock from "../icons/Clock";
import LocationPin from "../icons/LocationPin";
import Phone from "../icons/Phone";

function Contact() {
  return (
    <section id="contact">
      <div className="w-full mx-auto max-w-[90%] max-sm:max-w-[80%] sm:min-h-10  justify-center bg-primary-90 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col items-center justify-between sm:flex-row gap-y-10 sm:gap-x-2 md:gap-x-4 text-center pt-9 pb-9 px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center gap-y-2">
            <Clock className="text-primary-accent-100" width={2} />
            <p className="text-primary-base-200">Everyday, 10am - 10pm</p>
            <p className="text-primary-base-75 text-sm">working time</p>
          </div>

          <div className="hidden sm:block sm:border-l sm:border-primary-base-100 sm:h-24 ">
            {/* pipe 1 */}
          </div>

          <div className="flex flex-col items-center gap-y-2">
            <LocationPin className="text-primary-accent-100" width={2} />
            <p className="text-primary-base-200">
              Eismann Junction, Futo backgate
            </p>
            <p className="text-primary-base-75 text-sm">our location</p>
          </div>

          <div className="hidden sm:block sm:border-l sm:border-primary-base-100 sm:h-24   ">
            {/* pipe 2 */}
          </div>

          <div className="flex flex-col items-center gap-y-2">
            <Phone className="text-primary-accent-100 " width={2} />
            <p className="text-primary-base-200">+234 916 168 1691</p>
            <p className="text-primary-base-75 text-sm">Phone number</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
