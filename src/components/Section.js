import React, { Component } from 'react';
import Home from './section/Home';
import Blog from './section/Blog';
import Contact from './section/Contact';
import About from './section/About';
import Login from './section/Login';
import { Route } from 'react-router-dom';

export class Section extends Component {
	render() {
		return (
			<section>
				<Route Home path="/" component={Home} exact />
				<Route Blog path="/blog" component={Blog} />
				<Route Contact path="/contact" component={Contact} />
				<Route About path="/about" component={About} />
				<Route Login path="/login" component={Login} />
			</section>
		)
	}
}

export default Section
