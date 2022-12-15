import './App.css';
// import Counter from './Component/Counter';
// import Header from './Component/Header';
// import List from './Component/List';
import ResourceChange from './Component/ResourceChange';

function App() {
   let titles =[  "Abdul Basit", "Usama Ahmed", "Ammar Khan" ]
   let img =[  "abc.jpg", "xyz.jpg" , "bot.jpg" ]
   let location =[  "Karachi", "Lahore" ,"Islamabad" ]
  
  return (
     <div>
        {/* Passing data as a prop from parent to child */}
        {/* <Header/>
        <List title={titles[0]} img={img[0]} location={location[0]}/>
        <Header/> 
        <List title={titles[1]} img={img[1]} location={location[1]}/>
        <Header/>
        <List title={titles[2]} img={img[2]} location={location[2]}/>
         <Counter/> */}
         <ResourceChange/>
        </div>
  );
}

export default App;
