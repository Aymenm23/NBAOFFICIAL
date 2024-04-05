import React from "react";
import "./Survey.scss";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import RadioField from "../../components/RadioField/RadioField";
import { useNavigate, useParams, Link } from "react-router-dom";


const Survey = () => {
    const navigate = useNavigate();


  const questionsArray = [
    {
      question: "What is your level of basketball knowledge?",
      answers: ["Beginner", "Intermediate", "Expert"],
      image: "/images/question1.png",
      questionId: 1
    },
    {
      question: "In which age category do you fall?",
      answers: ["13-27", "28-43", "44-64", "65+"],
      image: "/images/question2.png",
      questionId: 2
    },
    {
      question: "How do you handle conflict?",
      answers: [
        "I mind my own business",
        "I won’t get involved unless I have to",
        "I live for the drama",
      ],
      image: "/images/question3.png",
      questionId: 3
    },
    {
      question: "What’s your ideal Friday night?",
      answers: [
        "Staying home with a good book",
        "An intimate gathering with friends",
        "A night out on the town",
      ],
      image: "/images/question4.png",
      questionId: 4
    },
    {
      question: "Choose a favorite color.",
      answers: ["Green", "Red", "Blue"],
      image: "/images/question5.png",
      questionId: 5
    },
  ];

  const onSubmit = async (event) => {


  }


  return (
    <>
      <Header />
      <section className="survey">
        <div className="survey__top">
          <h1 className="survey__header">D.U.N.K</h1>
          <p className="survey__description">
            Get quality, curated NBA content. Whether you are new
            to the sport or a dedicated fan, you deserve quality NBA fit.
          </p>
          <p className="survey__description">
            Answer a few questions to help us get your home page ready.
          </p>
        </div>
        <form className="survey__form" noValidate onSubmit={onSubmit}>
          <div>
            {questionsArray.map(({ question, answers, questionId, image }) => (
              <div className="survey__question-container" key={questionId}>
                <div className="survey__left-container">
                  <p className="survey__question">
                    {questionId}. {question}
                  </p>
                  <div className="survey__answers-container">
                    {answers.map((answer, index) => (
                      <RadioField
                        className="survey__answers"
                        key={index}
                        label={answer}
                        id={questionId}
                        name={answer}
                      />
                    ))}
                  </div>
                </div>
                <div className="survey__right-container">
                <img className="survey__image" src={image} />
                </div>
              </div>
            ))}
          </div>
          <div className="survey__button-container">
            <Link to="/landing" className="survey__button">Submit</Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Survey;
