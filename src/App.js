import './App.css';
import {Route, Routes , Link } from "react-router-dom";
import Home from './Pages/Home';
import BookList from './Pages/BookList';
import Book from './Pages/Book';

// import CompA from './Component/CompA';
// import Counter from './Component/Counter';
// import Header from './Component/Header';
// import List from './Component/List';
// import ResourceChange from './Component/ResourceChange';

// function App() {
//    let titles =[  "Abdul Basit", "Usama Ahmed", "Ammar Khan" ]
//    let img =[  "abc.jpg", "xyz.jpg" , "bot.jpg" ]
//    let location =[  "Karachi", "Lahore" ,"Islamabad" ]
  
//   return (
//      <div>
//         Passing data as a prop from parent to child
//         <Header/>
//         <List title={titles[0]} img={img[0]} location={location[0]}/>
//         <Header/> 
//         <List title={titles[1]} img={img[1]} location={location[1]}/>
//         <Header/>
//         <List title={titles[2]} img={img[2]} location={location[2]}/>
//          <Counter/>
//          <ResourceChange/>
//          <CompA value={'Ammar'}/>
//         </div>
//   );
// }
// export default App;

function App() {


   return (
      <>
      <nav>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
         </ul>
      </nav>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/books" element={<BookList/>} />
         <Route path="/books/:id" element={<Book/>} />
      </Routes>

      </>
   );
}

export default App;

