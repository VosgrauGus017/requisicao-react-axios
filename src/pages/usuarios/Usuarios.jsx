import axios from "axios"
import { useEffect, useState } from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([])

    const listarUsuarios = async() => {
        try {
            const {data} = await axios.get("https://65ec995e0ddee626c9b0a898.mockapi.io/api/v1/users")
            setUsuarios(data)
        } catch (error) {
            toast.error("Erro ao buscar usuários")
        }
    }

    const deleteUser = async(id) => {
        try {
            const {data} = await axios.delete(`https://65ec995e0ddee626c9b0a898.mockapi.io/api/v1/users/${id}`)

            if(data.id) {
                toast.success("Usuário removido com sucesso")
                const novaLista = usuarios.filter(item => item.id !== id)
                setUsuarios(novaLista)
            } else {
                toast.error("Erro ao excluir usuário")
            }

        } catch (error) {
            toast.error("Erro ao excluir usuário")
        }
    }

    useEffect(() => {
        listarUsuarios()
    }, [])

    return(
        <div className="container">
            <div className="row">
                <div className="col text-center mt-4">
                     <h1>USUÁRIOS</h1>
                </div>

                <div className="col-12">
                    <div>
                        <Link to="/usuarios/novo">
                        <button className="btn btn-outline-primary">Adicionar</button>
                        </Link>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Avatar</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuarios.map(item => (
                                    <tr key={item.id}>
                                        <th>
                                            <img src={item.avatar} alt="" width={40} height={40} />
                                        </th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <Link to={`/usuarios/${item.id}`}>
                                                <button className="btn btn-outline-primary btn-sm"><FaEdit /></button>
                                            </Link>
                                            <button className="btn btn-outline-danger btn-sm ms-2" onClick={() => deleteUser(item.id)}><FaTrash /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Usuarios