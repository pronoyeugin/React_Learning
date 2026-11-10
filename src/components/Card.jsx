  const courseName = "React Learning";
  const classNo = "Class-02: JSX and JS Expression";
  const date = new Date();
  const dateName = date.getDate();
  const monthName = date.getMonth();
  const currentYear = date.getFullYear();

  // const headingStyle = {
  //     backgroundColor: "purple",
  //     color : "white",
  //     fontSize: "3rem",
  //     textAlign : "Center",
  //     padding: "15px"
  //   }

  function Card() {
    return (
      <div className="card">
        <h3 className="cartdTitle">{courseName}</h3>
        <p className="cardDesc">{classNo}</p>
        <p className="cardFooter">{dateName + "/" + monthName + "/" + currentYear}</p>
      </div>
    )
  }

  export default Card;