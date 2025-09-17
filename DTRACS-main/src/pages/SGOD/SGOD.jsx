import React from "react";
import "./SGOD.css";
import SectionCard from "../../components/SectionCard/SectionCard";
import { sections } from "../../data/sections"; // assuming you have a sections data file
import { useOutletContext, useNavigate } from "react-router-dom"; // 👈 get context from Home

const SGOD = () => {
  const { isExpanded } = useOutletContext();
  const navigate = useNavigate();

  return (
    <div className={`section-container ${isExpanded ? "expanded" : "collapsed"}`}>
      {sections.map((section, index) => (
        <SectionCard
          key={index}
          title={section.title}
          image={section.image}
          onClick={() => section.path && navigate(section.path, { relative: "path" })}
        />
      ))}
    </div>
  );
};


export default SGOD;