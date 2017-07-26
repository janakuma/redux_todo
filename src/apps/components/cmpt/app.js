import React from 'react';
import UserList from '../containers/user-list';
import '../scss/style.scss';

const App = () => (
    <div>
        <h2>Username list</h2>
        <UserList />
        <hr/>
        <h2>User DetailS: </h2>
    </div>
);

export default App;