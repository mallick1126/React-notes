import React from 'react';
import './App.css';
import Greet from './Components/FunctionalComponentGreet'
import Welcome from './Components/ClassComponentWelcome'
import Hello from './Components/UsingJSXHello'
import Props from './Components/props'
import Message from './Components/State'
import Counter from './Components/stateInDepth'
import EventBinding from './Components/EventBinding'
import ParentComponent from './Components/ParentComponent'
import PersonList from './Components/PersonList'
import NameList from './Components/NameList';
import FormHandling from './Components/FormHandling';
import LifecycleA from './Components/LifecycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';

function App() {
  return (
    <div className="App">
      <Table />
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <FormHandling /> */}
      {/* <NameList /> */}
      {/* <PersonList /> */}
      {/* <ParentComponent /> */}
      {/* <EventBinding /> */}
      {/* <Counter /> */}
      {/* <Message />
      <Greet />
      <Welcome />
      <Hello />
      <Props name = "Bruce" heroname = "Batman">
        <p>This is a children property</p>
      </Props>
      <Props name = "Clark" heroname = "Superman">
        <button>Action</button>
      </Props>
      <Props name = "Diana" heroname = "Wonder Woman">
      </Props> */}
    </div>
  );
}

export default App;










