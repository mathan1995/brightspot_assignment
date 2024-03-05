import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div class="tiles">
      <article class="tile">
        <div class="tile-header">
          <h1>10</h1>
          <h3>
            <span>Completed Tasks</span>
          </h3>
        </div>
      </article>
      <article class="tile">
        <div class="tile-header">
          <h1>4</h1>
          <h3>
            <span>Incompleted Tasks</span>
          </h3>
        </div>
      </article>
      <article class="tile">
        <div class="tile-header">
          <h1>14°C</h1>
          <h3>
            <span>Calgary, CA</span>
          </h3>
        </div>
      </article>
      <article class="tile">
        <div class="tile-header">
          <h1>10</h1>
          <h3>
            <span>Tasks to complete</span>
          </h3>
        </div>
      </article>
    </div>
  );
};

export default Home;
