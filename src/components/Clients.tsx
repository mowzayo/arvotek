import chiomaAkpuruLogo from "../assets/chioma-akpuru-logo.png";
import chiomaAkpuruLogoWhite from "../assets/chioma-akpuru-logo-white.png";
import twjLogo from "../assets/twj-logo.png";
import twjLogoWhite from "../assets/twj-logo-white.png";
import nelzLogo from "../assets/nelz-logo.png";
import nelzLogoWhite from "../assets/nelz-logo-white.png";
import michaelsLogo from "../assets/michaels-logo.png";
import michaelsLogoWhite from "../assets/michaels-logo-white.png";
import summervillewhite from "../assets/summervillewhite.png";
import summervillecolorlogo from "../assets/summervillecolorlogo.png";
import earnablerlogo from "../assets/earnabler.png";
import earnablerwhite from "../assets/earnablerwhite.png";


const Clients = () => {
  return (
    <section className="dark-bg-2">
      {/* container start */}
      <div className="container small top-bottom-padding-120">
        {/* medium-title start */}
        <h2 data-animation-container className="medium-title animated">
          <span
            data-animation-child
            className="title-fill animated title-fill-anim"
            data-animation="title-fill-anim"
            data-text="Fine Folks"
          >
            Fine Folks
          </span>
          <br />
          <span
            data-animation-child
            className="title-fill tr-delay01 animated title-fill-anim"
            data-animation="title-fill-anim"
            data-text="We’ve Worked"
          >
            We’ve Worked
          </span>
          <br />
          <span
            data-animation-child
            className="title-fill tr-delay02 animated title-fill-anim"
            data-animation="title-fill-anim"
            data-text="With"
          >
            With
          </span>
        </h2>
        {/* medium-title end */}
        {/* client-list start */}
        <ul className="client-list d-flex-wrap top-padding-60">
          <li>
            <a href="#/" className="pointer-large d-block">
              <div
                className="brand-box"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={twjLogoWhite}
                  alt="TWJ Logo"
                  className="hover-opac-img"
                />
                <img src={twjLogo} alt="TWJ Logo" className="opac-img" />
              </div>
            </a>
          </li>
          <li>
            <a href="#/" className="pointer-large d-block">
              <div
                className="brand-box"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={chiomaAkpuruLogoWhite}
                  alt="Chioma Akpuru Logo"
                  className="hover-opac-img"
                />
                <img
                  src={chiomaAkpuruLogo}
                  alt="Chioma Akpuru Logo"
                  className="opac-img"
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#/" className="pointer-large d-block">
              <div
                className="brand-box"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={nelzLogoWhite}
                  alt="Nelz Management Logo"
                  className="hover-opac-img"
                />
                <img
                  src={nelzLogo}
                  alt="Nelz Management Logo"
                  className="opac-img"
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#/" className="pointer-large d-block">
              <div
                className="brand-box"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={michaelsLogoWhite}
                  alt="Michaels & Associates Logo"
                  className="hover-opac-img"
                />
                <img
                  src={michaelsLogo}
                  alt="Michaels & Associates Logo"
                  className="opac-img"
                />
              </div>
            </a>
          </li>

          <li>
            <a href="#/" className="pointer-large d-block">
              <div className="brand-box"
                 style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                 }}
                 >
                <img
                  src={summervillewhite}
                  alt="Summerville logo"
                  className="hover-opac-img"
                />
                <img
                  src={summervillecolorlogo}
                  alt="Summerville logo"
                  className="opac-img"
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#/" className="pointer-large d-block">
              <div className="brand-box"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
               }}>
                <img
                  src={earnablerwhite}
                  alt="Earnabler logo"
                  className="hover-opac-img"
                />
                <img
                  src={earnablerlogo}
                  alt="Earnabler logo"
                  className="opac-img"
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#/" className="pointer-large d-block">
              <div className="brand-box">
                <img
                  src="assets/images/clients/d383cf8d-abee-4290-810d-a965f6c0fa6c.png"
                  alt="Brand"
                  className="hover-opac-img"
                />
                <img
                  src="assets/images/clients/7f7b6ede-3a3e-4e17-af25-f881c0121d63.png"
                  alt="Brand"
                  className="opac-img"
                />
              </div>
            </a>
          </li>
          <li className="empty-spot-box">
            <a
              data-animation-container
              href="#/"
              className="pointer-large p-style-bold-up empty-spot d-block animated"
            >
              <span
                data-animation-child
                className="title-fill animated title-fill-anim"
                data-animation="title-fill-anim"
                data-text="This spot"
              >
                This spot
              </span>
              <span
                data-animation-child
                className="title-fill tr-delay01 animated title-fill-anim"
                data-animation="title-fill-anim"
                data-text="Awaits"
              >
                Awaits
              </span>
              <span
                data-animation-child
                className="title-fill tr-delay02 animated title-fill-anim"
                data-animation="title-fill-anim"
                data-text="You"
              >
                You
              </span>
            </a>
          </li>
        </ul>
        {/* client-list end */}
      </div>
      {/* container end */}
    </section>
  );
};

export default Clients;
