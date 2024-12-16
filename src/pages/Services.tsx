import Footer from "../components/Footer";
import Header from "../components/Header";
import Clients from "../components/Clients";

const Services = () => {
  return (
    <>
      <Header activePage="Services" />
      <main
        className="animsition-overlay"
        data-animsition-overlay="true"
        style={{ opacity: 1 }}
      >
        {/* page-head start */}
        <section
          id="up"
          className="page-head flex-min-height-box dark-bg-2 _mPS2id-t"
        >
          {/* page-head-bg */}
          <div
            className="page-head-bg overlay-loading2 overlayy-3"
            // style={{
            //   backgroundImage: "url(assets/images/backgrounds/services.jpeg)",
            // }}
          />
          {/* flex-min-height-inner start */}
          <div className="flex-min-height-inner">
            {/* flex-container start */}
            <div className="container top-bottom-padding-120 flex-container response-999">
              {/* column start */}
              <div className="six-columns six-offset">
                <div className="content-left-margin-40">
                  <h2 className="large-title-bold">
                    <span
                      className="load-title-fill tr-delay03"
                      data-text="We Offer"
                    >
                      We Offer
                    </span>
                    <br />
                    <span
                      className="load-title-fill tr-delay04"
                      data-text="The Best"
                    >
                      The Best
                    </span>
                    <br />
                    <span
                      className="load-title-fill tr-delay05"
                      data-text="Services"
                    >
                      Services
                    </span>
                  </h2>
                </div>
              </div>
              {/* column end */}
            </div>
            {/* flex-container end */}
          </div>
          {/* flex-min-height-inner end */}
          {/* scroll-btn start */}
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
          {/* scroll-btn end */}
        </section>
        {/* page-head end */}
        {/* section start */}
        <section
          id="down"
          className="dark-bg-1 top-bottom-padding-120 _mPS2id-t"
        >
          {/* container start */}
          <div className="container text-center">
            <h2
              className="large-title title-fill animated title-fill-anim"
              data-animation="title-fill-anim"
              data-text="What We Do"
            >
              What We Do
            </h2>
          </div>
          {/* container end */}
          {/* top-padding-90 start */}
          <div className="top-padding-90">
            {/* container start */}
            <div className="container">
              <div
                className="services-bg"
                style={{
                  backgroundImage:
                    "url(assets/images/services/achievement-brainstorming-branding-1162968.jpg)",
                }}
              />
            </div>
            {/* container end */}
            {/* flex-container start */}
            <div className="container small top-padding-60 flex-container response-999 services-content">
              {/* column start */}
              <div className="four-columns">
                <div
                  data-animation-container
                  className="content-right-margin-20 animated"
                >
                  <h2
                    data-animation-child
                    className="small-title-oswald red-color overlay-anim-box2 animated overlay-anim2"
                    data-animation="overlay-anim2"
                  >
                    Branding &amp; Content Creation
                  </h2>
                  {/*}
                  <h3 className="title-style text-color-4">
                    <span
                      data-animation-child
                      className="overlay-anim-box2 overlay-light-bg-1 tr-delay01 animated overlay-anim2"
                      data-animation="overlay-anim2"
                    >
                      Graphic Designs
                    </span>
                    <br />
                    <span
                      data-animation-child
                      className="overlay-anim-box2 overlay-light-bg-1 tr-delay02 animated overlay-anim2"
                      data-animation="overlay-anim2"
                    >
                      Content Creation
                    </span>
                    <br />
                    <span
                      data-animation-child
                      className="overlay-anim-box2 overlay-light-bg-1 tr-delay03 animated overlay-anim2"
                      data-animation="overlay-anim2"
                    >
                      
                    </span>
                  </h3>
                   `*/}

                  <ul className="list-dots">
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay04 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                        Digital Marketing
                      </p>
                    </li>
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay05 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                       >
                        Creative Design
                      </p>
                    </li>
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay06 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                        Analytics &amp; Marketing
                      </p>
                    </li>
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay07 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                        Digital Branding
                      </p>
                    </li>
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay08 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                        Reports &amp; Analytics
                      </p>
                    </li>
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay09 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                        Infographics Content
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* column end */}
              {/* column start */}
              <div className="eight-columns" style={{ width: "100%" }}>
                <div className="content-left-margin-20">
                  <p
                    className="p-style-large text-color-5 fade-anim-box tr-delay04 animated fade-anim"
                    data-animation="fade-anim"
                    style={{ width: "100%",
                      maxWidth: "1500px"
                     }}
                  >
           At Arvotek, we believe that effective branding goes beyond logos and slogans—it’s about crafting a lasting identity that resonates with your audience. Our Branding and Content Creation services are designed to tell your brand's story, highlight its values, and build a connection with your target market.

Our Approach to Branding Our branding process is all about discovering what makes your business unique and translating it into a compelling visual and emotional experience. We collaborate with you to design logos, define color schemes, select typography, and create visual elements that align with your brand's personality. Whether you’re a startup looking to make a bold statement or an established business ready for a fresh identity, our team will ensure your brand stands out in today’s crowded market.

Content Creation that Captivates Content is the voice of your brand. We specialize in creating content that captures attention, informs, and inspires action. From eye-catching graphics to engaging blog posts and social media content, our team will develop material that resonates with your audience across all channels. By understanding your target market and their needs, we ensure that every piece of content serves a purpose—whether it’s driving engagement, educating customers, or building brand loyalty.
                  </p>
                </div>
              </div>
              {/* column end */}
            </div>
            {/* flex-container end */}
          </div>
          {/* top-padding-90 end */}
          {/* top-padding-90 start */}
          <div className="top-padding-90">
            {/* container start */}
            <div className="container">
              <div
                className="services-bg"
                style={{
                  backgroundImage:
                    "url(assets/images/services/apple-books-computers-115655.jpg)",
                }}
              />
            </div>
            {/* container end */}
            {/* flex-container start */}
            <div className="container small top-padding-60 flex-container response-999 services-content">
              {/* column start */}
              <div className="four-columns">
                <div
                  data-animation-container
                  className="content-right-margin-20 animated"
                >
                  <h2
                    data-animation-child
                    className="small-title-oswald red-color overlay-anim-box2 animated overlay-anim2"
                    data-animation="overlay-anim2"
                  >
                    Web &amp; Mobile Application Development
                  </h2>
                  {/*}
                  <h3 className="title-style text-color-4">
                    <span
                      data-animation-child
                      className="overlay-anim-box2 overlay-light-bg-1 tr-delay01 animated overlay-anim2"
                      data-animation="overlay-anim2"
                    >
                      Focus on Performance and Security

                    </span>
                    <br />
                    <span
                      data-animation-child
                      className="overlay-anim-box2 overlay-light-bg-1 tr-delay02 animated overlay-anim2"
                      data-animation="overlay-anim2"
                    >
                      fanny pack
                    </span>
                    <br />
                    <span
                      data-animation-child
                      className="overlay-anim-box2 overlay-light-bg-1 tr-delay03 animated overlay-anim2"
                      data-animation="overlay-anim2"
                    >
                      meditation PBR&amp;B
                    </span>
                  </h3>
                  */}
                  <ul className="list-dots">
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay04 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                      Emphasis on User-Centered <br />Design
                      </p>
                    </li>
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay05 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                      Optimized for Speed and SEO
                      </p>
                    </li>
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay06 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                     Integrated Analytics and Insights
                      </p>
                    </li>
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay07 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                      Seamless Integration with Your Existing Systems
                      </p>
                    </li>
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay08 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                  Scalable Solutions for Growing Businesses
                      </p>
                    </li>
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay09 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                        Media Promotion
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* column end */}
              {/* column start */}
              <div className="eight-columns">
                <div className="content-left-margin-20">
                  <p
                    className="p-style-large text-color-5 fade-anim-box tr-delay04 animated fade-anim"
                    data-animation="fade-anim"
                  >
                    
