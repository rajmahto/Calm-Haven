import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Spiritual.css";

const SpiritualTherapy = () => {

  return (
    <div className="spiritual-therapy-container">
      <nav className="spiritual-therapy-navbar">
        <div className="navbar-brand">
          <Link to="/">Spiritual Therapy</Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/what-is-spiritual-therapy">
              What is Spiritual Therapy?
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/benefits-of-spiritual-therapy">
              Benefits of Spiritual Therapy
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/spiritual-practices">Spiritual Practices</Link>
          </li>
          <li className="nav-item">
            <Link to="/spiritual-healing-modalities">
              Spiritual Healing Modalities
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/spiritual-self-care">Spiritual Self-Care</Link>
          </li>
          <li className="nav-item">
            <Link to="/spiritual-community">Spiritual Community</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </nav>

      <div className="spiritual-therapy-content">
        <section className="spiritual-therapy-section">
          <h2>What is Spiritual Therapy?</h2>
          <div className="what-is-content">
            <div className="what-is-text">
              <p>
                Spiritual therapy is a holistic approach to healing and personal
                growth that focuses on the integration of the mind, body, and
                spirit. It encompasses a wide range of practices and modalities
                that aim to help individuals connect with their inner selves,
                find meaning and purpose, and cultivate a deeper sense of
                well-being.
              </p>
              <p>
                At the core of spiritual therapy is the belief that we are more
                than just physical beings. We are spiritual beings having a
                human experience, and by addressing the spiritual aspect of our
                lives, we can achieve greater balance, clarity, and fulfillment.
              </p>
              <p>
                Spiritual therapy can take many forms, from meditation and
                mindfulness practices to energy healing, transpersonal
                psychology, and sacred rituals. The specific approach used will
                depend on the individual's needs, beliefs, and preferences, as
                well as the practitioner's expertise and training.
              </p>
            </div>
            <div className="what-is-image">
              <img src="spiritual-therapy-intro.jpg" alt="Spiritual Therapy" />
              <p>Connecting mind, body, and spirit</p>
            </div>
          </div>
        </section>

        <section className="spiritual-therapy-section">
          <h2>Benefits of Spiritual Therapy</h2>
          <div className="benefits-content">
            <div className="benefits-card">
              <img src="stress-relief.jpg" alt="Stress Relief" />
              <h3>Stress Relief</h3>
              <p>
                Spiritual therapy can help reduce stress and anxiety by
                promoting relaxation, inner peace, and a greater sense of
                emotional balance.
              </p>
            </div>
            <div className="benefits-card">
              <img src="personal-growth.jpg" alt="Personal Growth" />
              <h3>Personal Growth</h3>
              <p>
                By exploring the spiritual aspects of one's life, individuals
                can gain a deeper understanding of themselves, their values, and
                their purpose.
              </p>
            </div>
            <div className="benefits-card">
              <img src="emotional-healing.jpg" alt="Emotional Healing" />
              <h3>Emotional Healing</h3>
              <p>
                Spiritual therapy can provide a framework for processing and
                releasing emotional pain, trauma, and unresolved issues, leading
                to greater emotional well-being.
              </p>
            </div>
            <div className="benefits-card">
              <img src="spiritual-connection.jpg" alt="Spiritual Connection" />
              <h3>Spiritual Connection</h3>
              <p>
                Spiritual therapy can help individuals deepen their connection
                to something greater than themselves, whether it's a higher
                power, the natural world, or a sense of universal oneness.
              </p>
            </div>
            {/* Add more benefits cards */}
          </div>
        </section>

        <section className="spiritual-therapy-section">
          <h2>Spiritual Practices</h2>
          <div className="practices-content">
            <div className="practices-card">
              <img src="meditation.jpg" alt="Meditation" />
              <h3>Meditation</h3>
              <p>
                Meditation is a foundational practice in spiritual therapy,
                helping to calm the mind, cultivate mindfulness, and deepen
                self-awareness.
              </p>
              <div className="practices-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/inpok4MKVLM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>Guided Meditation for Beginners</p>
              </div>
            </div>
            <div className="practices-card">
              <img src="breathwork.jpg" alt="Breathwork" />
              <h3>Breathwork</h3>
              <p>
                Breathwork techniques, such as pranayama, can help regulate the
                breath and promote a state of deep relaxation and inner focus.
              </p>
              <div className="practices-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Q4qIuQtmVec"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>Guided Breathwork Practice</p>
              </div>
            </div>
            <div className="practices-card">
              <img src="journaling.jpg" alt="Journaling" />
              <h3>Journaling</h3>
              <p>
                Expressive writing and journaling can be a powerful tool for
                self-reflection, emotional processing, and spiritual
                exploration.
              </p>
              <div className="practices-text">
                <p>
                  Journaling can take many forms, from free-flowing stream of
                  consciousness writing to structured prompts that encourage
                  deeper introspection. The act of putting pen to paper can help
                  individuals gain clarity, process emotions, and connect with
                  their inner selves.
                </p>
              </div>
            </div>
            {/* Add more spiritual practices cards */}
          </div>
        </section>

        <section className="spiritual-therapy-section">
          <h2>Spiritual Healing Modalities</h2>
          <div className="healing-modalities-content">
            <div className="healing-modalities-card">
              <img src="reiki.jpg" alt="Reiki" />
              <h3>Reiki</h3>
              <p>
                Reiki is a form of energy healing that promotes relaxation,
                reduces stress, and supports the body's natural healing process.
              </p>
              <a href="/reiki" className="healing-modalities-link">
                Learn More
              </a>
            </div>
            <div className="healing-modalities-card">
              <img src="crystal-healing.jpg" alt="Crystal Healing" />
              <h3>Crystal Healing</h3>
              <p>
                Crystal healing uses the unique energetic properties of crystals
                and gemstones to balance the body's energy and promote
                well-being.
              </p>
              <a href="/crystal-healing" className="healing-modalities-link">
                Learn More
              </a>
            </div>
            <div className="healing-modalities-card">
              <img src="sound-healing.jpg" alt="Sound Healing" />
              <h3>Sound Healing</h3>
              <p>
                Sound healing utilizes the vibrations of various instruments,
                such as singing bowls, gongs, and tuning forks, to induce a
                state of deep relaxation.
              </p>
              <a href="/sound-healing" className="healing-modalities-link">
                Learn More
              </a>
            </div>
            <div className="healing-modalities-card">
              <img src="shamanic-healing.jpg" alt="Shamanic Healing" />
              <h3>Shamanic Healing</h3>
              <p>
                Shamanic healing practices, rooted in ancient indigenous
                traditions, focus on restoring balance and harmony within the
                individual and the broader community.
              </p>
              <a href="/shamanic-healing" className="healing-modalities-link">
                Learn More
              </a>
            </div>
            {/* Add more healing modalities cards */}
          </div>
        </section>

        <section className="spiritual-therapy-section">
          <h2>Spiritual Self-Care</h2>
          <div className="self-care-content">
            <div className="self-care-card">
              <img src="mindfulness.jpg" alt="Mindfulness" />
              <h3>Mindfulness</h3>
              <p>
                Practicing mindfulness, the art of being present and fully
                engaged in the moment, can be a powerful tool for self-care and
                personal growth.
              </p>
              <div className="self-care-text">
                <p>
                  Mindfulness can be cultivated through various practices, such
                  as meditation, breathwork, and conscious awareness of daily
                  activities. By staying grounded in the present moment,
                  individuals can reduce stress, increase emotional regulation,
                  and develop a deeper connection with themselves and the world
                  around them.
                </p>
              </div>
            </div>
            <div className="self-care-card">
              <img src="nature-connection.jpg" alt="Nature Connection" />
              <h3>Nature Connection</h3>
              <p>
                Spending time in nature and connecting with the natural world
                can be a profoundly nourishing and restorative spiritual
                self-care practice.
              </p>
              <div className="self-care-text">
                <p>
                  Whether it's taking a mindful walk in the woods, gardening, or
                  simply observing the beauty of the natural world, this
                  connection can help individuals feel grounded, inspired, and
                  in tune with the rhythms of the earth.
                </p>
              </div>
            </div>
            <div className="self-care-card">
              <img src="ritual-practice.jpg" alt="Ritual Practice" />
              <h3>Ritual Practice</h3>
              <p>
                Engaging in personal or communal rituals can be a powerful way
                to cultivate spiritual self-care and deepen one's connection to
                the sacred.
              </p>
              <div className="self-care-text">
                <p>
                  Rituals can take many forms, from simple daily practices like
                  lighting a candle or setting an intention, to more elaborate
                  ceremonies that honor the cycles of the seasons or significant
                  life events. These rituals can provide a sense of grounding,
                  meaning, and personal empowerment.
                </p>
              </div>
            </div>
            {/* Add more self-care cards */}
          </div>
        </section>

        <section className="spiritual-therapy-section">
          <h2>Spiritual Community</h2>
          <div className="community-content">
            <p>
              Connecting with a supportive spiritual community can be a vital
              aspect of one's healing and personal growth journey. These
              communities can provide a sense of belonging, shared
              understanding, and opportunities for collective exploration and
              practice.
            </p>
            <div className="community-resources">
              <h3>Find a Spiritual Community</h3>
              <ul>
                <li>
                  <a
                    href="https://www.meetup.com/topics/spirituality/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Meetup.com Spirituality Groups
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.spiritualityandpractice.com/community"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spirituality & Practice Community Directory
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.retreatfinder.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Retreat Finder
                  </a>
                </li>
              </ul>
            </div>
            <div className="community-resources">
              <h3>Online Spiritual Communities</h3>
              <ul>
                <li>
                  <a
                    href="https://www.reddit.com/r/spirituality/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    r/Spirituality on Reddit
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/groups/spiritualawakening"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spiritual Awakening Facebook Group
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/explore/tags/spiritualawakening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    #SpiritualAwakening on Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="spiritual-therapy-section">
          <h2>Resources</h2>
          <div className="resources-content">
            <div className="resources-card">
              <img src="books.jpg" alt="Books" />
              <h3>Books</h3>
              <p>
                Explore a curated selection of books that delve into the world
                of spiritual therapy and personal growth.
              </p>
              <a href="/spiritual-therapy-books" className="resources-link">
                View Book Recommendations
              </a>
            </div>
            <div className="resources-card">
              <img src="podcasts.jpg" alt="Podcasts" />
              <h3>Podcasts</h3>
              <p>
                Discover inspiring podcasts that discuss various aspects of
                spiritual therapy and personal development.
              </p>
              <a href="/spiritual-therapy-podcasts" className="resources-link">
                Explore Podcast Recommendations
              </a>
            </div>
            <div className="resources-card">
              <img src="online-courses.jpg" alt="Online Courses" />
              <h3>Online Courses</h3>
              <p>
                Enhance your spiritual journey with a selection of high-quality
                online courses and workshops.
              </p>
              <a href="/spiritual-therapy-courses" className="resources-link">
                Check Out Online Courses
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpiritualTherapy;
