import React from "react";
import classNames from "classnames";
import { Send, X, MessageCircle } from "react-feather";
import { Parser } from "html-to-react";

export default class TextChat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showChatWindow: true,
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { handleTextChat } = this.props;
    handleTextChat(this.state.value);
    event.preventDefault();
    //clear text input
    this.setState({ value: "" });
  }

  handleCloseChat() {
    console.log("attempting to close text chat window");
  }

  componentDidUpdate() {
    // NOTE: any component update will cause it to scroll. This includes typing in the chatbox.
    // might want to change if this is not desired behavior
    this.scrollToBottom();
  }

  scrollToBottom() {
    //scroll messages window to bottom
    this.el.scrollTop = this.el.scrollHeight
  }

  //modified from https://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript
  urlify(text) {
    var htmlToReactParser = new Parser();
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    var processed = text.replace(urlRegex, function (url) {
      return '<a href="' + url + '">' + url + "</a>";
    });
    return htmlToReactParser.parse(processed);
  }

  render() {
    const { showChatWindow } = this.state;

    const urlify = this.urlify.bind(this);

    return (
      <div id="text-chat">
        <div id="messages" ref={el => { this.el = el; }} >
          {this.props.chatMessages.map(function (item) {
            return (
              <div className="bla-bla-class" key={item.sendTime}>
                {item.sender}: {urlify(item.msg)}
              </div>
            );
          })}
        </div>
        <form id="messageForm" onSubmit={this.handleSubmit}>
          <input
            id="msgContent"
            type="text"
            required
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button id="sendButton" className="button-primary" type="submit" title="Send Message">
            <Send />
          </button>
        </form>
      </div>
    );
  }
}
