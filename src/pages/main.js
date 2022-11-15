import About from "../components/About";
import Contact from "../components/Contact";
import Note from "../components/Note";
import Project from "../components/Projects";
import Skill from "../components/Skill";
import Work from "../components/Work";



function Main(){
     return(
        <main className="main">
              <About></About>
              <Project></Project>
              <Skill></Skill>
              <Work></Work>
              <Note></Note>
              <Contact></Contact>
        </main>
     )
}

export default Main;