import React, { useEffect, useState } from 'react'
import * as Config from './configTyleMoney'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useCountingMachine = () => {

    const [money, setMoney] = useState();
    const [str, setStr] = useState('');

    const [txt1000, setTxt1000] = useState(0);
    const [txt500, setTxt500] = useState(0);
    const [txt100, setTxt100] = useState(0);
    const [txt50, setTxt50] = useState(0);
    const [txt20, setTxt20] = useState(0);
    const [txt10, setTxt10] = useState(0);
    const [txt5, setTxt5] = useState(0);
    const [txt2, setTxt2] = useState(0);
    const [txt1, setTxt1] = useState(0);
    const [st50, setSt50] = useState(0);
    const [st25, setSt25] = useState(0);



    const handlNumber = (txtMoney) => {
        setMoney(txtMoney)
        let text = txtMoney.split('.')
        let textStartPoint = text[0]
        let textEndPoint = text[1]
        let resText = ''
        textStartPoint.split('').forEach((c, index) => {
            let i = textStartPoint.length - index
            resText += mapConfig(c, i)

        });
        if (textEndPoint) {
            // resText += Config.ConfigTyleMoney.TH.penny.dot
            textEndPoint.split('').forEach((c, index) => {
                let i = textEndPoint.length - index
                resText += mapConfigPenny(c, i)
            });
            resText += 'สตางค์'
        } else {
            resText += 'บาท'
        }

        setStr(resText)

    }

    const mapConfig = (c, i) => {
        let text = ''
        let configTypeTH = Config.ConfigTyleMoney.TH.moneyNumber
        let configPronoun = Config.ConfigTyleMoney.TH.moneyPronoun

        if (c === '2' && i == '2') {

            text = 'ยี่' + configPronoun[i]
        }
        else if (c === '1' && i == '1') {

            text = 'เอ็ด' + configPronoun[i]
        }
        else if (c === '0' && i == '1') {
            text = configPronoun[i]
        }
        else if (c === '0') {
            text = ""
        } else {
            text = configTypeTH[c] + configPronoun[i]
        }

        return text
    }

    const mapConfigPenny = (c, i) => {
        let text = ''
        let configTypeTH = Config.ConfigTyleMoney.TH.penny
        let configPronoun = Config.ConfigTyleMoney.TH.moneyPronoun
        if (c === '2' && i == '2') {

            text = 'ยี่' + configPronoun[i]
        }
        else if (c === '1' && i == '1') {

            text = 'เอ็ด'
        } else if (i == '1') {

            text = configTypeTH[c]
        }


        // console.log(`text`, text)
        return text
    }

    const onClickCheck = () => {
        let sumBank = Number(txt1000) + Number(txt500) + Number(txt100) + Number(txt50) + Number(txt20)
        let sumCoin = Number(txt10) + Number(txt5) + Number(txt2) + Number(txt1) + Number(st50) + Number(st25)
        let summary = sumBank + sumCoin
        let boo = true
        if (summary > 1200) {
            alert(' ใส่เหรียญ และธนบัตร รวมกันได้ไม่เกิน 1200 ใบ/เหรียญ')
            boo = false
        }
        if (sumBank > 1000) {
            alert('ใส่ธนบัตร ได้ไม่เกิน 1000 ใบ')
            boo = false
        }

        if (sumCoin > 500) {
            alert('ใส่เหรียญ ได้ไม่เกิน 500 เหรียญ')
            boo = false
        }

        if (boo) {
            let sumBank = (Number(txt1000) * 1000) + (Number(txt500) * 500) + (Number(txt100) * 100) + (Number(txt50) * 50) + (Number(txt20) * 20) + (Number(txt10) * 10) + (Number(txt5) * 5) + (Number(txt2) * 2) + Number(txt1) + (Number(st50) * 0.50) + (Number(st25) * 0.25)


            if (sumBank !== 0) { handlNumber(`${sumBank}`) }
            else {
                setStr('ศูนย์บาท')
                setMoney(0)
            }

        }


    }

    return {
        onClickCheck,
        money, str,
        setTxt1000,
        setTxt500,
        setTxt100,
        setTxt50,
        setTxt20,
        setTxt10,
        setTxt5,
        setTxt2,
        setTxt1,
        setSt50,
        setSt25,
        txt1000,
        txt500,
        txt100,
        txt50,
        txt20,
        txt10,
        txt5,
        txt2,
        txt1,
        st50,
        st25,
    }
}


