import React from 'react'

export default function TableBook() {
  return (
    <>
      <fieldset>
        <center>
          <form>
            <table>

              <tr>
                <td>Customer Name: </td>
                <td><input type="text" name="customerName" /></td>
              </tr>

              <tr>
                <td>Customer Tel: </td>
                <td><input type="text" name="customerTel" /></td>
              </tr>

              <tr>
                <td>Email: </td>
                <td><input type="text" name="email" /></td>
              </tr>

              <tr>
                <td>Table Number: </td>
                <td><input type="text" name="totalPrice" /></td>
              </tr>

              <tr>
                <td>Table Capacity: </td>
                <td><input type="text" name="tableCapacity" /></td>
              </tr>

              <tr>
                <td>Date: </td>
                <td><input type="date" name="date" /></td>
              </tr>

              <tr>
                <td>Time: </td>
                <td><input type="time" name="time" /></td>
              </tr>

            </table>
          </form>
        </center>
      </fieldset>
    </>
  )
}
