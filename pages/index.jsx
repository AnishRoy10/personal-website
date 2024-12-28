import Button from "@/components/Button";
import styles from '../styles/home.module.css';
import Link from "next/link";
import Image from "next/image";

const home = () => {
  return <div className={styles.home}>
    <h1>Hi, I’m Anish Roy</h1>
    {/* <Button path="/about">About</Button> */}
    {/* <main id="about-section">About Me</main> */}

    <h2>About Me</h2>
    <p>Hey, thanks for visiting my website. My name’s Anish and I am currently a student at the 
      University of Toronto studying computer science. I’m still early into my career so I don’t 
      have much to boast about, but I do have a lot that I’m passionate about.
      <br />
      <br />
      Some of the thingss I’m interested in are coding, math, watching hockey 
      (unfortunately I’m a Leafs fan), and video games. When it comes to video games, I especially 
      love platformers and JRPGs with my favourite games being Celeste, Persona and Xenoblade Chronicles
      (if you like these games, feel free to hit me up. I need others to talk to about them). 
      <br />
      <br />
      You can check out my resume or any of my links below. You can also check out my projects page
      to see what I’ve made or my blog page to read about some of the experiences I’ve had in university.
    </p>

    <Button path = "Anish_s_Resume.pdf" newtab = {true}>My Resume</Button>

    <div className={styles.link_container}>
      
      <Link href="https://www.linkedin.com/in/anish-roy-a73336243"
          target="_blank" rel="noopener noreferrer"> 
          <Image
          src="/linkedin_logo.png"
          width={50}
          height={50}
          alt=""
        />
          </Link>
        &emsp;
        <Link href="https://github.com/AnishRoy10"
          target="_blank" rel="noopener noreferrer"> 
          <Image
          src="/github_logo4.png"
          width={50}
          height={50}
          alt=""
        />
          </Link>
          &emsp;
        <Link href="https://www.instagram.com/r0y991/?hl=en"
          target="_blank" rel="noopener noreferrer"> 
          <Image
          src="/insta_logo2.jpg"
          width={50}
          height={50}
          alt=""
        />
          </Link>
      </div>
      

  </div>;
  
};

export default home;
