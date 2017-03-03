import React, {Component} from 'react'

class App extends Component{

    constructor(props){
        super(props)
        state = {
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
                Fb.login( loginResp => {
                    this.setState({fbId:loginResp.auth_response.userID, fbToken:loginResp.auth_response.token})
                })
            })
        }

        const loadAsync = (d, id) => {
            let js, fjs = d.getElmentsByTagName('script')[0]
            if (d.getElementById(id)){return;}
            js = d.CreateElement(s)
            js.id = id
            js.src = '//connect.facebook.net/en_US/sdk.js'
            fjs.parentNode.insertBefore(js, fjs)
        }
        loadAsync(document, 'facebook-jssdk')
    }

    render(){
        let content = null
        if (!fbSdkLoaded){
            //content = (<p>Initializing</p>)
        }else if(!fbId){
            //content = (<FBLoginButton />)
        }else{
            //content = this.props.children
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

export default App