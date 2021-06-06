import React, { useEffect, useState } from 'react'

const useTest = () => {
    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount(count + 1)
    }

    const handleMinus = () => {
        setCount(count - 1)
    }
    return {
        count,
        handlePlus,
        handleMinus

    }
}


const ViewTest = (props) => {
    const { count, handlePlus, handleMinus } = props

    return <div><button onClick={(e) => handlePlus()}>+</button>{count}<button onClick={(e) => handleMinus()}>-</button></div>
}

const Test = () => {
    const test = useTest()


    return <ViewTest {...test} />
}

export default Test