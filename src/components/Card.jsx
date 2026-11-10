  // const courseName = "React Learning";
  // const classNo = "Class-02: JSX and JS Expression";
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

  //array Destructuring
  // const name = ["dog", "cat"];
  // name =[0];
  // name =[1];

  // const [dog, cat] = name 
  // const dog = name[0];
  // const cat = name [1];



  function Card(props) {
    //props Destructuring
    const {titleText, descText} = props;

    return (
      <div className="card">
        <h3 className="cartdTitle">{titleText}</h3>
        <p className="cardDesc">{descText}</p>
        <p className="cardFooter">{dateName + "/" + monthName + "/" + currentYear}</p>
      </div>
    )
  }

  export default Card;