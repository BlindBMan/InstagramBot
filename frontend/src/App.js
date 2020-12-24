import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios';

function App() {
  // const [users, setUsers] = useState([])

  // useEffect(() => {
  //     let data;
  //
  //     axios.get('/api')
  //         .then(res => {
  //             data = res.data
  //             setUsers(data)
  //         })
  //         .catch(err => {})
  //
  // }, [])

  return (
    <div className="App">
        {/*<div>*/}
        {/*    {users.map((detail, id) =>  (*/}
        {/*             <div key={id}>*/}
        {/*                 <div >*/}
        {/*                     <div >*/}
        {/*                         <footer >--- by*/}
        {/*                             <cite title="Source Title">*/}
        {/*                                 {detail.name}</cite>*/}
        {/*                         </footer>*/}
        {/*                     </div>*/}
        {/*                 </div>*/}
        {/*             </div>*/}
        {/*         )*/}
        {/*     )}*/}
        {/*</div>*/}
    </div>
  );
}

export default App;

//
// class App extends React.Component {
//     state = {
//         details: [],
//     }
//
//     componentDidMount() {
//         let data;
//
//         axios.get('/api')
//             .then(res => {
//                 data = res.data;
//                 console.log(data)
//                 this.setState({
//                     details: data
//                 });
//             })
//             .catch(err => {})
//
//     }
//
//     render() {
//         return(
//             <div>
//                 {this.state.details.map((detail, id) =>  (
//                         <div key={id}>
//                             <div >
//                                 <div >
//                                     <footer >--- by
//                                         <cite title="Source Title">
//                                             {detail.name}</cite>
//                                     </footer>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 )}
//             </div>
//         )
//     }
// }
//
// export default App;
