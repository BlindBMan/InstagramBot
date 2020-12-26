import './App.css';
import React, {useEffect} from "react";
import axios from 'axios';
import { Switch, Route } from "react-router-dom";
import Signup from "./components/signup/signup";
import Home from "./components/home/home";
import Login from "./components/login/login";

export default function App() {

    return (
          <Switch>

            <Route path={'/register'}>
                <Signup />
            </Route>

            <Route path={'/login'}>
                <Login />
            </Route>

            <Route path={'/'}>
                <Home />
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
