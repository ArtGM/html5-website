import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

export default class workTpl extends Component {
	render() {
		const { titreDuProjet, description, mockupProjet } = this.props.data.contentfulProject;
		return (
			<div>
				<h1>{titreDuProjet}</h1>
				<img src={mockupProjet.file.url} />
				<p>{description.description}</p>
			</div>
		);
	}
}

workTpl.propTypes = {
	data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
	query workQuery($slug: String!) {
		contentfulProject(slug: { eq: $slug }) {
			titreDuProjet
			slug
			description {
				description
			}
			mockupProjet {
				file {
					url
				}
			}
		}
	}
`;
