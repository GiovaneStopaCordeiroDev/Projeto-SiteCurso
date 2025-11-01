import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {auth} from '../../firebaseConnection'
import {Link} from "react-router-dom"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom" 
import './cadastro.css'

 
function Cadastro() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")  
    const [user, setUser] = useState(false)
    const [detail, setDetail] = useState({})
    const navigate = useNavigate()

    async function cadastrarUsuario() {
        await createUserWithEmailAndPassword(auth, email, senha)
        .then((value) => {
            navigate('/')
            setDetail({
                uid: value.user.uid,
                email: value.user.email,
            })
            setUser(true)
            toast.success("Usuario cadastrado")
        })
         .catch((e) => {
            if (e.code === 'auth/weak-password') {
                toast.warn('Sua senha deve ter no mínimo 6 caracteres!');
            } else if (e.code === 'auth/email-already-in-use') {
                toast.warn('Este e-mail já está sendo usado!');
            } else if (e.code === 'auth/invalid-email') {
                toast.warn('Formato de e-mail inválido!');
            } else if (e.code === 'auth/missing-password'){
                toast.warn('Digite uma senha');
            } else {
                toast.warn('Erro ao cadastrar: ' + e.code);
            }
        })
    }
    return (
        <div className="cadastro">
            <div class="container">
                <h1>Cadastro</h1>
                <div class="form">
                    <label>E-mail</label>
                    <input placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Senha</label>
                    <input placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                
                    <button onClick={cadastrarUsuario}>Cadastrar-se</button>

                    <p>Já tem uma conta? Clique <Link className="p-link" to={"/login"}>Aqui</Link> para se logar</p>
            </div>
        </div>    
    )
}

export default Cadastro;