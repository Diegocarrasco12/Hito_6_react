import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { setToken } = useContext(UserContext);
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        if (email && password) {
            setToken(true) 
            navigate('/profile')
        } else {
            alert('Por favor completa todos los campos')
        }
    }


  return (

    <div className="container d-flex justify-content-center align-items-center min-vh-100">
    <div className="row w-100">
        <div className="col-md-6 offset-md-3">
            <div className="card shadow-lg p-4">
                <div className="card-body">
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Ingresa tu Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Ingresa tu contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-dark w-100">
                            Iniciar sesión
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>




  )
}

export default Login