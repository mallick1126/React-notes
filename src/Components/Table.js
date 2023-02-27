import React from 'react'
import Column from './Column'

function Table() {
  return (
    <table>
        <tbody>
            <tr>
                {/* Here again we get div tag inside a tr tag so to avoid this we use react.fragment */}
                <Column />
            </tr>
        </tbody>
    </table>
  )
}

export default Table