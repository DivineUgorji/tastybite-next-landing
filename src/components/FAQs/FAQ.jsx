import { motion } from "motion/react";
import CaretUp from "../icons/CaretUp";
function FAQ({ question, activeQuestion, handleQuestionClick }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.li variants={itemVariants} className="shrink-0 grow-0">
      <button
        className="w-full flex items-center justify-between cursor-pointer"
        onClick={() => handleQuestionClick(question.id)}
      >
        <div className="flex items-center gap-4 ">
          <div className="border-primary-base-500 flex items-center justify-center p-2.5 rounded-xl border-2">
            <question.Icon width={2} alt={question.alt} />
          </div>
          <p className="mr-auto pr-4 text-left text-base/6 sm:text-lg/8 sm:font-semibold lg:text-xl/loose font-medium tracking-tight">
            {question.question}
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center ">
          <CaretUp width={2} activeQuestion={activeQuestion === question.id} />
        </div>
      </button>
      <motion.p
        className="pt-0 md:pr-14 md:pl-16 pr-0 pl-0 sm:text-lg/8 font-light text-base/loose"
        initial={{ opacity: 0, maxHeight: 0, visibility: "hidden" }}
        animate={
          activeQuestion === question.id
            ? {
                opacity: 1,
                maxHeight: "300px",
                visibility: "visible",
                paddingTop: "1rem",
              }
            : {}
        }
        transition={{ duration: 0.3, ease: "easeIn" }}
        layout
      >
        {question.answer}
      </motion.p>
    </motion.li>
  );
}

export default FAQ;