const ViewCountingMachine = (props) => {
    const {

        onClickCheck,
        money, str,
        txt1000,
        txt500,
        txt100,
        txt50,
        txt20,
        txt10,
        txt5,
        txt2,
        txt1,
        st50,
        st25,
        setTxt1000,
        setTxt500,
        setTxt100,
        setTxt50,
        setTxt20,
        setTxt10,
        setTxt5,
        setTxt2,
        setTxt1,
        setSt50,
        setSt25
    } = props

    return <div style={{ "margin": "30px" }}>
        <div style={{ marginBottom: '10px' }}>
            <TextField id="txt1000" label="1000 จำนวน" variant="outlined" value={txt1000}
                onChange={(e) => setTxt1000(e.target.value)}
            />
        </div>

        <div style={{ marginBottom: '10px' }}>
            <TextField id="txt500" label="500 จำนวน" variant="outlined" value={txt500}
                onChange={(e) => setTxt500(e.target.value)}
            />
        </div>

        <div style={{ marginBottom: '10px' }}>
            <TextField id="txt100" label="100 จำนวน" variant="outlined" value={txt100}

                onChange={
                    (e) => setTxt100(e.target.value)
                }
            />


        </div>
        <div style={{ marginBottom: '10px' }}>

            <TextField id="txt50" label="50 จำนวน" variant="outlined" value={txt50}
                onChange={
                    (e) => setTxt50(e.target.value)
                }
            />
        </div>
        <div style={{ marginBottom: '10px' }}>

            <TextField id="txt20" label="20 จำนวน" variant="outlined" value={txt20}
                onChange={
                    (e) => setTxt20(e.target.value)
                }
            />

        </div>
        <div style={{ marginBottom: '10px' }}>

            <TextField id="txt10" label="10 จำนวน" variant="outlined" value={txt10}
                onChange={
                    (e) => setTxt10(e.target.value)
                }
            />
        </div>
        <div style={{ marginBottom: '10px' }}>

            <TextField id="txt5" label="5 จำนวน" variant="outlined" value={txt5}
                onChange={
                    (e) => setTxt5(e.target.value)
                } />


        </div>
        <div style={{ marginBottom: '10px' }}>

            <TextField id="txt2" label="2 จำนวน" variant="outlined" value={txt2}
                onChange={
                    (e) => setTxt2(e.target.value)
                } />


        </div>
        <div style={{ marginBottom: '10px' }}>
            <TextField id="txt1" label="1 จำนวน" variant="outlined" value={txt1}
                onChange={
                    (e) => setTxt1(e.target.value)
                } />
        </div>
        <div style={{ marginBottom: '10px' }}>
            <TextField id="st50" label="0.50 จำนวน" variant="outlined" value={st50}
                onChange={
                    (e) => setSt50(e.target.value)
                } />

        </div>
        <div style={{ marginBottom: '10px' }}>
            <TextField id="st25" label="0.25 จำนวน" variant="outlined" value={st25}
                onChange={
                    (e) => setSt25(e.target.value)
                } />


        </div>


        <br />
        <Button onClick={onClickCheck} variant="outlined" color="primary">CHECK</Button>

        <label >  {money} :: {str}</label>

    </div>
}

const CountingMachine = () => {
    const countingMachine = useCountingMachine()

    return <ViewCountingMachine {...countingMachine} />
}

export default CountingMachine
