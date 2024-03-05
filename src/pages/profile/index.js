import React from "react";
import "./profile.css";
const Profile = () => {
  return (
    <div class="container-main">
      <div class="profile-card">
        <div class="profile-header">
          <div class="main-profile">
            <div class="profile-image"></div>
            <div class="profile-names">
              <h1 class="username">Brightspot</h1>
              <small class="page-title">Front-End developer</small>
            </div>
          </div>
        </div>

        <div class="profile-body">
          <div class="profile-actions">
            <button class="follow">Follow</button>
            <section class="bio">
              <div class="bio-header">
                <i class="fa fa-info-circle"></i>
                Bio
              </div>
              <p class="bio-text">Welcome to Brightspot</p>
            </section>
          </div>

          <div class="account-info">
            <div class="data">
              <div class="important-data">
                <section class="data-item">
                  <h3 class="value">104</h3>
                  <small class="title">Projects</small>
                </section>
                <section class="data-item">
                  <h3 class="value">21K</h3>
                  <small class="title">Clients</small>
                </section>

                <section class="data-item">
                  <h3 class="value">51</h3>
                  <small class="title">Pending</small>
                </section>
              </div>
              <div class="other-data">
                <p>
                  Pioneering Multimodal Generative AI At Brightspot, we are at
                  the forefront of innovation, weaving together the realms of
                  technology and artificial intelligence to redefine how humans
                  interact with technology We specialize in crafting
                  state-of-the-art Multimodal Generative AI systems that
                  seamlessly integrate images, videos, audio, and textual
                  prompts. Our groundbreaking technology reshapes the landscape
                  of content creation, conversion, and interaction. Our Vision:
                  At Brightspot, we envision a future where AI not only
                  understands but also creates with a touch of human-like
                  creativity. Join us in pushing the boundaries, and exploring
                  the untapped potential of artificial intelligence.
                </p>
              </div>
            </div>

            <div class="last-post">
              <div class="post-cover">
                <span class="last-badge">Last Post</span>
              </div>
              <h3 class="post-title">3D layer</h3>
              <p className="post-desc">
                Our groundbreaking technology reshapes the landscape of content
                creation, conversion, and interaction. Our Vision: At Brightspot
                Our groundbreaking technology reshapes the landscape of content
                creation, conversion, and interaction. Our Vision: At Brightspot
                Our groundbreaking technology reshapes the
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
