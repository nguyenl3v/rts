import React, { FC, useState } from 'react'
import { Styled } from './Styled'
import { login } from "../../resource/login/action";
import { connect } from "react-redux";

interface Props{
  login:Function
}

const Index: FC<Props> = ({login}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const submitLogin: any = (e: any) => {
    e.preventDefault();
    login(email, password)
  }
  return (
    <Styled>
      <div className="container">
        <form onSubmit={e => submitLogin(e)}>
          <div className="form-group">
            <label>Email*</label>
            <input type="text" className="form-control" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Password*</label>
            <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </Styled>
  )
}
export default connect(null,{login})(Index);