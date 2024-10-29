import { useState } from 'react'
import './style.css'

export default function Square({value,onSquareClick}){


    return(
        <div>
            <button className='square' onClick={onSquareClick}>{value}</button>
        </div>
    )
}