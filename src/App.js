import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import Nav from './components/Nav/Nav'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import {Route} from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import UsersContainer from './components/Users/UsersContainer'
import Settings from './components/Settings/Settings'
import Login from './components/Login/Login'
import {initApp} from './redux/AppReducer'
import Preloader from './common/Preloader/Preloader'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

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
            <Route path='/Profile/:userId?' render={ () => <ProfileContainer /> } />
            <Route path='/Dialogs/' render={ () => <DialogsContainer /> } />
            <Route path='/News' render={News} />
            <Route path='/Music' render={Music} />
            <Route path='/Users' render={ () => <UsersContainer /> } />
            <Route path='/Settings' render={Settings} />
            <Route path='/login' render={() => <Login /> } />
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


