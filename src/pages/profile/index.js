import React from "react";
import "./profile.css";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

const data = {
  name: "mathangan",
};

// TODO: Need to mock all hardcoded data
const Profile = () => {
  return (
    <>
      <div class="profileWrapper">
        <div class="left">
          <img
            src="https://mathangan.com/assets/mypic-5daa610e.jpeg"
            alt="user"
          />
          <h4 className="profilePadge">Mathangan Jeyakantharajah</h4>
          <p className="profilePadge">Frontend Developer</p>
          <span className="profileBio">
            Irure ipsum non sunt sit labore nostrud pariatur duis aliqua tempor
            labore. Nulla id dolor consequat culpa quis in non nulla nisi
            dolore. Quis amet duis pariatur aliqua irure aliquip consequat ut
            aliquip pariatur aliquip irure et incididunt. Irure ipsum non sunt
            sit labore nostrud pariatur duis aliqua tempor labore. Nulla id
            dolor consequat culpa quis in non nulla nisi dolore. Quis amet duis
            pariatur aliqua irure aliquip consequat ut aliquip pariatur aliquip
            irure et incididunt.
          </span>
        </div>
        <div class="right">
          <div class="info">
            <h3>Information</h3>
            <div class="info_data">
              <div class="data">
                <h4>Email</h4>
                <p>mathanganjeya@gmail.com</p>
              </div>
              <div class="data">
                <h4>Phone</h4>
                <p>0001-213-998761</p>
              </div>
            </div>
            <div class="info_data">
              <div class="data">
                <h4>Address</h4>
                <p>Calgary, AB</p>
              </div>
              <div class="data">
                <h4>Age</h4>
                <p>00</p>
              </div>
            </div>
            <div class="info_data">
              <div class="data">
                <h4>Education</h4>
                <p>Software Engineering</p>
              </div>
              <div class="data">
                <h4>Rating</h4>
                <p>4+</p>
              </div>
            </div>
          </div>

          <div class="projects">
            <h3>Projects</h3>
            <div class="projects_data">
              <div class="data">
                <h4>Recent</h4>
                <p>
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
                  ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
                  dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
                  ametLorem ipsum dolor sit amet.
                </p>
              </div>
              <div class="data">
                <h4>Higher Rated</h4>
                <p>
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
                  ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
                  dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
                  ametLorem ipsum dolor sit amet.
                </p>
              </div>
              <div class="data">
                <h4>Most Viewed</h4>
                <p>
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
                  ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
                  dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
                  ametLorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div class="projects_data">
              <div class="data">
                <h4>Factors</h4>
                <p>
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
                  ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
                  dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
                  ametLorem ipsum dolor sit amet.
                </p>
              </div>
              <div class="data">
                <h4>Delivery %</h4>
                <p>
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
                  ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
                  dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
                  ametLorem ipsum dolor sit amet.
                </p>
              </div>
              <div class="data">
                <h4>Accuracy</h4>
                <p>
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
                  ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
                  dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
                  ametLorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          <div class="social_media">
            <ul>
              <li>
                <a href="#">
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
