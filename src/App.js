//import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";

function App() {
  let todos = [{
    s_No: 1,
    title: "Complete ur Homework",
    desc: "You have to finish your homework."},
    {
     s_No: 2,
     title: "Complete ur Project",
     desc: "You have to finish your project."},
     {
      s_No: 3,
      title: "Complete ur Assignment",
      desc: "You have to finish your assignment."}
    
  ]
  return (
   <>
     <Header title="MyTodosList"/>
     <Todos todos={todos}/>
     <Footer/>
   </>
  );
}

export default App;




//searchBar={false} for header props..