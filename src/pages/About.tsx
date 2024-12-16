import Footer from "../components/Footer";
import Header from "../components/Header";
// import Testimonials from "../components/Testimonials";

const About = () => {
  return (
    <>
      <Header activePage="About" />
      <main
        className="animsition-overlay"
        data-animsition-overlay="true"
        style={{ opacity: 1 }}
      >
        <section
          id="up"
          className="page-head flex-min-height-box dark-bg-2 _mPS2id-t mPS2id-target mPS2id-target-first mPS2id-target-last"
        >
          <div
            className="page-head-bg overlay-loading2 overlayy"
            // style={{
            //   backgroundImage: "url(assets/images/backgrounds/about.jpg)",
            // }}
          />
          <div className="flex-min-height-inner">
            <div className="container top-bottom-padding-120 flex-container response-999">
              <div className="six-columns six-offset">
                <div className="content-left-margin-40">
                  <h2 className="overlay-loading2 tr-delay03 medium-title red-color">
                    About Arvotek
                  </h2>
                  <h3 className="large-title-bold text-color-4">
                    <span className="overlay-loading2 overlay-light-bg-1 tr-delay04">
                      Best Solutions
                    </span>
                    <br />
                    <span className="overlay-loading2 overlay-light-bg-1 tr-delay05">
                      &amp; ideas for
                    </span>
                    <br />
                    <span className="overlay-loading2 overlay-light-bg-1 tr-delay06">
                      Your Business
                    </span>
                  </h3>
                  <p className="d-flex-wrap top-margin-20 text-color-4">
                    <span className="small-title-oswald text-height-20 fade-loading tr-delay07 top-margin-10">
                      Creative team
                    </span>
                    <span className="small-title-oswald text-height-20 fade-loading tr-delay08 top-margin-10">
                      Innovative ideas
                    </span>
                    <span className="small-title-oswald text-height-20 fade-loading tr-delay09 top-margin-10">
                      Best services
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a href="#down" className="scroll-btn pointer-large _mPS2id-h">
            <div className="scroll-arrow-box">
              <span className="scroll-arrow" />
            </div>
            <div className="scroll-btn-flip-box">
              <span className="scroll-btn-flip" data-text="Scroll">
                Scroll
              </span>
            </div>
          </a>
        </section>
        <section
          id="down"
          className="dark-bg-1 flex-min-height-box about-page _mPS2id-t mPS2id-target mPS2id-target-first mPS2id-target-last"
        >
          <div className="flex-min-height-inner" style={{ minHeight: "500px" }}>
            <div className="container top-bottom-padding-60">
              {/* flex-container start */}
              <div data-animation-container className="flex-container animated">
                {/* column start */}
                <div className="four-columns">
                  <div className="content-right-margin-20">
                    <h2
                      data-animation-child
                      className="title-style title-fill animated title-fill-anim"
                      data-animation="title-fill-anim"
                      data-text="Who We Are"
                    >
                      Who We Are
                    </h2>
                  </div>
                </div>
                <div className="eight-columns">
                  <div className="content-left-margin-10">
                    <p
                      data-animation-child
                      className="p-style-large text-color-5 fade-anim-box tr-delay01 animated fade-anim"
                      data-animation="fade-anim"
                    >
                      We are Arvotek, a reliable service provider that ensures
                      innovation meets expertise! We are a passionate team of
                      digital enthusiasts dedicated to bringing your ideas to
                      life and propelling businesses to new heights. Our mission
                      is to partner with you on your digital journey, delivering
                      creative solutions that drive growth, engagement and
                      success.
                    </p>
                    <p
                      data-animation-child
                      className="p-style-large text-color-5 fade-anim-box tr-delay01 animated fade-anim"
                      data-animation="fade-anim"
                      style={{ marginTop: "20px" }}
                    >
                      At Arvotek, we envision a world where every business,
                      regardless of size or industry, can harness the power of
                      digital technologies to thrive and excel. Our vision is to
                      be the bridge that connects your aspirations with the
                      digital realm, empowering you to achieve your goals and
                      dreams.
                    </p>
                  </div>
                </div>
              </div>
              {/* flex-container end */}
            </div>
            {/* container end */}
          </div>
          {/* flex-min-height-inner end */}
        </section>

        <section
          className="light-bg-1 top-bottom-padding-120"
          data-midnight="black"
        >
          <div
            data-animation-container
            className="container small bottom-padding-60 animated"
          >
            <div className="text-center">
              <h2
                data-animation-child
                className="large-title text-color-1 overlay-anim-box2 animated overlay-anim2"
                data-animation="overlay-anim2"
              >
                What sets us apart
              </h2>
            </div>
            <div className="top-margin-30">
              <h3
                data-animation-child
                className="text-color-2 text-height-20 fade-anim-box tr-delay01 animated fade-anim"
                data-animation="fade-anim"
              >
                Expertise
              </h3>

              <p
                data-animation-child
                className="p-style-xsmall text-color-1 fade-anim-box tr-delay04 animated fade-anim"
                style={{ fontSize: "16px", marginTop: "0", lineHeight: "1.9" }}
                data-animation="fade-anim"
              >
                We pride ourselves on being industry experts who stay ahead of
                the curve. Our team is composed of skilled professionals in
                software development, branding and design, business analysis and
                registration and more. With years of hands-on experience, we
                possess the knowledge and creativity to turn your concepts into
                reality.
              </p>
            </div>

            <div className="top-margin-30">
              <h3
                data-animation-child
                className="text-color-2 text-height-20 fade-anim-box tr-delay01 animated fade-anim"
                data-animation="fade-anim"
              >
                Client-Centric Approach
              </h3>

              <p
                data-animation-child
                className="p-style-xsmall text-color-1 fade-anim-box tr-delay04 animated fade-anim"
                style={{ fontSize: "16px", marginTop: "0", lineHeight: "1.9" }}
                data-animation="fade-anim"
              >
                Your success is our top priority. We take the time to understand
                your unique needs, goals and challenges. This client-centric
                approach allows us to tailor our services to meet your specific
                requirements and exceed your expectations.
              </p>
            </div>

            <div className="top-margin-30">
              <h3
                data-animation-child
                className="text-color-2 text-height-20 fade-anim-box tr-delay01 animated fade-anim"
                data-animation="fade-anim"
              >
                Innovation
              </h3>

              <p
                data-animation-child
                className="p-style-xsmall text-color-1 fade-anim-box tr-delay04 animated fade-anim"
                style={{ fontSize: "16px", marginTop: "0", lineHeight: "1.9" }}
                data-animation="fade-anim"
              >
                In a rapidly evolving digital landscape, innovation is key. We
                constantly explore new technologies, trends, and strategies to
                ensure that our clients stay ahead of their competitors.
                Creativity and out-of-the-box thinking are at the core of
                everything we do.
              </p>
            </div>

            <div className="top-margin-30">
              <h3
                data-animation-child
                className="text-color-2 text-height-20 fade-anim-box tr-delay01 animated fade-anim"
                data-animation="fade-anim"
              >
                Collaboration
              </h3>

              <p
                data-animation-child
                className="p-style-xsmall text-color-1 fade-anim-box tr-delay04 animated fade-anim"
                style={{ fontSize: "16px", marginTop: "0", lineHeight: "1.9" }}
                data-animation="fade-anim"
              >
                We believe in the power of collaboration. When you partner with
                Arvotek, you gain a dedicated team of professionals who are
                committed to working closely with you every step of the way. We
                value open communication and transparency, ensuring that you're
                always in the loop.
              </p>
            </div>
          </div>
        </section>

        {/* <Testimonials /> */}
      </main>

      <Footer activePage="About" />
    </>
  );
};

export default About;
