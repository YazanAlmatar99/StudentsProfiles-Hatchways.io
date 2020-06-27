import React, { useState, useEffect } from "react";

const ProfileCard = ({ profile }) => {
  const [averageGrades, setAverageGrades] = useState(0);

  const calcAverage = () => {
    var grades = 0;
    profile.grades.map((grade) => {
      grades = parseInt(grades) + parseInt(grade);
    });
    setAverageGrades(grades / profile.grades.length);
  };
  useEffect(() => {
    calcAverage();
  }, []);
  return (
    <div style={styles.Container}>
      <div style={styles.imageContainer}>
        <img src={profile.pic} style={styles.imageStyle} />
      </div>
      <div>
        <h1 style={{ textTransform: "uppercase" }}>
          {profile.firstName} {profile.lastName}
        </h1>
        <h4 style={styles.desStyle}>Email: {profile.email}</h4>
        <h4 style={styles.desStyle}>Company: {profile.company}</h4>
        <h4 style={styles.desStyle}>Skill: {profile.skill}</h4>
        <h4 style={styles.desStyle}>Average: {averageGrades}%</h4>
      </div>
    </div>
  );
};
let styles = {
  imageStyle: {
    borderRadius: "50%",
    border: "1px solid rgba(0, 0, 0, .2)",
    width: "120px",
    marginRight: "30px",
  },
  Container: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid rgba(0, 0, 0, .15)",
    marginBottom: "30px",
    paddingLeft: "20px",
  },
  desStyle: {
    color: "gray",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
};
export default ProfileCard;
