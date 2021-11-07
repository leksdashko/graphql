import React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/client';
import './App.css';
import { GET_ALL_USERS } from './query/user';

function App() {
  const {data, loading, error} = useQuery(GET_ALL_USERS)
  const [users, setUsers] = useState([]);

  console.log(data);

   useEffect(() => {

   }, [data])

  return (
    <div>
      <form>
        <input type="text"/>
        <input type="number"/>
        <div className="btns">
          <button>Create</button>
          <button>Get</button>
        </div>
      </form>

      <div>
        {
          users.map(user => <div className="user">{user.id} {user.username} {user.age}</div>)
        }
      </div>
    </div>
  );
}

export default App;