We take a comprehensive approach to web development, ensuring each site we build is visually engaging, highly functional, and aligned with your brand identity. From responsive design to intuitive navigation, our team crafts websites that look great and perform excellently across devices. Whether you’re launching a new site or upgrading an existing one, we’ll make sure your web presence leaves a lasting impression on your audience.


In addition to websites, we create mobile and desktop applications that streamline business processes and enhance user experiences. By understanding your specific goals, we develop applications that are both powerful and easy to use. From customer-facing apps that boost engagement to enterprise-level tools that improve efficiency, our solutions are designed to meet your unique needs.
                  </p>
                </div>
              </div>
              {/* column end */}
            </div>
            {/* flex-container end */}
          </div>
          {/* top-padding-90 end */}
          {/* top-padding-90 start */}
          <div className="top-padding-90">
            {/* container start */}
            <div className="container">
              <div
                className="services-bg"
                style={{
                  backgroundImage:
                  "url(assets/images/services/business-data-analytics.png)",
                }}
              />
            </div>
            {/* container end */}
            {/* flex-container start */}
            <div className="container small top-padding-60 flex-container response-999 services-content">
              {/* column start */}
              <div className="four-columns">
                <div
                  data-animation-container
                  className="content-right-margin-20 animated"
                >
                  <h2
                    data-animation-child
                    className="small-title-oswald red-color overlay-anim-box2 animated overlay-anim2"
                    data-animation="overlay-anim2"
                  >
                    Data &amp; Business Analysis
                  </h2>
                  {/*}
                  <h3 className="title-style text-color-4">
                    <span
                      data-animation-child
                      className="overlay-anim-box2 overlay-light-bg-1 tr-delay01 animated overlay-anim2"
                      data-animation="overlay-anim2"
                    >
                      v pug ethical
                    </span>
                    <br />
                    <span
                      data-animation-child
                      className="overlay-anim-box2 overlay-light-bg-1 tr-delay02 animated overlay-anim2"
                      data-animation="overlay-anim2"
                    >
                      XOXO umami godar
                    </span>
                    <br />
                    <span
                      data-animation-child
                      className="overlay-anim-box2 overlay-light-bg-1 tr-delay03 animated overlay-anim2"
                      data-animation="overlay-anim2"
                    >
                      Cold-pressed blue
                    </span>
                  </h3>
                  */}
                  <ul className="list-dots">
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay04 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                        In-Depth Data Collection and Requirement Gathering
                      </p>
                    </li>
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay05 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                   Market and Competitive Analysis
                      </p>
                    </li>
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay06 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                    Process Improvement through Data Insights
                      </p>
                    </li>
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay07 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                      Risk Assessment, Mitigation, and Predictive Analytics
                      </p>
                    </li>
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay08 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                        Solution Design and Data Validation:
                      </p>
                    </li>
                    <li>
                      <p
                        data-animation-child
                        className="p-letter-style text-color-4 fade-anim-box tr-delay09 animated fade-anim"
                        data-animation="fade-anim"
                        style={{ lineHeight: "1.6", padding: "0.5rem 0" }}
                      >
                    Impact Measurement and Reporting
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* column end */}
              {/* column start */}
              <div className="eight-columns">
                <div className="content-left-margin-20">
                  <p
                    className="p-style-large text-color-5 fade-anim-box tr-delay04 animated fade-anim"
                    data-animation="fade-anim"
                  >
                   Data Analytics and Business Analysis combine to form a powerful strategy for understanding business performance, enhancing operations, and enabling data-driven decision-making. Together, they provide a comprehensive approach to evaluating and optimizing business processes, tracking key performance metrics, and identifying actionable insights for growth.
                  </p>
                </div>
              </div>
              {/* column end */}
            </div>
            {/* flex-container end */}
          </div>
          {/* top-padding-90 end */}
        </section>
        {/* section end */}
        {/* progress-container start */}
        <section className="dark-bg-1 flex-min-height-box progress-container">
          {/* flex-min-height-inner start */}
          <div className="flex-min-height-inner">
            {/* flex-container start */}
            <div className="flex-container container top-bottom-padding-120">
              {/* column start */}
              <div className="six-columns bottom-padding-60">
                <div
                  className="progress-bg overlay-anim-box2 animated overlay-anim2"
                  data-animation="overlay-anim2"
                  style={{
                    backgroundImage:
                      "url(assets/images/services/american-casual-cellphone-1262971.jpg)",
                  }}
                />
              </div>
              {/* column end */}
              {/* column start */}
              <div className="six-columns">
                <div className="content-left-margin-40">
                  {/* medium-title start */}
                  <h2
                    data-animation-container
                    className="medium-title text-center animated"
                  >
                    <span
                      data-animation-child
                      className="title-fill animated title-fill-anim"
                      data-animation="title-fill-anim"
                      data-text="Our skills"
                    >
                      Our skills
                    </span>
                  </h2>
                  {/* medium-title end */}
                  <div
                    className="top-margin-30 animated"
                    data-animation-container
                  >
                    {/* progress-box start */}
                    <div className="progress-box">
                      <div
                        data-animation-child
                        className="p-letter-style title-fill animated title-fill-anim"
                        data-animation="title-fill-anim"
                        data-text="Graphic Design"
                      >
                        Graphic Design
                      </div>
                      <div
                        data-animation-child
                        className="p-letter-style title-fill tr-delay02 progress-counter animated title-fill-anim"
                        data-animation="title-fill-anim"
                        data-text="93%"
                      >
                        93%
                      </div>
                      <div className="progress-zero" data-progress="93%">
                        <div
                          className="progress-full animated slide-progress"
                          data-animation-child
                          data-animation="slide-progress"
                          style={{ width: "93%" }}
                        />
                        <div
                          className="progress-full progress-full-red animated slide-progress"
                          data-animation-child
                          data-animation="slide-progress"
                          data-animation-delay="200ms"
                          style={{ animationDelay: "200ms", width: "93%" }}
                        />
                      </div>
                    </div>
                    {/* progress-box end */}
                    {/* progress-box start */}
                    <div className="progress-box">
                      <div
                        data-animation-child
                        className="p-letter-style title-fill tr-delay01 animated title-fill-anim"
                        data-animation="title-fill-anim"
                        data-text="Product Branding"
                      >
                        Product Branding
                      </div>
                      <div
                        data-animation-child
                        className="p-letter-style title-fill tr-delay03 progress-counter animated title-fill-anim"
                        data-animation="title-fill-anim"
                        data-text="90%"
                      >
                        90%
                      </div>
                      <div className="progress-zero" data-progress="90%">
                        <div
                          className="progress-full animated slide-progress"
                          data-animation-child
                          data-animation="slide-progress"
                          data-animation-delay="100ms"
                          style={{ animationDelay: "100ms", width: "90%" }}
                        />
                        <div
                          className="progress-full progress-full-red animated slide-progress"
                          data-animation-child
                          data-animation="slide-progress"
                          data-animation-delay="300ms"
                          style={{ animationDelay: "300ms", width: "90%" }}
                        />
                      </div>
                    </div>
                    {/* progress-box end */}
                    {/* progress-box start */}
                    <div className="progress-box">
                      <div
                        data-animation-child
                        className="p-letter-style title-fill tr-delay02 animated title-fill-anim"
                        data-animation="title-fill-anim"
                        data-text="Business Planing"
                      >
                        Business Planing
                      </div>
                      <div
                        data-animation-child
                        className="p-letter-style title-fill tr-delay04 progress-counter animated title-fill-anim"
                        data-animation="title-fill-anim"
                        data-text="100%"
                      >
                        100%
                      </div>
                      <div className="progress-zero" data-progress="100%">
                        <div
                          className="progress-full animated slide-progress"
                          data-animation-child
                          data-animation="slide-progress"
                          data-animation-delay="200ms"
                          style={{ animationDelay: "200ms", width: "100%" }}
                        />
                        <div
                          className="progress-full progress-full-red animated slide-progress"
                          data-animation-child
                          data-animation="slide-progress"
                          data-animation-delay="400ms"
                          style={{ animationDelay: "400ms", width: "100%" }}
                        />
                      </div>
                    </div>
                    {/* progress-box end */}
                    {/* progress-box start */}
                    <div className="progress-box">
                      <div
                        data-animation-child
                        className="p-letter-style title-fill tr-delay03 animated title-fill-anim"
                        data-animation="title-fill-anim"
                        data-text="Web/App Development"
                      >
                        Web/App Development
                      </div>
                      <div
                        data-animation-child
                        className="p-letter-style title-fill tr-delay05 progress-counter animated title-fill-anim"
                        data-animation="title-fill-anim"
                        data-text="93%"
                      >
                        93%
                      </div>
                      <div className="progress-zero" data-progress="93%">
                        <div
                          className="progress-full animated slide-progress"
                          data-animation-child
                          data-animation="slide-progress"
                          data-animation-delay="300ms"
                          style={{ animationDelay: "300ms", width: "93%" }}
                        />
                        <div
                          className="progress-full progress-full-red animated slide-progress"
                          data-animation-child
                          data-animation="slide-progress"
                          data-animation-delay="500ms"
                          style={{ animationDelay: "500ms", width: "93%" }}
                        />
                      </div>
                    </div>
                    {/* progress-box end */}
                    {/* progress-box start */}
                    <div className="progress-box">
                      <div
                        data-animation-child
                        className="p-letter-style title-fill tr-delay04 animated title-fill-anim"
                        data-animation="title-fill-anim"
                        data-text="Market Research"
                      >
                        Market Research
                      </div>
                      <div
                        data-animation-child
                        className="p-letter-style title-fill tr-delay06 progress-counter animated title-fill-anim"
                        data-animation="title-fill-anim"
                        data-text="85%"
                      >
                        85%
                      </div>
                      <div className="progress-zero" data-progress="85%">
                        <div
                          className="progress-full animated slide-progress"
                          data-animation-child
                          data-animation="slide-progress"
                          data-animation-delay="400ms"
                          style={{ animationDelay: "400ms", width: "85%" }}
                        />
                        <div
                          className="progress-full progress-full-red animated slide-progress"
                          data-animation-child
                          data-animation="slide-progress"
                          data-animation-delay="600ms"
                          style={{ animationDelay: "600ms", width: "85%" }}
                        />
                      </div>
                    </div>
                    {/* progress-box end */}
                    {/* progress-box start */}
                    <div className="progress-box">
                      <div
                        data-animation-child
                        className="p-letter-style title-fill tr-delay05 animated title-fill-anim"
                        data-animation="title-fill-anim"
                        data-text="Strategic Consulting"
                      >
                        Strategic Consulting
                      </div>
                      <div
                        data-animation-child
                        className="p-letter-style title-fill tr-delay07 progress-counter animated title-fill-anim"
                        data-animation="title-fill-anim"
                        data-text="87%"
                      >
                        87%
                      </div>
                      <div className="progress-zero" data-progress="87%">
                        <div
                          className="progress-full animated slide-progress"
                          data-animation-child
                          data-animation="slide-progress"
                          data-animation-delay="500ms"
                          style={{ animationDelay: "500ms", width: "87%" }}
                        />
                        <div
                          className="progress-full progress-full-red animated slide-progress"
                          data-animation-child
                          data-animation="slide-progress"
                          data-animation-delay="700ms"
                          style={{ animationDelay: "700ms", width: "87%" }}
                        />
                      </div>
                    </div>
                    {/* progress-box end */}
                  </div>
                </div>
              </div>
              {/* column end */}
            </div>
            {/* flex-container end */}
          </div>
          {/* flex-min-height-inner end */}
        </section>
        {/* progress-container end */}

        <Clients />
      </main>

      <Footer activePage="Services" />
    </>
  );
};

export default Services;
