import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import Cursos from "./pages/cursos/Cursos"
import Pessoas from "./pages/pessoas/Pessoas"
import NotFound from "./pages/404/NotFound"
import { useAuth } from "./AuthContext"
import Usuarios from "./pages/usuarios/Usuarios"
import NovoUsuario from "./pages/usuarios/NovoUsuario"
import EditarUsuario from "./pages/usuarios/EditarUsuario"
import NovaPessoa from "./pages/pessoas/NovaPessoa"
import EditarPessoa from "./pages/pessoas/EditarPessoa"

const Rotas =() => {
    const {userLogged} = useAuth()
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
            
            { !userLogged ? (
                <Route path="*" element={<Login/>}/>
            ) : (
                <>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/cursos" element={<Cursos/>}/>
                    <Route path="/pessoas" element={<Pessoas/>}/>
                    <Route path="/pessoas/novo" element={<NovaPessoa/>}/>
                    <Route path="/pessoas/:id" element={<EditarPessoa/>}/>
                    <Route path="/usuarios" element={<Usuarios/>}/>
                    <Route path="/usuarios/novo" element={<NovoUsuario/>}/>
                    <Route path="/usuarios/:id" element={<EditarUsuario/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </>
            ) }
        </Routes>
    )
}

export default Rotas