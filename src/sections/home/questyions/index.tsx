"use client";

import Image from "next/image";
import { useState } from "react";
import { Collapse } from "@mui/material";

// const questions = [
//     "Have you weighed the potential risks and benefits?",
//     "How will you gather feedback from stakeholders?",
//     "Are there any sustainability or ethical considerations to take into account?",
//     "Are there any sustainability or ethical considerations to take into account?",
//     "Are there any sustainability or ethical considerations to take into account?",
// ];

const HomeQuestionArea = ({ title, description, questions }: { title: string; description: string, questions: any[] }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="question-area pb-110 lg:pb-70 xs-to-md-max:pb-50 mt-40">
            <div className="container">
                <div className="grid grid-cols-12 gap-24">
                    <div className="xs-to-md-max:col-span-12 col-span-7 my-auto">
                        <div className="section-tittle mb-50">
                            <h2 className="common-title text-8xl leading-[1.29] xs-to-sm-max:text-3xl mb-12">{title}</h2>
                            <p className="common-pera text-base xs:text-sm leading-normal">
                                {description}
                            </p>
                        </div>
                        <div className="accordion ltr:xs-to-md-min:pr-60 rtl:xs-to-md-min:pl-60">
                            {questions.map((question, index) => (
                                <div
                                    key={index}
                                    className="collapse custom-collapse collapse-plus bg-white rounded-[10px] border border-accordion-border mb-20"
                                >
                                    <input type="radio" className="hidden" onChange={() => { }} checked={activeIndex === index}></input>
                                    <div
                                        className="collapse-title common-title text-base font-semibold pt-20 pr-46 pb-20 pl-20"
                                        onClick={() => { toggleAccordion(index) }}
                                    >
                                        {question.question}
                                    </div>
                                    <Collapse in={activeIndex === index} className="">
                                        <div className="p-[1rem] pt-0 common-pera text-base xs-to-sm-max:text-md">
                                            <p>{question.answer}</p>
                                        </div>
                                    </Collapse>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-5 xs-to-md-max:hidden block">
                        <Image
                            className="w-full d-none d-lg-block tilt-effect rounded-md"
                            src="/assets/images-used/questions/1.png"
                            alt="image"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeQuestionArea;
