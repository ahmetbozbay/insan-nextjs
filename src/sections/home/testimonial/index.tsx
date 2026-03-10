import React from "react";
import TestimonialSlider from "./testimonial-slider";
import { getTranslations } from "@/actions/translations";

const HomeTestimonial = async () => {
  const t = await getTranslations("testimonials");
  return (
    <section className="testimonial-section pb-110 lg:pb-70 xs-to-md-max:pb-50">
      <div className="container">
        <div className="section-tittle text-center mb-30">
          <p className="key-title mb-10">{t.title}</p>
          <h2 className="common-title text-8xl leading-[1.29] xs-to-sm-max:text-3xl">
            {t.description}
          </h2>
        </div>
        <div className="row justify-content-center g-24">
          <TestimonialSlider testimonials={t.testimonials} />
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
