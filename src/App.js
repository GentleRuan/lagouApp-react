import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './pages/Home';
import Search from './pages/Search';
import Mine from './pages/Mine';
import {Link,IndexLink}  from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
	        {this.props.children}
	      	<ul id="foot">
	      		<li><IndexLink to="/" activeClassName="active">
	      			<i className="glyphicon glyphicon-home"></i> 职位</IndexLink>
	      		</li>
				<li><Link to="/Search" activeClassName="active">
					<i className="glyphicon glyphicon-search"></i> 搜索</Link>
				</li>
				<li><Link to="/Mine" activeClassName="active">
					<i className="glyphicon glyphicon-user"></i> 我的</Link>
				</li>
	      	</ul>
	    </div>
    );
  }
}

export default App;
