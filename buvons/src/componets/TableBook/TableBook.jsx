import React from 'react'
import './Table.css'

// function resetMessage() {
//   alert("Cleared");
// }
export default function TableBook() {
  return (
    <>
      
      <center><h1>Table Booking</h1></center>
      <fieldset>
        <center>
          <form>
            <table className='table'>

              <tr>
                <td><center>Customer Name: </center></td>
                <td><center><input type="text" name="customerName" /></center></td>
              </tr>

              <tr>
                <td><center>Customer Tel: </center></td>
                <td><center><input type="text" name="customerTel" /></center></td>
              </tr>

              <tr>
                <td><center>Email: </center></td>
                <td><center><input type="text" name="email" /></center></td>
              </tr>

              <tr>
                <td><center>Table Number: </center></td>
                <td><center><input type="text" name="totalPrice" /></center></td>
              </tr>

              <tr>
                <td><center>Table Capacity: </center></td>
                <td><center><input type="text" name="tableCapacity" /></center></td>
              </tr>

              <tr>
                <td><center>Booking Date: </center></td>
                <td><center><input type="date" name="date" /></center></td>
              </tr>

              <tr>
                <td><center>Booking Time: </center></td>
                <td><center><input type="time" name="time" /></center></td>
              </tr>

              <tr>
                <td><center><button type='submit'>Submit</button></center></td>
                <td><center><button type='reset' onClick={resetMessage()}>Clear</button></center></td>
              </tr>

            </table>
          </form>
        </center>
      </fieldset>
    </>
  )
}
