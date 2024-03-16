import { Component } from 'react';
import './App.css';

class App extends Component{
  state = {isLogin:false,userName:' ',password:''}

  onClickLogin = () =>{
    const {isLogin} = this.state;
    if(isLogin){
      this.setState({isLogin:false});
    }
    else{
      this.setState({isLogin:true})
    }

  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  

  render(){
    const {isLogin,userName,password} = this.state
    return(<div className='main-container'>
      <div className='nav-container'>
      <img src="..." className='logo' alt='logo'/>
      <h1 className='title'>Money Heist</h1>
      </div>
      <div className='login-container'>
        {isLogin ? (
        <div className='message-container'>
          <h3 className='login-message'>Login Successful</h3>
          <button className='login-button' onClick={this.onClickLogin}>Back</button>
          </div>) : 
        (<div className='login'>
          <div className='buttons-container'>
            <button className='admin-button'>Admin</button>
            <button className='user-button'>User</button>
            </div>
            <form className='details-container' onSubmit={this.onClickLogin}>
              <div className='user-details'>
              <label for='username'className='label'>UserName: </label>
            <input
                value={userName}
                onChange={this.onChangeUserName}
                placeholder="User Name"
                className="input"
                type="text"
                id="username"
              />
              </div>
              <div className='user-details'>
              <label for='password' className='label'>Password: </label>
              <input
                value={password}
                onChange={this.onChangePassword}
                placeholder="Password"
                className="input"
                type="password"
                id="password"
              />
              </div>
              <button className='login-button' type='submit'>Login</button>
              </form>

        </div>)}
      </div>

    </div>)
  }
}

export default App;
