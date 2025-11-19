import { useState } from "react";
import { frequentlyAskedQuestions } from "../../utils/contents";
import FAQList from "./FAQList";

function FAQs() {
  const [category, setActiveCategory] = useState("Menu");
  const [activeQuestion, setActiveQuestion] = useState(null);
  const categoryObj = frequentlyAskedQuestions.find(
    (obj) => obj.category === category
  );

  const questionsArr = categoryObj.questions;

  const handleQuestionClick = (id) =>
    id === activeQuestion ? setActiveQuestion(null) : setActiveQuestion(id);

  const handleCategoryClick = (category) => {
    setActiveQuestion(null);
    setActiveCategory(category);
  };

  return (
    <section className="justify-items-center">
      <div className="w-full mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-20 py-12 md:py-24">
        <h2 className="text-primary-base-500 mb-8 text-center font-bold text-2xl/tight tracking-tight md:text-4xl/12">
          Frequently Asked Questions
        </h2>
        <div className="mb-8 mt-2">
          <p className="text-primary-base-200 text-center text-base md:text-lg">
            The most commonly asked questions about TastyBite. <br />
            Have any other questions?{" "}
            <a href="" className="underline decoration-1 underline-offset-3">
              Chat with our expert tech team
            </a>
          </p>
        </div>
        <ul className="mb-16 flex flex-wrap justify-center gap-x-3 gap-y-4">
          {frequentlyAskedQuestions.map((obj) => (
            <li key={obj.id}>
              <button
                onClick={() => handleCategoryClick(obj.category)}
                className={`rounded-full px-8 py-2 border-2 text-base/loose sm:text-lg/8 cursor-pointer transition-properties
                  ${
                    obj.category === category
                      ? "bg-primary-base-500 text-primary-100 border-primary-base-500"
                      : "bg-primary-75 text-primary-base-500 border-primary-base-500 hover:border-primary-base-500 hover:bg-primary-base-500 hover:text-primary-100"
                  }`}
              >
                {obj.category}
              </button>
            </li>
          ))}
        </ul>
        <FAQList
          category={category}
          questions={questionsArr}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      </div>
    </section>
  );
}

export default FAQs;
