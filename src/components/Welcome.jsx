import Section from "./Section";
import { curve, prismBackground, prism } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Welcome";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Description from "./Description";
import CompanyLogos from "./CompanyLogos";
const Welcome = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="welcome"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities with{" "}
            <span className="inline-block relative">
              Photagenix{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-0.5"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            SUBHEADING -TOMO BIG BRAIN
          </p>
          <Button href="/contactus" white>
            Shopify
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={prism}
                  className="w-full scale-[1.4] translate-y-[10%] md:scale[1] md:scale-[1] md:-translate-y-[1%] lg:scale-[1] lg:-translate-y-[2%]"
                  width={1024}
                  height={490}
                  alt="prism"
                />

                <Description className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[87%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[78%] md:w-[138%] lg:-top-[104%] lg:w-[190%]">
            <img
              src={prismBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="background"
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Welcome;
