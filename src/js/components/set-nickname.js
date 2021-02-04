import React from "react";
import { encodeRoom } from "../lib/room-encoding";

export default class SetNickname extends React.Component {
  constructor(props) {
    super(props);

    var savedNickname = this.getCookie("nickname");

    this.state = {
      nickname: savedNickname ? savedNickname : "",
    };
  }

  getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  setCookie(cname, name, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + name + ";" + expires + ";path=/";
  }

  onChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    this.setState({
      [evt.target.name]: value,
    });
  }

  onSetNickname() {
    const { onSetNickname } = this.props;
    const { nickname, saveName } = this.state;

    var formatName = nickname.replace(/\s\s+/g, " ");
    formatName = nickname.trim();

    if (saveName) {
      this.setCookie("nickname", formatName, 365); //save cookie for 365 days
    }
    onSetNickname(formatName);
  }

  render() {
    const { roomName, created } = this.props;
    const { nickname } = this.state;

    return (
      <div id="set-nickname" className="container">
        <h3>
          {created ? "Creating " : null}
          {roomName}
        </h3>
        <h5>Set a nickname:</h5>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.onSetNickname();
          }}
        >
          <div>
            <input
              type="text"
              name="nickname"
              value={nickname}
              placeholder="e.g. tom"
              onChange={(evt) => this.onChange(evt)}
              required
              minLength="3"
            />
          </div>
          <div>
            <input
              type="checkbox"
              name="saveName"
              value="yes"
              onChange={(evt) => this.onChange(evt)}
            />{" "}
            Save for future use
          </div>
          <div>
            <button type="submit" className="button-primary">
              Join Video Call
            </button>
          </div>
        </form>
      </div>
    );
  }
}
