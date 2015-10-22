'use strict';

var React = require('react');
var MediumEditor = require('medium-editor');

module.exports = React.createClass({
  displayName: 'exports',

  getInitialState: function getInitialState() {
    return {
      text: this.props.text
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      tag: 'div'
    };
  },

  componentDidMount: function componentDidMount() {
    var _this = this;

    var dom = this.getDOMNode();
    this.medium = new MediumEditor(dom, this.props.options);

    this.medium.subscribe('editableInput', function (e) {
      _this._updated = true;
      _this.change(dom.innerHTML);
    });

    this.medium.subscribe('editableBlur', function (e) {
      _this.blur(dom.innerHTML, e);
    });

    this.medium.subscribe('editableKeyup', function (e) {
      _this.keyUp(e);
    });
  },

  componentWillUnmount: function componentWillUnmount() {
    this.medium.destroy();
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.state.text && !this._updated) {
      this.setState({ text: nextProps.text });
    }

    if (this._updated) this._updated = false;
  },

  render: function render() {
    return React.createElement(this.props.tag, {
      className: this.props.className,
      contentEditable: true,
      dangerouslySetInnerHTML: { __html: this.state.text }
    });
  },

  change: function change(text) {
    if (this.props.onChange) this.props.onChange(text);
  },

  blur: function blur(text) {
    if (this.props.onBlur) this.props.onBlur(text);
  },

  keyUp: function keyUp(event) {
    if (this.props.onKeyUp) this.props.onKeyUp(event);
  }
});