import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import {auth} from '../../firebaseConnection'
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom" 
import { toast } from 'react-toastify'

function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [user, setUser] = useState(false)
    const [detail, setDetail] = useState({})
    const navigate = useNavigate()



    async function conectarUsuario() {
        await signInWithEmailAndPassword(auth, email, senha)

        

        .then((value) => {
            navigate('/')
            setDetail({
                uid: value.user.uid,
                email: value.user.email,
            })
            toast.success('Logado com sucesso')
            setUser(true)
        })

        .catch((e) => {
            if (e.code === 'auth/invalid-email') {
                toast.warn('Formato de e-mail inválido!');
            }else if (e.code === 'auth/weak-password') {
                toast.warn('Sua senha deve ter no mínimo 6 caracteres!');
            }else if (e.code === 'auth/invalid-credential'){
                   toast.warn('Email ou Senha inválidos!');
             } else {
            toast.warn('Erro ao cadastrar: ' + e.code);
            }

        })    
                
    }

    return (

        <div className="login">
            <div class="container">
                <h1>Login</h1>
                <div class="form">
                    <label>E-mail</label>
                    <input placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Senha</label>
                    <input placeholder="Digite sua senha"
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                
                    <button onClick={conectarUsuario}>Logar-se</button>

                    <p>Ainda não tem uma conta? Clique <Link className="p-link"to={"/cadastro"}>Aqui</Link> para se registrar</p>
            </div>
        </div>    
    )
}

export default Login;