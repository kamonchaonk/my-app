import React, { useState, useEffect } from 'react'

import NumberToString from './NumberToString'


const useWorkOne = () => {

    const [baht, setBaht] = useState(0)
    const handleChange = (val) => {
        setBaht(val)

    }

    const handlCheck = (numberBaht, type = '1') => {
    }


    return {
        inputBaht: baht,
        handleChange,
        handlCheck,
        setBaht

    }
}

let ViewWorkOne = (props) => {
    console.log(`props`, props.inputBaht)
    const { handleChange, handlCheck, inputBaht = 0, setBaht } = props

    return (

        <div>
            <button onClick={() => handlCheck(1000, '1')}>1000</button>
            <button onClick={() => handlCheck(500, '1')}>500</button>
            <button onClick={() => handlCheck(100, '1')}>100</button>
            <button onClick={() => handlCheck(50, '1')}>50</button>
            <button onClick={() => handlCheck(20, '1')}>20</button>

            <button onClick={() => handlCheck(10, '2')}>10</button>
            <button onClick={() => handlCheck(5, '2')}>5</button>
            <button onClick={() => handlCheck(2, '2')}>2</button>
            <button onClick={() => handlCheck(1, '2')}>1</button>
            <button onClick={() => handlCheck(0.5, '2')}>0.5</button>
            <button onClick={() => handlCheck(0.25, '2')}>0.25</button>
            <br />
            <label>{inputBaht}</label>
            <br />
            <button onClick={() => handlCheck(inputBaht)} > check </button>

        </div>)



}


const ComponentWorkOne = () => {
    const workOne = useWorkOne()

    return <> <ViewWorkOne {...workOne} /> <NumberToString />  </>

}

export default ComponentWorkOne