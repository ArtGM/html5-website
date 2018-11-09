import React, { Component } from 'react';

export default class Intro extends Component {
	render() {
		let close = (
			<div
				className="close"
				onClick={() => {
					this.props.onCloseArticle();
				}}
			/>
		);
		return (
			<article
				id="intro"
				className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout
					? 'timeout'
					: ''}`}
				style={{ display: 'none' }}
			>
				<h2 className="major">Intro</h2>
				<span className="image main">{/* <img src={pic01} alt="" /> */}</span>
				<p>
					Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum
					congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
					magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my{' '}
					<a href="#work">awesome work</a>.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
					taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
					libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut
					ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor.
					Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique
					senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus.
					Pellentesque aliquam maximus risus, vel sed vehicula.
				</p>
				{close}
			</article>
		);
	}
}
