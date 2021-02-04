import React, { Children } from 'react';
import './App.css';

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: 'Shashank',
      job: 'developer'
    },
    {
      img: 31,
      name: 'Nitin',
      job: 'muneem ji'
    },
    {
      img: 42,
      name: 'Kushagra',
      job: 'Designer'
    },
    {
      img: 53,
      name: 'Sourabh',
      job: 'manager'
    }
  ]
  return (<section>
  <Person Person={people[0]}/>;
  <Person Person={people[1]}/>;
  <Person Person={people[2]}/>;
  <Person Person={people[3]}/>;
  </section>)
};

const Person = (props) => {
  const {img,name,job}=props.Person;
  const {chiildren}=props ;
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return (<div className="person">
    <img src={url} alt="" />
    <div>
      <h2>{name}</h2>
      <h2>{job}</h2>
      
    </div>
  </div>);
};

export default App;
