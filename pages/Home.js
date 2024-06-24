import Header from "../components/header/Header";

function Home (){
    return(
        <>
          <Header/>
          <main className="section">
            <div className="container">
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Контакты</h2>
                        <p>
                            Telegram/WhatsApp: +7(905)524-89-00
                        </p>
                        <p>
                            Email: onlinekino@mail.com
                        </p>
                    </li>
                </ul>
            </div>
          </main>
        </>
    );
}
export default Home;