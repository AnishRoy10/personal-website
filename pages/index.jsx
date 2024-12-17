import Button from "@/components/Button";
import styles from "@/styles/home.module.css"
import Link from "next/link";
import Image from "next/image";

const home = () => {
  return <div className={styles.home}>
    <h1>Hi, I'm Anish Roy</h1>
    {/* <Button path="/about">About</Button> */}
    {/* <main id="about-section">About Me</main> */}
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
    </div>
    <Button path = "Anish_s_Resume.pdf" newtab = {true}>My Resume</Button>
    <h2>About Me</h2>
    <p>Hey, thanks for visiting my website. I am currently a student at the University of Toronto 
      studying computer science. 
    </p>

  </div>;
  
};

export default home;
