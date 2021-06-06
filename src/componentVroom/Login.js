


import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import ConferenceManagement from './assignmentTwo/ConferenceManagement'
import { useHistory } from "react-router";

const useLogin = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const history = useHistory()
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const onSave = () => {
        let click = validateEmail(email)
        let boo1 = email !== '' ? true : false
        let boo2 = pass !== '' ? true : false
        if (!click) {
            alert("ท่านกรอก Email ไม่ถูกต้องกรุณากรอกใหม่อีกครั้งค่ะ")
        }
        if (!boo1 || !boo2) { alert("กรุณากรอกข้อมูลให้ครบถ้วน") }

        if (click && boo1 && boo2) {

            history.push('/conferenceManagement')
        }

    }

    return {
        onSave, email, setEmail, pass, setPass
    }
}


const ViewLogin = (props) => {
    const { onSave, email, setEmail, pass, setPass } = props

    return (<>

        <Paper elevation={5} style={{ height: '580px', margin: '90px', padding: '100px', textAlign: 'center' }}>
            <div  >
                <div>true vroom </div>

                <div style={{ fontSize: '1em', fontWeight: 'bold', color: '#000' }}> Sign In to Webina Admin Console</div>

                <div style={{ fontSize: '0.8em', color: '#6f6f6f' }}>ก้าวสู้โลกใหม่ของชีวิตครบโซลูชั่น พร้อมทำงาน พร้อมเรียนรู้ พร้อมชีวิตคุณภาพ ได้ทุกที่ ทุกเวลา</div>


                <div style={{ marginTop: '100px', marginBottom: '20px' }}>
                    <TextField id="Email" label="EMAIL" variant="outlined"
                        required
                        value={email}
                        onChange={
                            (e) => setEmail(e.target.value)
                        }
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <TextField id="Password" label="PASSWORD" variant="outlined"
                        type="password"
                        required
                        value={pass}
                        onChange={
                            (e) => setPass(e.target.value)
                        }
                    />
                </div>
                <Button variant="contained" color="secondary" onClick={onSave} >Sign in</Button>
            </div>
        </Paper>
    </>)
}

const Login = () => {
    const login = useLogin()


    return <ViewLogin {...login} />
}

export default Login