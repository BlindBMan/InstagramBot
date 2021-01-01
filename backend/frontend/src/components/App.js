import '../App.css';
import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Switch, Route } from "react-router-dom";
import Signup from "./signup/signup";
import Home from "./home/home";
import Login from "./login/login";

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false)

    function changeLoginState() {
        setLoggedIn(prevValue => !prevValue)
        console.log(loggedIn)
    }

    useEffect(() => {
        let value = localStorage.getItem('access_token') !== null
        console.log(value)

        setLoggedIn(value)
    }, [])

    return (
          <Switch>

            <Route path={'/register/'}>
                <Signup />
            </Route>

            <Route path={'/login/'}>
                <Login onLoginChange={changeLoginState} />
            </Route>

            <Route path={'/'}>
                <Home isLoggedIn={loggedIn} onLoginChange={changeLoginState} />
            </Route>

          </Switch>
    )
}


//
// function App() {
//   // const [users, setUsers] = useState([])
//
//   // useEffect(() => {
//   //     let data;
//   //
//   //     axios.get('/api')
//   //         .then(res => {
//   //             data = res.data
//   //             setUsers(data)
//   //         })
//   //         .catch(err => {})
//   //
//   // }, [])
//
//   return (
//     <div className="App">
//         {/*<div>*/}
//         {/*    {users.map((detail, id) =>  (*/}
//         {/*             <div key={id}>*/}
//         {/*                 <div >*/}
//         {/*                     <div >*/}
//         {/*                         <footer >--- by*/}
//         {/*                             <cite title="Source Title">*/}
//         {/*                                 {detail.name}</cite>*/}
//         {/*                         </footer>*/}
//         {/*                     </div>*/}
//         {/*                 </div>*/}
//         {/*             </div>*/}
//         {/*         )*/}
//         {/*     )}*/}
//         {/*</div>*/}
//     </div>
//   );
// }
//
// export default App;
//
// //
// // class App extends React.Component {
// //     state = {
// //         details: [],
// //     }
// //
// //     componentDidMount() {
// //         let data;
// //
// //         axios.get('/api')
// //             .then(res => {
// //                 data = res.data;
// //                 console.log(data)
// //                 this.setState({
// //                     details: data
// //                 });
// //             })
// //             .catch(err => {})
// //
// //     }
// //
// //     render() {
// //         return(
// //             <div>
// //                 {this.state.details.map((detail, id) =>  (
// //                         <div key={id}>
// //                             <div >
// //                                 <div >
// //                                     <footer >--- by
// //                                         <cite title="Source Title">
// //                                             {detail.name}</cite>
// //                                     </footer>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     )
// //                 )}
// //             </div>
// //         )
// //     }
// // }
// //
// // export default App;
