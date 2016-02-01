/** @jsx React.DOM */
var PersonTable = React.createClass({
	getInitialState: function() {
		return {
			data: [{"id": 1, "fname": "Manish", "lname", "Crosswhite"}, {"id": 2, "fname": "Atul", "lname", "Groll"}]
		}
	},
	render: function() {
		return (
			<table>
				{this.state.data.map(function(person, i) {
					return <PersonRow key={i} data={person} />
				})}
			</table>
		)
	}
});

var PersonRow = React.createClass({
	render: function() {
		return (
			<tr key={0}>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.fname}</td>
				<td>{this.props.data.lname}</td>
			</tr>
		)
	}
});