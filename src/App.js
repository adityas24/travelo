import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

import searchIcon from "./img/icon-search.svg";
import bestPrices from "./img/bestPrices.svg";
import covidSafe from "./img/covidSafe.svg";
import flexiblePayment from "./img/flexiblePayment.svg";
import nearby from "./img/nearby.svg";
import singapore from "./img/Singapore.png";
import Paris from "./img/Paris.png";
import Thailand from "./img/Thailand.png";
import Bora from "./img/Bora.png";
import NewZealand from "./img/NewZealand.png";
import London from "./img/London.png";
import recomOne from "./img/recom-1.svg";
import recomTwo from "./img/recom-2.svg";
import recomThree from "./img/recom-3.svg";
import iconQuote from "./img/icon-quote.svg";
import person from "./img/person.png";
import LinkedIn from "./img/LinkedIn.svg";
import { useSelector } from "react-redux";

function App() {
  const isToggle = useSelector((state) => state.toggle.isToggle);
  console.log(isToggle);
  return (
    <>
      <Header />
      {!isToggle && (
        <>
          <main>
            <section className="section-hero">
              <div className="container">
                <div className="section-hero-box">
                  <h1>Travel to explore</h1>
                  <p>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                    Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
                    Aliqua.
                  </p>
                  <form className="hero-form">
                    <div className="form-group form-group--1">
                      <label htmlFor="">Where You Want to go</label>
                      <div className="search-input-box">
                        <div className="search-icon-box">
                          <img src={searchIcon} alt="search" />
                        </div>
                        <input type="text" placeholder="Search your Location" />
                      </div>
                    </div>
                    <div className="form-group form-group--2">
                      <label htmlFor="">Check-in</label>
                      <input
                        type="text"
                        placeholder="Add Date"
                        onfocus="(this.type='date')"
                      />
                    </div>
                    <div className="form-group form-group--3">
                      <label htmlFor="">Check-out</label>
                      <input
                        type="text"
                        placeholder="Add Date"
                        onfocus="(this.type='date')"
                      />
                    </div>
                    <button type="submit">Explore Now</button>
                  </form>
                </div>
                <div className="hero-cards-box">
                  <div className="hero-card">
                    <div className="hero-card__img-box">
                      <img src={bestPrices} alt="" className="hero-card__img" />
                    </div>
                    <h5>Get Best Prices</h5>
                    <p>
                      Pay through our application and save thousands and get
                      amazing rewards
                    </p>
                  </div>
                  <div className="hero-card">
                    <div className="hero-card__img-box">
                      <img src={covidSafe} alt="" className="hero-card__img" />
                    </div>
                    <h5>Covid Safe</h5>
                    <p>
                      We have all the curated hotels that have all the
                      precaution for a corvid safe environment
                    </p>
                  </div>{" "}
                  <div className="hero-card">
                    <div className="hero-card__img-box">
                      <img
                        src={flexiblePayment}
                        alt=""
                        className="hero-card__img"
                      />
                    </div>
                    <h5>Flexible Payment</h5>
                    <p>
                      Enjoy the flexible payment through our app and get rewards
                      on every payment
                    </p>
                  </div>{" "}
                  <div className="hero-card">
                    <div className="hero-card__img-box">
                      <img src={nearby} alt="" className="hero-card__img" />
                    </div>
                    <h5>Find The Best Near You</h5>
                    <p>
                      Find the best hotels and places to visit near you in a
                      single click
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="section-recommended">
              <div className="container">
                <div className="recommended-box">
                  <h2>Recommended Destination</h2>
                  <nav>
                    <ul>
                      <li className="recommended-active">
                        <h5>The Weekend Break</h5>
                      </li>
                      <li>
                        <h5>The Package Holiday</h5>
                      </li>
                      <li>
                        <h5>The Group Tour</h5>
                      </li>
                      <li>
                        <h5>Long Term Slow Travel</h5>
                      </li>
                    </ul>
                  </nav>
                  <div className="recommended-cards-box">
                    <div className="recommended-card">
                      <div className="recommended-card__img-box">
                        <img src={singapore} alt="singapore" />
                      </div>
                      <div className="recommended-card__bottom">
                        <h3>Singapore</h3>
                        <p>
                          Singapore, officially the Republic of Singapore, is a
                          sovereign island city-state in maritime Southeast
                          Asia.
                        </p>
                        <div className="recom-icons-box">
                          <div className="icons">
                            <img src={recomOne} alt="" />
                            <img src={recomTwo} alt="" />
                            <img src={recomThree} alt="" />
                          </div>
                          <h6>$ 38,800</h6>
                        </div>
                        <div className="recom-details">
                          <h6>1000 Kms</h6>
                          <h6>Approx 2 night trip</h6>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-card">
                      <div className="recommended-card__img-box">
                        <img src={Thailand} alt="singapore" />
                      </div>
                      <div className="recommended-card__bottom">
                        <h3>Thailand</h3>
                        <p>
                          Singapore, officially the Republic of Singapore, is a
                          sovereign island city-state in maritime Southeast
                          Asia.
                        </p>
                        <div className="recom-icons-box">
                          <div className="icons">
                            <img src={recomOne} alt="" />
                            <img src={recomTwo} alt="" />
                            <img src={recomThree} alt="" />
                          </div>
                          <h6>$ 38,800</h6>
                        </div>
                        <div className="recom-details">
                          <h6>1000 Kms</h6>
                          <h6>Approx 2 night trip</h6>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-card">
                      <div className="recommended-card__img-box">
                        <img src={Paris} alt="singapore" />
                      </div>
                      <div className="recommended-card__bottom">
                        <h3>Paris</h3>
                        <p>
                          Singapore, officially the Republic of Singapore, is a
                          sovereign island city-state in maritime Southeast
                          Asia.
                        </p>
                        <div className="recom-icons-box">
                          <div className="icons">
                            <img src={recomOne} alt="" />
                            <img src={recomTwo} alt="" />
                            <img src={recomThree} alt="" />
                          </div>
                          <h6>$ 38,800</h6>
                        </div>
                        <div className="recom-details">
                          <h6>1000 Kms</h6>
                          <h6>Approx 2 night trip</h6>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="recommended-card">
                      <div className="recommended-card__img-box">
                        <img src={NewZealand} alt="singapore" />
                      </div>
                      <div className="recommended-card__bottom">
                        <h3>NewZealand</h3>
                        <p>
                          Singapore, officially the Republic of Singapore, is a
                          sovereign island city-state in maritime Southeast
                          Asia.
                        </p>
                        <div className="recom-icons-box">
                          <div className="icons">
                            <img src={recomOne} alt="" />
                            <img src={recomTwo} alt="" />
                            <img src={recomThree} alt="" />
                          </div>
                          <h6>$ 38,800</h6>
                        </div>
                        <div className="recom-details">
                          <h6>1000 Kms</h6>
                          <h6>Approx 2 night trip</h6>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="recommended-card">
                      <div className="recommended-card__img-box">
                        <img src={Bora} alt="singapore" />
                      </div>
                      <div className="recommended-card__bottom">
                        <h3>Bora Bora</h3>
                        <p>
                          Singapore, officially the Republic of Singapore, is a
                          sovereign island city-state in maritime Southeast
                          Asia.
                        </p>
                        <div className="recom-icons-box">
                          <div className="icons">
                            <img src={recomOne} alt="" />
                            <img src={recomTwo} alt="" />
                            <img src={recomThree} alt="" />
                          </div>
                          <h6>$ 38,800</h6>
                        </div>
                        <div className="recom-details">
                          <h6>1000 Kms</h6>
                          <h6>Approx 2 night trip</h6>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="recommended-card">
                      <div className="recommended-card__img-box">
                        <img src={London} alt="singapore" />
                      </div>
                      <div className="recommended-card__bottom">
                        <h3>London</h3>
                        <p>
                          Singapore, officially the Republic of Singapore, is a
                          sovereign island city-state in maritime Southeast
                          Asia.
                        </p>
                        <div className="recom-icons-box">
                          <div className="icons">
                            <img src={recomOne} alt="" />
                            <img src={recomTwo} alt="" />
                            <img src={recomThree} alt="" />
                          </div>
                          <h6>$ 38,800</h6>
                        </div>
                        <div className="recom-details">
                          <h6>1000 Kms</h6>
                          <h6>Approx 2 night trip</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section-blogs">
              <div className="container">
                <h2 className="section-heading-medium blogs-main-heading">
                  Blogs
                </h2>
                <div className="blogs-cards">
                  <div className="blogs-cards__left">
                    <p className="blog-card">
                      <span>The Ultimate Guide</span>
                      <br />
                      <span>to Climbing</span>
                      <br />
                      <span> Mount Kilimanjaro</span>
                    </p>
                  </div>
                  <div className="blogs-cards__right">
                    <div className="blog-card blog-card__right-one">
                      12 Things I’d Tell Any New Traveler
                    </div>
                    <div className="blog-card blog-card__right-two">
                      The Ultimate Packing List for Female Travelers
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-customers">
              <div className="container">
                <h2 className="section-heading-medium customers-heading-main">
                  Happy Customers
                </h2>
                <div className="customers-cards">
                  <div className="customer-card">
                    <div className="quote-icon-box">
                      <img src={iconQuote} alt="" />
                    </div>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ultricies mi eget mauris pharetra. Amet
                        risus nullam eget felis eget nunc lobortis. Purus in
                        massa tempor nec. Porta nibh venenatis cras sed.
                      </p>
                      <div className="customer-card__user">
                        <div className="customer-card__user-img-box">
                          <img src={person} alt="" />
                        </div>
                        <div className="customer-card__user-text-box">
                          <h4>Shalini Singh</h4>
                          <h5>Project Manager Flyhigh</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="customer-card">
                    <div className="quote-icon-box">
                      <img src={iconQuote} alt="" />
                    </div>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ultricies mi eget mauris pharetra. Amet
                        risus nullam eget felis eget nunc lobortis. Purus in
                        massa tempor nec. Porta nibh venenatis cras sed.
                      </p>
                      <div className="customer-card__user">
                        <div className="customer-card__user-img-box">
                          <img src={person} alt="" />
                        </div>
                        <div className="customer-card__user-text-box">
                          <h4>Shalini Singh</h4>
                          <h5>Project Manager Flyhigh</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
