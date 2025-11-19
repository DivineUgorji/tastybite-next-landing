import Testimonial from "./Testimonial";
function TestimonialList({ testimonials }) {
  return (
    <ul className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
      {/* <ul className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 items-stretch"> */}
      {testimonials.map((test) => (
        <Testimonial test={test} key={test.id} />
      ))}
    </ul>
  );
}

export default TestimonialList;
