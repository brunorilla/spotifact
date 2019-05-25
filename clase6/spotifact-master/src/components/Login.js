import React, {Component} from 'react';
import firebase from '../firebase'


class Login extends Component {

    constructor(props){

        super(props)

        this.state = {
            form: {
                email : '',
                password: ''
            },
            error : null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({error : null})

        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.form.email, this.state.form.password)
            .then(  (e) => {
                console.log('success')
                    this.props.history.push('/Home')
                }
            )
            .catch( error => {
                    console.log(error)
                    this.setState({error})
                }

            )
    }

    handleInput = (e) => {
        console.log(e.currentTarget)

        this.setState({

            form : {
            ...this.state.form,
                [e.currentTarget.name] : e.currentTarget.value,
            }
        })
    }

    render(){


        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="text-danger">{this.state.error ? this.state.error.message : ''}</p>
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" onChange={this.handleInput} value={this.state.form.email} className="form-control" name="email"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" onChange={this.handleInput} value={this.state.form.password} className="form-control" name="password"/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" onClick={this.handleSubmit}>Iniciar Sesión</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login