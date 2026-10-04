import {Navbar,Welcome,Dock} from '#components';
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";
import {Finder, Resume, Safari, Terminal} from "#windows";
gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar/>
            <Welcome/>
            <Dock/>

            <Terminal/>
            <Safari/>
            <Resume/>
            <Finder/>
        </main>
    )
}
export default App
