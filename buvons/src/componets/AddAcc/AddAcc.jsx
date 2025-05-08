import React from 'react'

export default function AddAcc() {
    return (
        <>
            <center>
                <h1>Add Account</h1>
                <form>
                    <table className='table'>
                        <tr>
                            <td>
                                <center>
                                    First Name:
                                </center>
                            </td>
                            <td>
                                <center>
                                    <input type='text' />
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center>
                                    Last Name:
                                </center>
                            </td>
                            <td>
                                <center>
                                    <input type='text' />
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center>
                                    Email:
                                </center>
                            </td>
                            <td>
                                <center>
                                    <input type='email' />
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center>
                                    Password:
                                </center>
                            </td>
                            <td>
                                <center>
                                    <input type='password' />
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <center>
                                    <button type='submit'>Register</button>
                                </center>
                            </td>
                        </tr>
                    </table>
                </form>
            </center>
        </>
    )
}
