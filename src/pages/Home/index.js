import './home.css'
import HTMLIcon from './img-projetotal/html.png'
import CSSIcon from './img-projetotal/css.png'
import JSIcon from './img-projetotal/javascript.png'
import ReactIcon from './img-projetotal/ReactJS.png'
import { FaGraduationCap, FaCertificate, FaComments } from "react-icons/fa";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebaseConnection'
import { useState, useEffect } from 'react'
import Header from '../../components/Header';

function Home() {

    const [user, setUser] = useState(null)

    useEffect(() => {

        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        })

        return unsub
    }, [])

    return (
        <div>
            <Header/>

            <div className="video-background">
                <video
                    id="bg-video"
                    className="bg-video"
                    muted
                    autoPlay
                    loop
                    playsInline
                    >
                    <source src={require('../../assets/background-heroo.mp4')} type="video/mp4" />
                </video>
            </div>
            
            <div className='hero'>
                
                <h1>Aprenda Programação do Zero!🚀</h1>
                <h2>Curso completo para iniciantes, com projetos práticos e certificado</h2>
                <h2>Seja bem-vindo! {user?.email}</h2>
            </div>

                
            <div className='sessao-beneficios' id='beneficios'>
                <h2 className='title-beneficios'>Benefícios</h2>
                <div className='conteudo-beneficios'>
                    <div className='beneficios'>
                        <FaGraduationCap size={40} color="#3a98c4ff" />
                        <h3>Aprenda do Zero!</h3>
                        <p>Exercícios e projetos reais para fixar o aprendizado.</p>
                    </div>

                    <div className='beneficios'>
                        <FaCertificate size={40} color="#3a98c4ff" />
                        <h3>Certificado!</h3>
                        <p>Receba certificado ao concluir o curso.</p>
                    </div>

                    <div className='beneficios'>
                        <FaComments size={40} color="#3a98c4ff" />
                        <h3>Suporte Online!</h3>
                        <p>Fale com instrutores e outros alunos a qualquer hora.</p>
                    </div>
                </div>
            </div>

            <div className='sessao-conteudoscurso' id='conteudos'>
                <h2 className='title-curso'>Conteúdos do Curso</h2>
                <div className='conteudo-curso'>
                    <div className='conteudo conteudo-html'>
                        <img src={HTMLIcon} alt='HTML' width='130' />
                        <h3>HTML</h3>
                        <p>HTML é a linguagem de marcação usada para estruturar o conteúdo das páginas web.</p>
                    </div>

                    <div className='conteudo conteudo-css'>
                        <img src={CSSIcon} alt='CSS' width='130' />
                        <h3>CSS</h3>
                        <p>CSS controla cores, fontes, layout e responsividade.</p>
                    </div>

                    <div className='conteudo conteudo-javascript'>
                        <img src={JSIcon} alt='JavaScript' width='130' />
                        <h3>JavaScript</h3>
                        <p>Adiciona interatividade e lógica nas páginas web.</p>
                    </div>

                    <div className='conteudo conteudo-reactjs'>
                        <img src={ReactIcon} alt='ReactJS' width='130' />
                        <h3>ReactJS</h3>
                        <p>Biblioteca para criar interfaces modernas e reativas.</p>
                    </div>
                </div>
            </div>


            <div class="pacotes" id='pacotes'>
                <h1 class="title-pacotes">Pacotes</h1>
                <h2 class="subtitle-pacotes">Conheça os nossos pacotes personalizados</h2>
                <div class="pacotes-conteudo" >
                    <div class="divisao-basico" >
                        <h1 class="title-basico" >Plano Básico</h1>
                        <ul class="lista-basico">
                            <li className="li-pacotes" >Acesso a todos os conteúdos do curso</li>
                            <li className="li-pacotes" >Link para live exclusiva do professor semanalmente</li>
                            <li className="li-pacotes" >Dicas de portfólio e currículo</li>
                            <li className="li-pacotes li-blocked" >Acesso a IA do curso para perguntas</li>
                            <li className="li-pacotes li-blocked" >Acesso vitalicio</li>
                        </ul>
                        <h2 className="preco-basico">R$89,90</h2>
                    </div>
                    <div className="divisao-plus" >
                        <h1 className="title-plus" >Plano Premium</h1>
                        <ul className="lista-plus">
                           <li className="li-pacotes" >Acesso a todos os conteúdos do curso</li>
                            <li className="li-pacotes" >Link para live exclusiva do professor semanalmente</li>
                            <li className="li-pacotes" >Dicas de portfólio e currículo</li>
                            <li className="li-pacotes" >Acesso a IA do curso para perguntas</li>
                            <li className="li-pacotes" >Acesso vitalicio</li>
                        </ul>
                        <h2 className="preco-plus">R$109,90</h2>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home;


