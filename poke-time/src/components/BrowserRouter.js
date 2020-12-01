import React from "react";



ReactDOM.render((
    <Router>
        <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={ProfileContainer} />
            <Route exact path="/friends" component={FriendsContainer} />
            <Route exact path="/SignOut" component={SignOut} />
            <Route exact path="/TeamLists" component={TeamProfile} />
        </div>
    </Router>),
    document.getElementById('root')
)
