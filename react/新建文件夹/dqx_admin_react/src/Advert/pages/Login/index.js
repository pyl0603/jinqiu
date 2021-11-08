import React from 'react';
import { connect } from "react-redux";
import { setToken } from "@redux/actions";
import Cookies from "js-cookie";

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { login } from '@api/user';

import LimitInput from '../../../component/LimitInput';

import './style.scss';

class Login extends React.Component {
	state = {
		account: '',
		pwd: ''
	}
	formRef = React.createRef();

	/**
	 * 
	 * @param {*} e 获取用户名和密码
	 */
	handleSumbit = e => {
		e.preventDefault();
		const param = {
			username: this.state.account,
			password: this.state.pwd
		}
		this.loginUser(param)
	}

	/**
	 * 
	 * @param {*} param 
	 */
	handleChangeAccount = (e) => {
		this.setState({
			account: e
		})
	}

	/**
	 * 
	 * @param {*} param 
	 */
	handleChangePwd = (e) => {
		this.setState({
			pwd: e
		})
	}

	/**
	 * 请求登录，获取token存在redux
	 * @param { username, password} param 用户名 密码
	 */
	async loginUser(param) {
		const res = await login(param);
		const token = res.data.access_token;
		Cookies.set('token', token, { expires: res.data.expires_in / 86400 });
		this.props.dispatch(setToken(token));
		localStorage.setItem("username", param.username)
		this.props.history.push('/');
	}
	

	render() {
		return (
			<div className="login">
				<div className="login-header">
					<span className="login-title">
						{/* {Cookies.get('Category') === '19000' ? '简化版' : '标准版'} */}
						广告后台管理系统
						</span>
				</div>
				<div className="login-content">
					<Form
						ref={this.formRef}
						name="normal_login"
						className="login-form"
					>
						<Form.Item
							name="username"
						>
							<LimitInput limit={11} value={this.state.account} getValue={this.handleChangeAccount} regType='number' placeholder="请输入账号" />
						</Form.Item>
						<Form.Item
							name="password"
						>
							<LimitInput limit={16} value={this.state.pwd} getValue={this.handleChangePwd} type="password" regType='pwd' placeholder="请输入密码" />
						</Form.Item>
						<Form.Item>
							<Button size="large" type="primary" htmlType="submit" className="login-form-button" onClick={this.handleSumbit}>
								登录
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		)
	}
}

Login = connect()(Login)

export default Login;
