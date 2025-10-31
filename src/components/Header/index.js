import './header.css'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebaseConnection'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
            setUser(null)
        }
        })
        return () => unsub()
    }, [])

    async function CloseAccount() {
        signOut(auth)
    }

    return (
        <div className="header">

            <nav className='nav'>
                <ul>
                    <li><a href='#'>Home</a></li>
                     <li><a href='#'>Benefícios</a></li>
                      <li><a href='#'>Pacotes</a></li>
                </ul>
            </nav>

            <div className='user-area'>
                {user ? (
                    <>
                        <span>{user.email}</span>
                        <button onClick={CloseAccount} className='button-closeacount'>Sair</button>
                    </>
                ) : (
                    <Link  className="link"to='/login'>Logar-se</Link>
                )}
            </div>
        </div>
    )
}

export default Header;