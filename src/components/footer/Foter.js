import React from "react";
import "./Footer.css";
import footerlogo from "../images/logo.png";

const Foter = () => {
  let data = new Date().getFullYear();
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span>
            <img src={footerlogo} className="f-logo" alt="" /> <b className="bold-heading" style={{color:"#fff"}}>Al-Razzaq Academy</b>
          </span>
        </h3>

        <p className="footer-links">
          <a href="#" className="link-1">
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Courses</a>
          <a href="#">Gallery</a>
          <a href="#">Registration</a>
          <a href="#">Contact</a>
        </p>

        <p className="footer-company-name">Alrazzaq Academy © {data}</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Shah Faisal Colony Karachi, Pakistan </span> Whatsapp : +92 312 2029419
             <br /> CELL: 0312-2029419
          </p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a
              href="mailto:support@company.com"
              style={{ color: "hsl(206deg 87% 38%)" }}
            >
              support@alrazzaq-academy
            </a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the Academy</span>
          We are providing a lot of Cources You can Improve your Education
        </p>

        <div className="footer-icons">
          <a
            href="https://www.facebook.com/alrazzaqscholaracademy/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
            target="_blank"
          >
            <img
              src="https://w7.pngwing.com/pngs/282/704/png-transparent-facebook-messenger-logo-icon-facebook-facebook-logo-blue-text-trademark.png"
              style={{ height: "30px", width: "30px", borderRadius: "6px" }}
              alt=""
            />
          </a>
          <a
            href="https://www.youtube.com/@alrazzaqscholaracademy6544"
            target="_blank"
          >
            <img
              src="https://cdn.emojidex.com/emoji/seal/YouTube.png?1512927079"
              style={{ height: "30px", width: "30px", bordeRadius: "6px" }}
              alt=""
            />
          </a>
          <a
            href="https://www.instagram.com/alrazzaqscholaracademy/?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
              style={{ height: "30px", width: "30px", bordeRadius: "6px" }}
              alt=""
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+923122029419&text=Hi,%20I%20would%20like%20to%20get%20more%20information."
            target="_blank"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUoyBVZfdVxnWCLw8wyqasCmGreYDcES3HJvKl64&s"
              style={{ height: "30px", width: "30px", bordeRadius: "6px" }}
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Foter;
