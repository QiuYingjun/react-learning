import styles from "../styles/Home.module.css";
import Head from "next/head";
const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          suscipit libero? Aliquid corporis deserunt qui, consequatur molestiae
          dolorem quas esse, exercitationem, praesentium dolorum dignissimos
          sunt illo corrupti ipsa a enim?
        </p>
      </div>
    </>
  );
};

export default About;
