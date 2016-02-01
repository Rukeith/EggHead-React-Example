/* @jsx React.DOM */
var Transformer = React.createClass({
	getInitialState: function() {
		return {
			input: '/** @jsx React.DOM */',
			output: '',
			err: ''
		}
	},
	update: function(e) {
		var code = e.target.value;
		try {
			this.setState({
				output: JSXTransformer.transform(code).code,
				err: ''
			});
		} catch(err) {
			this.setState({
				err: err.message
			});
		}
	},
	render: function() {
		return (
			<div>
				<div className="row">
					<p className="alert alert-danger">&nbsp;{this.state.err}</p>
				</div>
				<div className="row">
					<textarea classNmae="col-sm-6 input-lg" defaultValue={this.state.input} onChange={this.update} />
				</div>
				<pre classNmae="col-sm-6 input-lg">{this.state.output}</pre>
			<div />
		);
	}
});