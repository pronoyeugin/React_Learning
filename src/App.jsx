import './Style.css'
import Card from './components/Card'
import Data from './data.json'

const studentName = 'Pronoy Eugin'

function App() {
 let items = [];
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
    <div>

      <h1 className="headingStyle">{studentName}</h1>
      //simple data mapping 
      {Data.map((item, index) => <Card key={index} titleText={item.title} descText={item.desc} /> )}

    

    </div>
  )
}

export default App
