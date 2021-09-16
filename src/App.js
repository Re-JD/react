import './App.css';
import Headers from './components/headers';
import PostBox from './container/postbox';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Headers/>
        <PostBox/>
      </div>
    );
  }
}

export default App;
