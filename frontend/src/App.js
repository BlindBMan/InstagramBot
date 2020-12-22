import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([])

  async function fetchData() {
    axios.get('/api')
        .then(res => {
          let data = res.data
          setUsers(data)
        })
        .catch(err => {})
  }

  useEffect(() => {
      let data;

      axios.get('/api')
          .then(res => {
              data = res.data
              setUsers(data)
          })
          .catch(err => {})

  }, [])

  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}

      {/*{users.map((name, id) => (*/}
      {/*    <div key={id}>*/}
      {/*      <div>*/}
      {/*        name of user is {name.name}*/}
      {/*      </div>*/}
      {/*      <br />*/}
      {/*    </div>*/}
      {/*))}*/}

        <div>
            {users.map((detail, id) =>  (
                     <div key={id}>
                         <div >
                             <div >
                                 <footer >--- by
                                     <cite title="Source Title">
                                         {detail.name}</cite>
                                 </footer>
                             </div>
                         </div>
                     </div>
                 )
             )}
        </div>
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
