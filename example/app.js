require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');
var React = require('react');
var Editor = require('../lib/editor');

var App = React.createClass({
  getInitialState() {
    return {text: 'Fusce dapibus, tellus ac cursus commodo'}
  },

  render() {
    return (
      <div>
        <div>{this.state.text}</div>
        <Editor
          tag="h1"
          text={this.state.text}
          onChange={this.handleChange}
          options={{buttons: ['bold', 'italic', 'underline']}}
        />
        <Editor
          text={this.state.text}
          onChange={this.handleChange}
        />
        <Editor
            text={this.state.text}
            onBlur={this.handleChange}
            />
        <hr/>
        <Editor
            text={this.state.text}
            onKeyUp={this.handleKeyUp}
            />
      </div>
    );
  },

  handleChange(text) {
    this.setState({text: text});
  },

  handleKeyUp(event) {
    console.log('=========',event);
  }

});

React.render(<App/>, document.body);
