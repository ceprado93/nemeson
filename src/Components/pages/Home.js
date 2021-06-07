import Logo from '../../assets/logo.png'
const Home = () => {

    return (
        <section className="home"> 
            <img src={Logo} alt='logo'/>
            <button className="buttonRight">Distribuidor</button>
            <div className="socialMenu">
                <a href="#">Instagram</a>
                <hr/>
                <a href="#">Facebook</a>
                <hr/>
                <a href="#">Linkedin</a>

            </div>
        </section >
    )
}

export default Home