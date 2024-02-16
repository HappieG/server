import React, { useState } from 'react';

const Dash = ({ user }) => {
    const { company, phone, url1, url2 /* ... other properties ... */ } = user;

    console.log('-----', user)
  return (
    <div>
      <h1>Dash Component</h1>
      <p>{user.company}</p>
      <p>Some Prop: <a href={user.url1}>url1</a></p>
      {/* <p>Another Prop: {anotherProp}</p> */}
      {/* Other content... */}
    </div>
  );
};

export default Dash;