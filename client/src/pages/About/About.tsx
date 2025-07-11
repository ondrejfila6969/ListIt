import React from "react";
import "../../scss/About/About.scss";

export const About: React.FC = () => {
    return (
        <div className="about-wrapper">
            <h2 className="about-title">
                About <span className="about-title-color">List</span>It
            </h2>
            <p className="about-description">
                <strong><span className="about-title-color">List</span>It</strong> is a minimal yet powerful <em>To-Do application</em> designed to help you take control of your tasks with clarity and ease.
                Whether you're managing daily routines, planning future goals, or organizing personal projects, ListIt ensures nothing falls through the cracks.
            </p>
            <p className="about-description">
                The app offers a distraction-free interface and intuitive features focused on <strong>productivity</strong> and <strong>usability</strong>, making it ideal for students, professionals, and anyone looking to boost their efficiency.
            </p>
            <ul className="about-features">
                <li><span>✓</span> Quickly create, edit, and remove tasks</li>
                <li><span>✓</span> Mark tasks as complete and stay on track</li>
                <li><span>✓</span> Clean, responsive, and accessible UI</li>
                <li><span>✓</span> Auto-save functionality using LocalStorage</li>
                <li><span>✓</span> Lightweight, fast, and functional user authorization</li>
            </ul>
            <p className="about-footer">
                Designed with simplicity, speed, and focus in mind, <strong><span className="about-title-color">List</span>It</strong> empowers you to stay organized and productive — wherever you are.
            </p>
            <p className="about-author">
                Created with ❤️ by{" "}
                <a
                    href="https://www.linkedin.com/in/ond%C5%99ej-f%C3%ADla-4043272a5/"
                    className="about-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ondřej Fíla
                </a>
            </p>
        </div>
    );
};