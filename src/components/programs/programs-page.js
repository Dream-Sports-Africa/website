import React from "react";
import { Link } from "gatsby";
import { Container } from "react-bootstrap";
import PostPaginations from "../post-paginations";

import causeImage1 from "../../assets/images/programs/program-1-1.jpg";
import causeImage2 from "../../assets/images/programs/program-1-2.jpg";
import causeImage3 from "../../assets/images/programs/program-1-3.jpg";
import causeImage4 from "../../assets/images/programs/program-1-4.jpg";
import causeImage5 from "../../assets/images/programs/program-1-5.jpg";
import causeImage6 from "../../assets/images/programs/program-1-6.jpg";
const CAUSES_DATA = [
  {
    image: causeImage1,
    progressCount: 23,
    raised: "25,270",
    goal: "30,000",
    title: "Our donation is hope for poor childrens",
    text: "Lorem Ipsum simply dummy text of printng and type industry.",
    link: "/program-details"
  },
  {
    image: causeImage2,
    progressCount: 65,
    raised: "25,270",
    goal: "30,000",
    title: "Education for Poor Children",
    text: "Lorem Ipsum simply dummy text of printng and type industry.",
    link: "/program-details"
  },
  {
    image: causeImage3,
    progressCount: 55,
    raised: "25,270",
    goal: "30,000",
    title: "Promoting The Rights of Children",
    text: "Lorem Ipsum simply dummy text of printng and type industry.",
    link: "/program-details"
  },
  {
    image: causeImage4,
    progressCount: 23,
    raised: "25,270",
    goal: "30,000",
    title: "Our donation is hope for poor childrens",
    text: "Lorem Ipsum simply dummy text of printng and type industry.",
    link: "/program-details"
  },
  {
    image: causeImage5,
    progressCount: 65,
    raised: "25,270",
    goal: "30,000",
    title: "Education for Poor Children",
    text: "Lorem Ipsum simply dummy text of printng and type industry.",
    link: "/program-details"
  },
  {
    image: causeImage6,
    progressCount: 55,
    raised: "25,270",
    goal: "30,000",
    title: "Promoting The Rights of Children",
    text: "Lorem Ipsum simply dummy text of printng and type industry.",
    link: "/program-details"
  }
];

const ProgramsPage = () => {
  return (
    <section className="programs-page pt-120 pb-120">
      <Container>
        <div className="programs-col__3">
          {CAUSES_DATA.map(
            (
              { image, progressCount, raised, goal, title, text, link },
              index
            ) => (
              <div className="program-card" key={`program-card-key-${index}`}>
                <div className="program-card__inner">
                  <div className="program-card__image">
                    <img src={image} alt="" />
                  </div>
                  <div className="program-card__content">
                    <div className="program-card__top">
                      <div className="program-card__progress">
                        <span
                          style={{ width: `${progressCount}%` }}
                          className="wow cardProgress"
                          data-wow-duration="1500ms"
                        >
                          <b>
                            <i>{progressCount}</i>%
                          </b>
                        </span>
                      </div>
                      <div className="program-card__goals">
                        <p>
                          <strong>Raised:</strong> ${raised}
                        </p>
                        <p>
                          <strong>Goal:</strong> ${goal}
                        </p>
                      </div>
                    </div>
                    <h3>
                      <Link to={link}>{title}</Link>
                    </h3>
                    <p>{text}</p>
                    <div className="program-card__bottom">
                      <Link className="thm-btn " to={link}>
                        Donate Now
                      </Link>
                      <Link className="program-card__share" to="#">
                        <i className="azino-icon-share"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <PostPaginations />
      </Container>
    </section>
  );
};

export default ProgramsPage;
