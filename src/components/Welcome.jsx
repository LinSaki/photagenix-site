import Section from "./Section";
import { curve, prismBackground, prism } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
const Welcome = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="welcome"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities with
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
            Contact Us!
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect[688/490] lg:aspect-[1024/490]">
                <img
                  src={prism}
                  className="w-full scale-[1.4] translate-y-[10%] md:scale[1] md:scale-[1] md:-translate-y-[1%] lg:scale-[1] lg:-translate-y-[2%]"
                  width={1024}
                  height={490}
                  alt="prism"
                />
              </div>
            </div>
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={prismBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="background"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Welcome;
