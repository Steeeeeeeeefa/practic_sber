import project01 from "./../img/projects/хатико.JPG";
import project02 from "./../img/projects/дюна.JPG";
import project03 from "./../img/projects/книга.JPG";
import project04 from "./../img/projects/гамп.JPG";
import project05 from "./../img/projects/интерстеллар.JPG";
import project06 from "./../img/projects/1+1.JPG";


function Projects () {
    return(
        <main className="section">
        <div className="container">
            <h2 className="title-1">Фильмы</h2>
            <ul className="projects">
                <li className="project">
                    <a href="#!">
                        <img src={project01} alt="Project img" className="project__img"/>
                        <h3 className="project__title">Мой Хатико</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="#!">
                        <img src={project02} alt="Project img" className="project__img"/>
                        <h3 className="project__title">Дюна: Часть вторая</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="#!">
                        <img src={project03} alt="Project img" className="project__img"/>
                        <h3 className="project__title">Зеленая книга</h3>
                    </a>
                </li>

                <li className="project">
                    <a href="#!">
                        <img src={project04} alt="Project img" className="project__img"/>
                        <h3 className="project__title">Форрест Гамп</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="#!">
                        <img src={project05} alt="Project img" className="project__img"/>
                        <h3 className="project__title">Интерстеллар</h3>
                        </a>
                </li>
                <li className="project">
                    <a href="#!">
                        <img src={project06} alt="Project img" className="project__img"/>
                        <h3 className="project__title">1+1</h3>
                    </a>    
                </li>
            </ul>
        </div>
    </main>
    );
}
export default Projects;