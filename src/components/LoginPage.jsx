import React from "react";
import { connect } from "react-redux";


class LoginPage extends React.Component{
    render(){
        return(
            <div>
                <h1>Please login to proceed</h1>
                <form>
                    <label>Username: </label>
                    <input type="text"></input>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state /* , ownProps */) => {
    return {};
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);