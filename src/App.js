import React, { Suspense, lazy } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import Nav from './components/Nav/Nav'
import ProfileContainer from './components/Profile/ProfileContainer'
import {Route} from 'react-router-dom'
import Login from './components/Login/Login'
import {initApp} from './redux/AppReducer'
import Preloader from './common/Preloader/Preloader'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
const DialogsContainer =  lazy( () => import('./components/Dialogs/DialogsContainer') )
const News =  lazy( () => import('./components/News/News') )
const Music =  lazy( () => import('./components/Music/Music') )
const Settings =  lazy( () => import('./components/Settings/Settings') )
const UsersContainer =  lazy( () => import('./components/Users/UsersContainer') )


class App extends React.Component {

componentDidMount() {   
    this.props.initApp()
}

render() {
    if (!this.props.init_ed) return <Preloader />;
    return (
    <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
        <Suspense fallback={Preloader}>
            <Route path='/Profile/:userId?' render={ () => <ProfileContainer /> } />
            <Route path='/Dialogs/' render={ () => <DialogsContainer /> } />
            <Route path='/News' render={ () => <News />} />
            <Route path='/Music' render={ () => <Music />} />
            <Route path='/Users' render={ () => <UsersContainer /> } />
            <Route path='/Settings' render={ () => <Settings /> } />
            <Route path='/login' render={() => <Login /> } />
         </Suspense>
        </div>
    </div>
    )
    }
}

let mapStateToProps = (state) => {
    return {
        init_ed: state.app.init_ed,
        currentUserProfile: state.profilePage.currentUserProfile
    }
}

export default compose(withRouter , connect(mapStateToProps,{initApp})) (App);


