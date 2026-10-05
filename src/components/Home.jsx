import { Draggable } from "gsap/Draggable";

import {locations} from "#constants";
import {useGSAP} from "@gsap/react";
import useLocationStore from "#store/Location.jsx";
import useWindowStore from "#store/Window.jsx";
import clsx from "clsx";

const projects = locations.work?.children ?? [];

const Home = () => {
    const { setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    };

    useGSAP(() => {
        Draggable.create(".folder");
    }, []);

    return (
        <section id="home">
            <ul>
                {projects.map((project) => (
                    <li
                        key={project.id}
                        className={clsx("group folder", project
                            .windowPosition)}
                        onClick={() => handleOpenProjectFinder(project)}
                    >
                        <img src="public/images/folder.png" alt={project.name} />
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Home;
