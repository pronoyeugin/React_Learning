import './Style.css'
import Card from './components/Card'
import Data from './data.json'
import List from './components/UniqueList/list'

// const studentName = 'Pronoy Eugin'

const user = [
  {
    fullName : "Pronoy Eugin",
    age:29,
    phones: [
      {
        home: "01786961346"
      },
      {
        office:"01863069927"
      }
      
    ]
  },
  {
    fullName : "Khalko Eugin",
    age:28,
    phones: [
      {
        home: "01786961346"
      },
      {
        office:"01863069927"
      }
      
    ]
  }

]


function App() {
//  let items = [];
  //forloop
  // for(let x=0; x<Data.length; x++ ){
  //   items.push(
  //   // <Card titleText ={Data[x].title} descText={Data[x].desc} />
  // )

  //Data mapping 
  // items = Data.map(
  //   (item) => <Card titleText={item.title} descText={item.desc} />
  //   );



  return (

    //  <>
    //   <List />
    // </>

     // <div>
    //   <h1 className="headingStyle">{studentName}</h1>
    //   //simple data mapping 
    //   {Data.map((item, index) => <Card key={index} titleText={item.title} descText={item.desc} /> )}
    // </div>



    //Nested Mapping
    <div>
      <h1>Nested Lists</h1>
          {user.map((user, index) => 
          <article key={index}>
            <h3>Full Name: {user.fullName}</h3>
            <p>Age: {user.age}</p>

            {
              user.phones.map((phone, index) =>
                <div key={index}>
                    <p> Home: {phone.home}</p>
                    <p>Office: {phone.office}</p>
                </div>
              )
            }

          </article>)
      }
    </div>

  );

   

}

export default App
