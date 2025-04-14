import React from "react";
import "../css/scorecard.css";
import teamLogo from "../../assets/Team Logo.svg";
import shareIcon from "../../assets/Share Icon.svg"
import teamImg from "../../assets/rcb.jpg"

const scorecard = () => {
  return (
    <div class="waf-component waf-cricketscorecard widget-layout-01">
      <div class="scorecard-section scores">
        <div class="layout-wrapper">
          <div class="waf-head">
            <div class="head-wrap">
              <h1 class="title-wrap">
                Match 4, Sunrisers Hyderabad vs Rajasthan Royals
              </h1>
              <div class="subtitle">APR 02, 2023 | 7:30 PM IST</div>
            </div>
          </div>

          <div class="waf-body">
            <div class="scorecard-wrapper">
              {/* Match status line */}
              <div class="match-status-wrapper">
                <div class="divider match-status-line"></div>
                <span class="match-status live">Live</span>
              </div>

              {/* Team Scores Section */}
              <div className="teams-score-section">
                {/* Left Team */}
                <div className="team team-left">
                  <img src={teamLogo} alt="Team A" className="team-logo" />
                  <div className="team-content align-left">
                    <div className="score">
                      108/2 <span className="overs">(20)</span>
                    </div>
                    <div className="score-divider" />

                    <div className="mini-score">
                      <div className="mini-line">
                        <span>14/1</span>
                        <span className="overs">(1.0)</span>
                      </div>
                      <div className="score-divider" />

                      <div className="mini-line">
                        <span>15/0</span>
                        <span className="overs">(0.5)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="vs-circle">vs</div>

                {/* Right Team */}
                <div className="team team-right">
                  <div className="team-content align-right">
                    <div className="score">
                      <span className="overs">(20)</span> 108/2
                    </div>
                    <div className="score-divider" />

                    <div className="mini-score">
                      <div className="mini-line">
                        <span className="overs">(1.0)</span>
                        <span>14/1</span>
                      </div>
                      <div className="score-divider" />

                      <div className="mini-line">
                        <span className="overs">(0.5)</span>
                        <span>20/0</span>
                      </div>
                    </div>
                  </div>
                  <img src={teamLogo} alt="Team B" className="team-logo" />
                </div>
              </div>

              {/* Divider below score */}
              <div class="divider"></div>

              {/* Match progress */}

              <div class="match-progress-text">
                Sunrisers Hyderabad needs 30 runs from 11 balls to win
              </div>

              {/* Venue */}

              <div class="venue-text">
                <span class="icon"></span> Rajiv Gandhi International Stadium,
                Hyderabad
              </div>

              {/* Batters and Bowlers cards */}
              <div class="batbowl-cards">
                {/* Batters */}
                <div class="batbowl-section">
                  <div class="label">Batters</div>
                  <div class="card compact">
                    <div class="player-row">
                      <div class="player">
                        <span class="name">A. Markram</span>
                        <span class="score highlight">100* (67)</span>
                      </div>
                      <div class="divider-vertical"></div>
                      <div class="player">
                        <span class="name">R. Tripathi</span>
                        <span class="score highlight">45 (67)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bowlers */}
                <div class="batbowl-section">
                  <div class="label">Bowlers</div>
                  <div class="card compact">
                    <div class="player-row">
                      <div class="player">
                        <span class="name">T. Boult</span>
                        <span class="score highlight">2/17 (3)</span>
                      </div>
                      <div class="divider-vertical"></div>
                      <div class="player">
                        <span class="name">Y. Chahal</span>
                        <span class="score highlight">1/10 (2)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newssection-column">
        <div className="header">
          <p className="latest-updates">Latest Updates</p>
          <a href="#" className="see-more">
            See More
          </a>
        </div>
        <div className="card-column">
          {/* First Big Card */}
          <div className="news-card big-card">
            <div className="new-image">
              <img src={teamImg} alt="Team news" className="news-photo" />
            </div>
            <div className="news-content">
              <div className="main-content">
                <p className="news-text">
                  Rajat Patidar's first IPL 100 to winning ways, after the
                  challenging Chennai Super Kings...
                </p>
              </div>
              <div className="secondary-content">
                <p className="news">News</p>
                <img src={shareIcon} className="share" alt="Share" />
              </div>
            </div>
          </div>

          {/* Second Big Card */}
          <div className="news-card big-card">
            <div className="new-image">
              <img src={teamImg} alt="Team news" className="news-photo" />
            </div>
            <div className="news-content">
              <div className="main-content">
                <p className="news-text">
                  Rajat Patidar's first IPL 100 to winning ways, after the
                  challenging Chennai Super Kings...
                </p>
              </div>
              <div className="secondary-content">
                <p className="news">News</p>
                <img src={shareIcon} className="share" alt="Share" />
              </div>
            </div>
          </div>

          {/* Small Cards */}
          {/* First Small Card */}
          <div className="news-card small-card">
            <div className="new-image">
              <img src={teamImg} alt="Team news" className="news-photo" />
            </div>
            <div className="news-content">
              <div className="main-content">
                <p className="news-text">
                  Rajat Patidar's first IPL to winning ways, after the defeat...
                </p>
              </div>
              <div className="secondary-content">
                <p className="news">News</p>
                <img src={shareIcon} className="share" alt="Share" />
              </div>
            </div>
          </div>

          {/* Second Small Card */}
          <div className="news-card small-card">
            <div className="new-image">
              <img src={teamImg} alt="Team news" className="news-photo" />
            </div>
            <div className="news-content">
              <div className="main-content">
                <p className="news-text">
                  Rajat Patidar's first IPL to winning ways, after the defeat...
                </p>
              </div>
              <div className="secondary-content">
                <p className="news">News</p>
                <img src={shareIcon} className="share" alt="Share" />
              </div>
            </div>
          </div>

          {/* Third Small Card */}
          <div className="news-card small-card">
            <div className="new-image">
              <img src={teamImg} alt="Team news" className="news-photo" />
            </div>
            <div className="news-content">
              <div className="main-content">
                <p className="news-text">
                  Rajat Patidar's first IPL to winning ways, after the defeat...
                </p>
              </div>
              <div className="secondary-content">
                <p className="news">News</p>
                <img src={shareIcon} className="share" alt="Share" />
              </div>
            </div>
          </div>

          {/* Fourth Small Card */}
          <div className="news-card small-card">
            <div className="new-image">
              <img src={teamImg} alt="Team news" className="news-photo" />
            </div>
            <div className="news-content">
              <div className="main-content">
                <p className="news-text">
                  Rajat Patidar's first IPL to winning ways, after the defeat...
                </p>
              </div>
              <div className="secondary-content">
                <p className="news">News</p>
                <img src={shareIcon} className="share" alt="Share" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default scorecard;
