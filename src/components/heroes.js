import Carousel from "react-bootstrap/Carousel";

var heroData = [
  {
    id: 1,
    image: require("../images/holy-terrorblade.jpg"),
    title: "Dota 2 Wikipedia",
    description: "TEAM NUKEDOTES",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../images/holy-aegis.jpg"),
    title: "Esports News",
    description: "TEAM NUKEDOTES",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../images/holy-dota-heroes.jpg"),
    title: "Esports Team",
    description: "TEAM NUKEDOTES",
    link: "https://www.twitter.com",
  },
];

function Heroes() {
  return (
    <section className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"slide " + hero.id}
              />
              <Carousel.Caption>
                <h2>{hero.title}</h2>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Heroes;
