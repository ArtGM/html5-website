import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

const ProjectSingle = ({ node }) => (
	<li>
		<Link to={node.slug}>{node.titreDuProjet}</Link>
	</li>
);

/* const Work = ({ data }) => <ul>{data.allContentfulProject.edges.map((edge) => <ProjectSingle node={edge.node} />)}</ul>;
export default Work; */
export default class Work extends Component {
	render() {
		const { data } = this.props;
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
				id="work"
				className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout
					? 'timeout'
					: ''}`}
				style={{ display: 'none' }}
			>
				<h2 className="major">Work</h2>
				<ul>{data.allContentfulProject.edges.map((edge) => <ProjectSingle node={edge.node} />)}</ul>
				{close}
			</article>
		);
	}
}
