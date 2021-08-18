import Image from "next/image";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaSkype, FaTelegram } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Logo from "../../../images/Logo.svg";
import BTC from "../../../images/Others/Bitcoin.svg";
import Payoneer from "../../../images/Others/Payoneer.svg";
import PayPal from "../../../images/Others/PayPal.svg";
import skrill from "../../../images/Others/Skrill.svg";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={`${styles.main}`}>
      <div className={`container py-3`}>
        <div className={`${styles.bottom} row p-2 p-md-5`}>
          <div className="col-md-4">
            <Image src={Logo} alt="logo" />
            <p className="fs-15 mt-2 text-muted text-center text-md-start">
              Virtual Experts is a real Amazon FBA/Kindle Book & Digital
              Marketer with 7 years of experience, who can help you to improve
              your sales significantly.
            </p>
          </div>
          <div className="col-md-4 px-5">
            <div className="text-center text-md-start">
              <h6 className={`${styles.title} fs-16 mt-5 mt-md-0 fw-bold`}>
                Get in Touch
              </h6>
            </div>
            <p className="mt-3 text-muted fs-14">
              {" "}
              <MdEmail className={`${styles.logo}`} />
              Email: help@gmail.com
            </p>
            <p className=" text-muted fs-14">
              {" "}
              <FaSkype className={`${styles.logo}`} />
              Skype: +014578218
            </p>
            <p className=" text-muted fs-14">
              {" "}
              <IoLogoWhatsapp className={`${styles.logo}`} />
              Email: +014578218
            </p>
          </div>
          <div className="col-md-4 text-center text-md-start mt-4 mt-md-0">
            <h6 className={styles.title}>Let’s Get Social</h6>
            <div className="d-flex align-items-center my-4 justify-content-center justify-content-md-start">
              <FaFacebook className={`${styles.logo} me-3`} />
              <AiFillInstagram className={`${styles.logo} mx-3`} />
              <FaTelegram className={`${styles.logo} mx-3`} />
              <ImTwitter className={`${styles.logo} mx-3`} />
            </div>
            <h6 className={`${styles.title} mt-4 mt-md-0`}>Payment method</h6>
            <div className="d-flex align-items-center mt-2 justify-content-center justify-content-md-start">
              <div className="me-2 my-3">
                <Image src={PayPal} alt="logo" />
              </div>
              <div className="mx-2">
                <Image src={Payoneer} alt="logo" />
              </div>
              <div className="mx-2">
                <Image src={skrill} alt="logo" />
              </div>
              <div className="mx-2">
                <Image src={BTC} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center  text-muted">
        <p className="py-2 fs-14 text-muted">
          © 2021 Virtual Experts. All Right Reserved.
        </p>
      </footer>
    </section>
  );
};

export default Footer;
