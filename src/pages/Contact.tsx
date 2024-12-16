import { useState, FormEventHandler } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendMessage: FormEventHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post("https://app.arvotek.co/api/message", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      toast.success("Message sent successfully!");
      setLoading(false);
      setFormData((prevState) => ({
        ...prevState,
        name: "",
        email: "",
        phone: "",
        message: "",
      }));
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Header activePage="Contact" />
      <main
        className="animsition-overlay"
        data-animsition-overlay="true"
        style={{ opacity: 1 }}
      >
        <section
          id="up"
          className="page-head flex-min-height-box dark-bg-1 _mPS2id-t mPS2id-target mPS2id-target-first mPS2id-target-last"
        >
          <div
            className="page-head-bg overlay-loading2"
            style={{
              backgroundImage: "url(assets/images/backgrounds/about-3.jpg)",
            }}
          />
          <div className="flex-min-height-inner">
            <div className="container top-bottom-padding-120 flex-container response-999">
              <div className="six-columns six-offset">
                <div className="content-left-margin-40">
                  <h2 className="large-title-bold">
                    <span
                      className="load-title-fill tr-delay03"
                      data-text="The Best"
                    >
                      The Best
                    </span>
                    <br />
                    <span
                      className="load-title-fill tr-delay04"
                      data-text="Agency For"
                    >
                      Agency For
                    </span>
                    <br />
                    <span
                      className="load-title-fill tr-delay05"
                      data-text="Your Businnes"
                    >
                      Your Businnes
                    </span>
                  </h2>
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
        <section id="down" className="dark-bg-1 flex-min-height-box _mPS2id-t">
          <div className="flex-min-height-inner">
            <div className="container top-padding-120 bottom-padding-60">
              <div data-animation-container className="animated">
                <h2 className="large-title text-center">
                  <span
                    data-animation-child
                    className="title-fill animated title-fill-anim"
                    data-animation="title-fill-anim"
                    data-text="Contact us"
                  >
                    Contact us
                  </span>
                </h2>
                <p
                  data-animation-child
                  className="p-style-small text-color-5 fade-anim-box tr-delay03 animated fade-anim"
                  data-animation="fade-anim"
                >
                  At Arvotek, we don't just offer services; we build
                  partnerships and fuel growth. Whether you're a startup with a
                  bold idea or an established business seeking a digital
                  transformation, we're here to help you achieve your goals.
                  Let's embark on this exciting digital journey together.
                  Contact us today to get started and experience the Arvotek
                  difference. Your success is our success, and we can't wait to
                  be a part of your story.
                </p>
              </div>
              <div className="flex-container top-padding-90 contact-box">
                <div className="four-columns bottom-padding-60">
                  <div
                    data-animation-container
                    className="content-right-margin-20 animated"
                  >
                    <p
                      data-animation-child
                      className="small-title-oswald red-color overlay-anim-box2 animated overlay-anim2"
                      data-animation="overlay-anim2"
                    >
                      Email us
                    </p>
                    <p className="title-style text-color-4">
                      <a
                        href="mailto:info@arvotek.co"
                        data-animation-child
                        className="overlay-anim-box2 overlay-light-bg-1 tr-delay01 animated overlay-anim2"
                        data-animation="overlay-anim2"
                      >
                        info@arvotek.co
                      </a>
                    </p>
                  </div>
                </div>

                <div className="four-columns bottom-padding-60">
                  <div
                    data-animation-container
                    className="content-left-margin-20 animated"
                  >
                    <p
                      data-animation-child
                      className="small-title-oswald red-color overlay-anim-box2 animated overlay-anim2"
                      data-animation="overlay-anim2"
                    >
                      Call us
                    </p>
                    <p className="title-style text-color-4">
                      <a
                        href="tel:+2348188838810"
                        data-animation-child
                        className="overlay-anim-box2 overlay-light-bg-1 tr-delay01 animated overlay-anim2"
                        data-animation="overlay-anim2"
                      >
                        +234 818 883 8810
                      </a>
                      <br />
                      <a
                        href="tel:+2347065724526"
                        data-animation-child
                        className="overlay-anim-box2 overlay-light-bg-1 tr-delay02 animated overlay-anim2"
                        data-animation="overlay-anim2"
                      >
                        +234 706 572 4526
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="contact-form-box flex-min-height-box"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/pexels-photo-1287145.jpg)",
          }}
        >
          <div className="bg-overlay" />
          <div className="flex-min-height-inner">
            <div className="contact-form-container">
              <div className="container small top-bottom-padding-120 form-box">
                <h4 className="small-title-oswald text-color-4 text-center">
                  Lets Get In Touch!
                </h4>
                <form
                  className="flex-container top-padding-90"
                  onSubmit={sendMessage}
                  name="formobrsv"
                  id="send_form"
                >
                  <div className="four-columns">
                    <div className="content-right-margin-10 input-box">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="form-input pointer-small"
                        value={formData.name}
                        onChange={(e) => {
                          inputChange(e);
                        }}
                      />
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                    </div>
                  </div>
                  <div className="four-columns">
                    <div className="content-left-right-margin-5 input-box">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="form-input pointer-small"
                        value={formData.email}
                        onChange={(e) => {
                          inputChange(e);
                        }}
                      />
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                    </div>
                  </div>
                  <div className="four-columns">
                    <div className="content-left-margin-10 input-box">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        className="form-input pointer-small"
                        value={formData.phone}
                        onChange={(e) => {
                          inputChange(e);
                        }}
                      />
                      <label htmlFor="phone" className="form-label email-label">
                        Phone number
                      </label>
                    </div>
                  </div>
                  <div className="twelve-columns input-box message-input">
                    <textarea
                      name="message"
                      id="message"
                      required
                      className="form-input pointer-small"
                      value={formData.message}
                      onChange={(e) => {
                        inputChange(e);
                      }}
                    />
                    <label htmlFor="message" className="form-label">
                      Message content
                    </label>
                  </div>
                  <div className="twelve-columns text-center top-padding-90">
                    {loading ? (
                      <button
                        disabled
                        className="border-btn-box pointer-large"
                        type="button"
                      >
                        <span className="border-btn-inner">
                          <span
                            className="border-btn"
                            data-text="submitting..."
                          >
                            submitting...
                          </span>
                        </span>
                      </button>
                    ) : (
                      <button
                        className="border-btn-box pointer-large"
                        type="submit"
                      >
                        <span className="border-btn-inner">
                          <span className="border-btn" data-text="submit">
                            submit
                          </span>
                        </span>
                      </button>
                    )}
                  </div>
                  {/* column end */}
                </form>
                {/* flex-container end */}
              </div>
              {/* container end */}
              {/* alert start */}
              <div className="js-popup-fade" id="m_sent">
                <div className="js-popup text-center">
                  <div className="popup-icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="popup-alert title-style text-color-4">
                    Thank you!
                    <br />
                    Your submission
                    <br />
                    has been received!
                  </div>
                  <div className="flip-btn-box js-popup-close">
                    <div className="flip-btn pointer-large" data-text="Close">
                      Close
                    </div>
                  </div>
                </div>
              </div>
              {/* alert end */}
              {/* alert start */}
              <div className="js-popup-fade" id="m_err">
                <div className="js-popup text-center">
                  <div className="popup-icon">
                    <i className="fas fa-times" />
                  </div>
                  <div className="popup-alert title-style text-color-4">
                    Error
                  </div>
                  <div className="flip-btn-box js-popup-close">
                    <div className="flip-btn pointer-large" data-text="Close">
                      Close
                    </div>
                  </div>
                </div>
              </div>
              {/* alert end */}
            </div>
            {/* contact-form-container end */}
          </div>
          {/* flex-min-height-inner end */}
        </section>
        {/* contact-form-box end */}
      </main>
      <Footer activePage="Contact" />

      <ToastContainer
        autoClose={4000}
        style={{ fontFamily: "inherit" }}
        hideProgressBar
        theme="dark"
      />
    </>
  );
};

export default Contact; 
