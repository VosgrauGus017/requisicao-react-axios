import { IoIosPeople } from "react-icons/io";
import { FaBook, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../AuthContext";

const Home = () => {
    const {Logoff} = useAuth()
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center my-5">
                    <h1>Bem Vindos!</h1>
                </div>

                <button className="m-5 btn btn-primary" onClick={() => Logoff()}>Logoff</button>

                <div className="col-6 col-md-3 text-center">
                    <Card>
                        <Link to="/pessoas">
                            <IoIosPeople size={80}/>
                            PESSOAS 
                        </Link>
                    </Card>
                </div>
                <div className="col-6 col-md-3 text-center">
                    <Card>
                        <Link to="/cursos">
                            <FaBook size={80}/>
                            CURSOS 
                        </Link>
                    </Card>
                </div>
                <div className="col-6 col-md-3 text-center">
                    <Card>
                        <Link to="/usuarios">
                            <FaUser size={80}/>
                            USUÁRIOS
                        </Link>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Home

export const Card = styled.div`
    background-color: #a020f0;
    color: #fff;
    border-radius: 8px;
    height: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        display: flex;
        flex-direction: column;
        color: #fff;
        text-decoration: none;
    }

    &:hover {
        cursor: pointer;
        background-color: #8b008b;
    }
`