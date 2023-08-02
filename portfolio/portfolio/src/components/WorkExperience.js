import { useState } from "react";
import "../timeline.css";
import { ReactComponent as WorkIcon } from "../images/work.svg";
import { ReactComponent as SchoolIcon } from "../images/school.svg";
import Modal from "./MoreInfo";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

let timelineElements = [
  {
    id: 1,
    title: "Graduate Student",
    // company: "University at Buffalo",
    location: "University at Buffalo - Buffalo, New York",
    description: "Pursuing Masters in Computer Science",
    buttonText: "More Info",
    date: "August 2022 - present",
    icon: "school",
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    // company: "Accenture",
    location: "Accenture - Hyderabad, India",
    description:
      "Analyzed and configured Oracle Demantra solutions, supported the Oracle ASCP application upgrade, and led the Demantra support team. Actively participated in the requirements lifecycle, developed technical components in Demantra, and performed setups and configurations in Oracle E-Business Suite, collaborating with clients and conducting application testing.",
    buttonText: "More Info",
    date: "November 2020 - May 2022",
    icon: "work",
  },
  {
    id: 3,
    title: "Business Technology Analyst",
    // company: "Deloitte Consulting",
    location: "Deloitte - Hyderabad, India",
    description:
      "As the main point of contact for Oracle Demantra and ASCP applications, I led upgrade and support activities. I addressed Demantra-related issues, improved solutions for future business needs, and developed a direct demand input solution for partners, reducing errors and manual efforts. I documented processes, trained my team on Oracle Demantra, and served as a support analyst for Oracle Inventory and Order Management modules.",
    buttonText: "More Info",
    date: "May 2019 - Nov 2020",
    icon: "work",
  },
  {
    id: 4,
    title: "Systems Engineer",
    // company: "Tata Consultancy Services",
    location: "Tata Consultancy Services - Hyderabad, India",
    description:
      "I implemented Oracle Demantra application for 2 clients, focusing on functional components such as Series, Methods, Integration interfaces, Rolling Profiles, and User Management. I also created an Auto member management process, enabling users to generate new item combinations dynamically, which became popular among multiple clients. Additionally, I developed PL/SQL-based automated reports that aided users in their daily tasks.",
    buttonText: "More Info",
    date: "July 2016 - Apr 2019",
    icon: "work",
  },
  {
    id: 5,
    title: "Bachelors of Technology",
    // company: "MGIT",
    location: "MGIT - Hyderabad, India",
    description: "",
    buttonText: "More Info",
    date: "2012 - 2016",
    icon: "school",
  },
];

export default function WorkExperience() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="work-experience" id="work-exp">
      <h1 className="title">Work Experience</h1>
      <VerticalTimeline lineColor={"#ADD8E6"}>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h2 className="vertical-timeline-element-title">
                {element.title}
              </h2>
              <h3 className="vertical-timeline-element-title">
                {element.company}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              {/* <p id="description">{element.description}</p> */}
              {showButton && (
                <button
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  onClick={handleOpenModal}
                >
                  {element.buttonText}
                </button>
              )}

              <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {element.description}
              </Modal>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
