import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    height: "100px",
  }
}

export default function Footer() {
  return (
    <>
      <footer className="footer text-center col-12" style={styles.footer}>
									<a href="https://github.com/choyle-01" rel="noreferrer" target="_blank"><span className="icon p-2"><FaGithub /></span></a>
									<a href="https://www.linkedin.com/in/michael-hoyle-523143226/" rel="noreferrer" target="_blank"><span className="icon p-2"><FaLinkedin /></span></a>							
									<a href="https://stackoverflow.com/users/17449387/choyle-01" rel="noreferrer" target="_blank" class="icon"><span className="icon p-2"><FaStackOverflow /></span></a>							
      </footer>
    </>
  )
}
