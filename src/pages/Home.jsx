import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="container">
                    <Sidebar />
                    <Chat/>
                </div>

            </div>
        </div>
    )
}

export default Home
