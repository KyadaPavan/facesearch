import { Element, Link, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-44 pb-20 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Search Your Face On Internet
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              FaceSearch AI
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              Using A single photo to find all the images of yourself on the
              internet.
            </p>

            <div className="flex gap-4 w-screen items-center ml-20">
              <label for="img" className="text-p1 text-xl">
                Select image:
              </label>

              <label for="file-input">
                <span class="relative  g5 rounded-2xl shadow-500 group p-4 font-poppins base-bold text-p1 uppercase cursor-pointer">
                  Try now
                </span>
                <input id="file-input" type="file" class="hidden" />
              </label>
            </div>
          </div>

          <div className="absolute top-40 left-[calc(70%-30px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/heroface.svg"
              className="size-1/3	 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
