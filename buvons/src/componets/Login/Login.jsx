import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <>
            <center>
                <h1>Login</h1>

                <form>
                    <table className='table'>
                        <tr>
                            <td>
                                <center>
                                    <label htmlFor="email">Email:</label>
                                </center>
                            </td>
                            <td>
                                <center>
                                    <input type="email" name="email" id="email" />
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center>
                                    <label htmlFor="password">Password:</label>
                                </center>
                            </td>
                            <td>
                                <center>
                                    <input type="password" name="password" id="password" />
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <center>
                                    <button type="submit">Login</button>
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <center>
                                    <a href="/add-account">Don't have an account? Register here</a>
                                </center>
                            </td>
                        </tr>
                    </table>
                </form>

            </center>
        </>
    )
}
