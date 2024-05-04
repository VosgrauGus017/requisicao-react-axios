import axios from "axios"
import { useEffect, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { toast } from "react-toastify"

const EditarPessoa = () => {
    const formRef = useRef(null)
    const navigate = useNavigate()
    const params = useParams()

    const updatePerson = async(event) => {
        event.preventDefault()

        const formData = new FormData(formRef.current)

        const nome = formData.get("nome")
        const endereco = formData.get("endereco")
        const telefone = formData.get("telefone")
        const cpf = formData.get("cpf")

        const person = {
            nome: nome,
            endereco: endereco,
            telefone: telefone,
            cpf: cpf
        }
        try {
            const {data} = await axios.put(`https://65ec995e0ddee626c9b0a898.mockapi.io/api/v1/pessoas/${params.id}`, person)

            if(data.id) {
                toast.success("Pessoa alterada com sucesso")
                navigate("/pessoas")
            }
        } catch (error) {
            toast.error("Erro ao atualizar pessoa")
        }
    }

    const getPerson = async (person_id) => {
        try {
            const {data} = await axios.get(`https://65ec995e0ddee626c9b0a898.mockapi.io/api/v1/pessoas/${person_id}`)
            console.log(data);

            if(data) {
                const formData = formRef.current
                formData.elements.nome.value = data.nome
                formData.elements.endereco.value = data.endereco
                formData.elements.telefone.value = data.telefone
                formData.elements.cpf.value = data.cpf
            }

        } catch (error) {
            toast.error("Erro ao buscar pessoa")
            navigate("/pessoas")
        }
    }

    useEffect(() => {
        console.log(params);
        const {id} = params

        if(id) {
            getPerson(id)
        }
    },[])

    return(
        <PersonContainer className="container">
            <div className="row">
                <div className="col-12 text-center mt-5">
                    <h1>Editar Pessoa</h1>
                </div>
                <div className="col">
                    <form ref={formRef} onSubmit={updatePerson}>

                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="nome" name="nome"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="endereco" className="form-label">Endereço</label>
                            <input type="text" className="form-control" id="endereco" name="endereco"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="telefone" className="form-label">Telefone</label>
                            <input type="text" className="form-control" id="telefone" name="telefone"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="cpf" className="form-label">CPF</label>
                            <input type="text" className="form-control" id="cpf" name="cpf"/>
                        </div>

                        <div className="col d-grid col-12 col-md-4">
                            <button className="btn btn-primary">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </PersonContainer>
    )
}

export default EditarPessoa

const PersonContainer = styled.div`
    .btn-primary {
            background-color: #a020f0;
            border: none;
            &:hover {
                background-color: #6f13a8;
            }
        }
`
