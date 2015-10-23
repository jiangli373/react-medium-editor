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
        <hr/>
        <hr/>
        <hr/>
        <Editor
          tag="h1"
          text={this.state.text}
          onChange={this.handleChange}
          options={{
          toolbar: {
            /* These are the default options for the toolbar,
             if nothing is passed this is what is used */
            allowMultiParagraphSelection: true,
            buttons: ['bold', 'italic', 'underline', 'anchor', 'h3', 'quote', 'justifyLeft','justifyCenter','justifyRight','justifyFull','fontsize','removeFormat'],
            diffLeft: 0,
            diffTop: -10,
            firstButtonClass: 'medium-editor-button-first',
            lastButtonClass: 'medium-editor-button-last',
            standardizeSelectionStart: false,
            static: false,
            relativeContainer: null,

            /* options which only apply when static is true */
            align: 'center',
            sticky: false,
            updateOnEmptySelection: false
        }
        }}
        />
        <hr/>
        <hr/>
        <hr/>
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
