import Footer from "../components/Footer";
import Header from "../components/Header";
import Typewriter from "typewriter-effect";
import Clients from "../components/Clients";
// import RecentWorks from "../components/RecentWorks";
// import Testimonials from "../components/Testimonials";
import Video from "../components/Video";


const Home = () => {
  return (
    <>
      <Header activePage="Home" />
      <main
        className="animsition-overlay"
        data-animsition-overlay="true"
        style={{ opacity: 1 }}
      >
        <section
          id="up"
          className="page-head flex-min-height-box dark-bg-2 typewriter-home _mPS2id-t mPS2id-target mPS2id-target-first mPS2id-target-last"
        >
          <div className="page-head-bg home-bg" />
          <div className="flex-min-height-inner">
            <div className="container top-bottom-padding-120">
              <h2 className="overlay-loading2 medium-title red-color">
                Welcome to arvotek
              </h2>
              <h3 className="large-title-bold text-color-4">
                <span className="overlay-loading2 overlay-light-bg-1 tr-delay01">
                  We offer
                </span>
                <br />
                <span className="overlay-loading2 overlay-light-bg-1 tr-delay02">
                  creative
                </span>
                <br />
                <Typewriter
                  options={{
                    strings: [
                      "& innovative ideas",
                      "digital solutions",
                      "business ideas",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
              <p className="d-flex-wrap top-margin-20 text-color-4">
                <span className="small-title-oswald text-height-20 fade-loading tr-delay04 top-margin-10">
                  Creative team
                </span>
                <span className="small-title-oswald text-height-20 fade-loading tr-delay05 top-margin-10">
                  Innovative ideas
                </span>
                <span className="small-title-oswald text-height-20 fade-loading tr-delay06 top-margin-10">
                  Best services
                </span>
              </p>
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
          className="dark-bg-1 flex-min-height-box _mPS2id-t mPS2id-target mPS2id-target-first mPS2id-target-last"
        >
          {/* flex-min-height-inner start */}
          <div className="flex-min-height-inner">
            {/* container start */}
            <div className="container small top-bottom-padding-120">
              {/* flex-container start */}
              <div data-animation-container className="flex-container animated">
                {/* column start */}
                <div className="twelve-columns text-center">
                  <h2 className="large-title text-height-12">
                    <span
                      data-animation-child
                      className="title-fill animated title-fill-anim"
                      data-animation="title-fill-anim"
                      data-text="We are Creative"
                    >
                      We are Creative
                    </span>
                    <br />
                    <span
                      data-animation-child
                      className="title-fill tr-delay01 animated title-fill-anim"
                      data-animation="title-fill-anim"
                      data-text="We are Arvotek"
                    >
                      We are Arvotek
                    </span>
                  </h2>
                </div>
                {/* column end */}
                {/* column start */}
                <div className="six-columns">
                  <div className="content-right-margin-20">
                    <p
                      data-animation-child
                      className="p-style-medium text-color-5 fade-anim-box tr-delay02 animated fade-anim"
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
                  </div>
                </div>
                {/* column end */}
                {/* column start */}
                <div className="six-columns">
                  <div className="content-left-margin-20">
                    <p
                      data-animation-child
                      className="p-style-medium text-color-5 fade-anim-box tr-delay03 animated fade-anim"
                      data-animation="fade-anim"
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

        {/* <RecentWorks /> */}
        <Clients />
        {/* <Testimonials /> */}
        <Video />
      </main>
     
      <Footer activePage="Home" />
    </>
  );
};

export default Home;
