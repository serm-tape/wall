import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            fbSdkLoaded: false,
            fbId: null,
            fbToken: null,
        }
    }

    //define FB.asyncInit()
    //check if loggedin=>setState(id,token)
    //load fbsdk
    componentDidMount(){
        window.fbAsyncInit = () => {
            FB.init({
                appId: '',
                xfbml: true,
                version: 'v2.8',
            })
            FB.AppEvents.logPageView();
            this.setState({fbSdkLoaded:true})

            //if not login do login, then get id wheter login or not
            FB.getLoginStatus( resp => {
                console.log(resp)
                switch (resp.status){
                    case 'connected':
                        this.setState({fbId:resp.auth_response.userID, fbToken:resp.auth_response.token}); break;
                    default:
                        Fb.login( loginResp => {
                            this.setState({fbId:loginResp.auth_response.userID, fbToken:loginResp.auth_response.token})
                        })
                        break;
                }
            })
        }

        const loadAsync = (d, id) => {
            let js, fjs = d.getElementsByTagName('script')[0]
            if (d.getElementById(id)){return;}
            js = d.createElement('script')
            js.id = id
            js.src = '//connect.facebook.net/en_US/sdk.js'
            fjs.parentNode.insertBefore(js, fjs)
        }
        loadAsync(document, 'facebook-jssdk')
    }

    render(){
        let content = null
        if (!this.state.fbSdkLoaded){
            content = (<p>Initializing</p>)
        }else if(!this.state.fbId){
            content = (
                <button className='btn btn-primary' onClick={loginWithFacebook.bind(this)}> Login with facebook </button> 
            )
        }else{
            content = this.props.children
        }
        return (
            <div>
                <Header />
                {content}
                <Footer />
            </div>
        )
    }
}

function loginWithFacebook(){
    Fb.login( loginResp => {
        this.setState({fbId:loginResp.auth_response.userID, fbToken:loginResp.auth_response.token})
    })
}

export default App