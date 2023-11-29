/* eslint-disable react/no-unescaped-entities */
import Navbar from "../Navbar";
import Footer from "../Footer";
import Button from "../LandingPage/components/Button";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="lg:flex lg:flex-row-reverse">
        <div>
          <img
            src="/about.jpg"
            alt=""
            className="object-contain px-8 mt-5 lg:h-[800px] lg:object-cover lg:w-[800px] lg:pb-7"
          />
        </div>
        <div className="mx-8 pb-28 font-nanum lg:w-[50%] ">
          <h1 className="text-3xl mt-8 font-libre px-2">We Are FundCraft</h1>
          <div className="px-2 font-nanum">
            <p className="italic text-xl py-7">
              Our journey started with a simple idea - to revolutionize the
              financial industry.
            </p>
            <p className="pb-7">
              We believe in thinking differently and challenging the status quo.
              That's why we've assembled a team of experts who are passionate
              about innovation and driven to create positive change.
            </p>
            <p className="pb-7 ">
              With our cutting-edge technology and forward-thinking mindset,
              we've been recognized for our achievements in the industry.
            </p>
            <p className="pb-7 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              consequuntur optio vitae nisi ratione dolores animi doloribus
              odit, a, facere commodi, obcaecati est! Velit ullam accusamus
              deleniti consequatur quidem eaque sed sequi iste.
            </p>
            <p className="pb-7 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              consequuntur optio vitae nisi ratione dolores animi doloribus
              odit, a, facere commodi, obcaecati est! Velit ullam accusamus
              deleniti consequatur quidem eaque sed sequi iste.
            </p>
            <Button
              text="Try the Web Version"
              url="/onBoard"
              variant="py-3 px-3 text-white -ml-2"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
