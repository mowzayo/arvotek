import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";

const Testimonials = () => {
  return (
    <div className="light-bg-2 top-bottom-padding-120" data-midnight="black">
      {/* testimonials-slider start */}
      <div className="testimonials-slider container small">
        <Swiper
          className="swiper-wrapper"
          speed={1200}
          autoplay={{
            delay: 5000,
          }}
          spaceBetween={30}
          loop
          autoHeight
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <div className="swiper-slide text-center">
              <div className="testimonials-content">
                <p className="text-color-4 p-style-bold">
                  Copper mug vexillologist +1 prism iPhone fashion axe portland.
                  Hella quinoa woke blog af umami tacos freegan vinyl snackwave
                  microdosing. Fanny pack direct trade XOXO drinking vinegar.
                  Live-edge kinfolk master cleanse brooklyn meh organic man
                  braid. Actually humblebrag sriracha authentic chia. IPhone
                  glossier schlitz fam, la croix keytar retro offal. Artisan
                  selfies mlkshk pinterest gastropub knausgaard live-edge.
                </p>
              </div>
              <div className="text-color-1 small-title-oswald">
                Balanchaev Balancha,{" "}
                <span className="text-color-2">Investor</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide text-center">
              <div className="testimonials-content">
                <p className="text-color-4 p-style-bold">
                  Bushwick tumeric slow-carb photo booth letterpress franzen
                  kombucha tumblr listicle cronut waistcoat mustache. Jean
                  shorts tilde swag cray. Microdosing heirloom wayfarers YOLO,
                  church-key tattooed cred blue bottle viral lyft tacos retro.
                  Bespoke drinking vinegar single-origin coffee pop-up, whatever
                  air plant austin hexagon selfies tattooed. Fixie taxidermy
                  forage hot chicken, locavore church-key authentic coloring
                  book.
                </p>
              </div>
              <div className="text-color-1 small-title-oswald">
                Fred Kinney, <span className="text-color-2">Designer</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide text-center">
              <div className="testimonials-content">
                <p className="text-color-4 p-style-bold">
                  Pitchfork vaporware hella, vice next level art party subway
                  tile swag portland. Cliche authentic photo booth, seitan
                  sartorial iPhone brooklyn bicycle rights whatever small batch
                  selvage affogato yuccie adaptogen vinyl. Sartorial franzen
                  tacos cardigan, offal gluten-free pour-over snackwave plaid
                  four dollar toast. Messenger bag keffiyeh church-key, synth
                  iPhone pabst leggings ethical. PBR&amp;B cred hot chicken pork
                  belly.
                </p>
              </div>
              <div className="text-color-1 small-title-oswald">
                Steve Kong, <span className="text-color-2">Web developer</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide text-center">
              <div className="testimonials-content">
                <p className="text-color-4 p-style-bold">
                  Chambray enamel pin synth shabby chic palo santo. Franzen 90's
                  man bun wayfarers, put a bird on it twee four loko roof party
                  shabby chic kale chips photo booth salvia mixtape
                  lumbersexual. Pug kickstarter hammock unicorn, cardigan ennui
                  celiac roof party. Ramps pitchfork direct trade, food truck
                  tacos biodiesel craft beer. Af hammock listicle vape banjo
                  echo park meditation organic cred subway tile. Echo park DIY.
                </p>
              </div>
              <div className="text-color-1 small-title-oswald">
                Balanchaev Balancha,{" "}
                <span className="text-color-2">Investor</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide text-center">
              {/* <img
                    src="assets/images/testimonials/pexels-photo-894156.jpg"
                    alt="author"
                  /> */}
              <div className="testimonials-content">
                <p className="text-color-4 p-style-bold">
                  Pok pok authentic fashion axe, vegan venmo leggings raclette
                  tousled twee tattooed. Banh mi humblebrag hammock tacos
                  fashion axe aesthetic vegan sustainable taiyaki thundercats
                  jean shorts tousled cloud bread waistcoat kogi. Cloud bread
                  cardigan messenger bag raw denim swag drinking vinegar. Yuccie
                  jianbing bespoke retro, photo booth salvia hella meh
                  post-ironic cornhole tacos plaid.
                </p>
              </div>
              <div className="text-color-1 small-title-oswald">
                Fred Kinney, <span className="text-color-2">Designer</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Testimonials;
