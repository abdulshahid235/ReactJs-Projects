import { useState } from "react";

const skillSet = [
  { name: "Web Development", skills: ["React", "JavaScript", "HTML", "CSS"] },
  {
    name: "Oracle SCM - VCP",
    skills: ["Oracle Demantra", "Oracle ASCP", "Oracle EBS"],
  },
  {
    name: "Machine Learning & Deep Learning",
    skills: ["Scikit learn", "Tensorflow", "Pandas", "Numpy"],
  },
  {
    name: "Blockchain",
    skills: ["Solidity Programming", "Smart Contracts Development", "Web 3.0"],
  },
];

export default function SkillSet() {
  return (
    <div className="skillset" id="skills">
      <h1>Skill Set</h1>
      <div className="grid-container">
        {skillSet.map((subSkill, i) => (
          <SubSkill subSkill={subSkill} key={i} num={i + 1} />
        ))}
      </div>
    </div>
  );
}

function SubSkill({ subSkill, num }) {
  const [skillOpen, setSkillOpen] = useState(null);
  function handleClick(num) {
    // setSkillOpen(!skillOpen);
    console.log(num);
    setSkillOpen(skillOpen === num ? null : num);
  }
  return (
    <div className={skillOpen === num ? `skill-set-open` : ""}>
      <div className="skill-header">
        <h3 className="skill-name">{subSkill.name}</h3>
        <h3 className="symbol" onClick={() => handleClick(num)}>
          {skillOpen === num ? "-" : "+"}
        </h3>
      </div>
      {skillOpen === num && (
        <ul style={{ listStyleType: "none" }}>
          {subSkill.skills.map((skill) => (
            <Skill skill={skill} />
          ))}
        </ul>
      )}
    </div>
  );
}

function Skill({ skill }) {
  return <li>{skill}</li>;
}
