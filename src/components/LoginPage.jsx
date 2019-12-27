import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../redux/actions";


class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          username: null,
          isInvalid: false
        };
        this.loginEvent=this.loginEvent.bind(this);
        this.onChaneEvent=this.onChaneEvent.bind(this);
    }

     onChaneEvent(e){
            this.setState({username:e.target.value});

        }

        loginEvent(e){
            e.preventDefault();
            this.props.login(this.state.username);
        }
        componentDidUpdate() {
            if (this.props.user===null) {
                return;
            }
            this.props.history.push("/list");
        }

    render(){
             const user=this.props.user;
             if(user !== null){
                  return <h3>You are already logged in.</h3>
             }
             return(
                  <div>
                       <h1> Login </h1>
                       <form onSubmit={e=> this.loginEvent(e)}>
                       <label>Username   </label>
                       <input type="text" onChange={this.onChaneEvent}></input>
                       <br/><br/>
                       <button type="submit"> Log in </button>
                       </form>
                  </div>
             )
    }
}

const mapStateToProps = (state /* , ownProps */) => {
    return {
     user:state.user
     };
};

const mapDispatchToProps = dispatch => ({
    login: name=> dispatch(login(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));