export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Jalou Mutia</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front-end Developer</span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
          Responsible for designing and implementing the user interface in website or application. Ensuring a seamless 
            <br />and visually appealing experience for users. Want to know me more?
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
