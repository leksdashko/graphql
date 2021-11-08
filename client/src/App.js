import React, {useState, useEffect} from 'react';
import { useMutation, useQuery } from '@apollo/client';
import './App.css';
import { GET_ALL_USERS } from './query/user';
import { CREATE_USER } from './mutations/user'

function App() {
  const {data, loading, error} = useQuery(GET_ALL_USERS);
  const [newUser] = useMutation(CREATE_USER);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);

  useEffect(() => {
    if(!loading){
      setUsers(data.getAllUsers)
    }
  }, [data])

  const addUser = (e) => {
    e.preventDefault();

    newUser({
      variables: {
        input: {
          username, age
        }
      }
    }).then(({data}) => {
      console.log(data)
      setUsername('')
      setAge(0)
    });
  }

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <form>
        <input value={username} onChange={e => setUsername(e.target.value)} type="text"/>
        <input value={age} onChange={e => setAge(e.target.value)} type="number"/>
        <div className="btns">
          <button onClick={(e) => addUser(e)}>Create</button>
          <button>Get</button>
        </div>
      </form>

      <div>
        {
          users.map(user => <div key={user.id} className="user">{user.id} {user.username} {user.age}</div>)
        }
      </div>
    </div>
  );
}

export default App;
