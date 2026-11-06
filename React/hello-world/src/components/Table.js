import React from 'react'
import Column from './Column'

function Table() {
  return (
    <table>
        <tbody>
            <tr>
                {/* Within the body we need to render the columns from the columns table */}
            <Column />   
            </tr>
        </tbody>

    </table>
  )
}

export default Table
