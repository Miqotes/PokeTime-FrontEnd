import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render((
    <Router>
        <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={ProfileContainer} />
            <Route exact path="/friends" component={FriendsContainer} />
            <Route exact path="/SignOut" component={SignOut} />
        </div>
    </Router>),
    document.getElementById('root')
)

// export default function PokeRoutes() {
//     return (
//         <Router>
//             <div>
//                 <span>
//                     <link to="/">Home</link>
//                     <break />
//                     <link to="/about">About</link>
//                     <break />
//                     <link to="/profile">Profile</link>
//                     <break />
//                     <link to="/friends">Friends</link>
//                 </span>
//             </div>
//         </Router>
//     )
// }