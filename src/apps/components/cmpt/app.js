import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import '../scss/style.scss';

const App = () => (
    <div>
        <h2>Username list</h2>
        <UserList />
        <hr/>
        <h2>User DetailS: </h2>
        <UserDetail />
    </div>
);

export default App;