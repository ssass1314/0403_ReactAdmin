import React, {Component} from 'react'
import {Form,Icon,Input,Button} from 'antd'

import './login.less'
import Logo from './imgs/logo.png'

const FormItem =Form.Item


export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        <div className='login-header'>
          <img src={Logo} alt="logo"/>
          后台管理系统
        </div>
        <div className='login-content'>
          <div className='login-box'>

            <div className='title'>用户登录</div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="输入用户名" />
              </FormItem>
              <FormItem>
                <Input type='password' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="输入密码" />
              </FormItem>
              <FormItem>
                <Button type='primary' className='login-form-button'>登录</Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}