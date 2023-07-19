import photo from "../images/pic.jpg";

export default function Home() {
  return (
    <div className="home">
      <img className="image" src={photo} alt="Your photo" />
      <div className="home--content">
        <h3>About Me:</h3>
        <p>
          I'm a highly motivated front-end developer with a passion for taking
          on challenges. I'm committed to completing tasks with excellence and
          constantly expanding my skill set. I thrive on creating intuitive user
          experiences and staying up-to-date with the latest web development
          trends. Let's collaborate and bring your ideas to life!
        </p>
      </div>
    </div>
  );
}
