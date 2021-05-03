import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const initialState = { color: "red", showEmoji: false };

class App extends React.Component { state = { ...initialState };
componentDidMount() { try {
const deserialisedState = JSON.parse( window.localStorage.getItem("state")
);
this.setState({ ...deserialisedState });
} catch (err) {}
}
componentDidUpdate() {
const serialisedState = JSON.stringify(this.state); window.localStorage.setItem("state", serialisedState);
}
toggleShowEmoji = () => {
this.setState({ showEmoji: !this.state.showEmoji });
};
handleChangeColor = e => {
this.setState({ color: e.target.value });
};
handleClearLocalStorage = () => { window.localStorage.clear();
};
render() { return (
<div className={`App ${this.state.color}`}>
<div className="flex">
<button className="flex-child" onClick={() => this.toggleShowEmoji()}>
{`Click Here to ${this.state.showEmoji ? "Hide" : "Display"}
Emoji`}{" "}
</button>
<div className="emoji">{`${this.state.showEmoji ? "" : ""}`}</div>
<label> The Drop-down Menu Helps in Selecting Background Colors</label>
<select onChange={e => this.handleChangeColor(e)}>
<option value="red">RED</option>
<option value="yellow">YELLOW</option>
<option value="purple">PURPLE</option>
</select>
<button
className="flex-child"
onClick={() => this.handleClearLocalStorage()}
>
For Clearing Local Storage, Click Here!
</button>
</div>
</div>
);
}
}