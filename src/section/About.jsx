import React from "react";
import { Element } from "react-scroll";

const About = () => {
  return (
    <>
      <section>
        <Element name="pricing">
          <div className="container">
            <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-20 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
              <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
                About FaceSearch AI
              </h3>

              <p className="mb-11 body-1 max-md:mb-8 max-md:body-3 text-justify">
                FaceSearch AI is an advanced image recognition platform that
                helps you discover where your photos appear across the internet.
                Using cutting-edge facial recognition technology, our tool
                analyzes a single photo to find matching images of yourself from
                public websites, social media platforms, and more. Protect your
                privacy, manage your online presence, and stay informed about
                how your images are being used with FaceSearch AI. Whether for
                personal or professional reasons, we provide an easy and secure
                way to track your digital footprint with accuracy and speed.
              </p>
            </div>
          </div>
        </Element>
      </section>
    </>
  );
};

export default About;
