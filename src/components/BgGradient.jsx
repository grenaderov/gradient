import React from "react";
import { BgGradientView } from "./BgGradientView";

export class BgGradient extends React.Component {
  state = {
    colorFrom: {
      code: "#afffff",
      error: false
    },
    colorTo: {
      code: "#e00000",
      error: false
    },
    selectedType: "colorFrom"
  };

  setColorBg = (type, code) => {
    this.setState({
      [type]: {
        code,
        error: !/^#[0-9A-F]{6}$/i.test(code)
      },
      selectedType: type
    });
  };

  handleChangeColor = color => {
    this.setColorBg(this.state.selectedType, color.hex);
  };

  render() {
    return (
      <BgGradientView
        state={this.state}
        setColorBg={this.setColorBg}
        handleChangeColor={this.handleChangeColor}
      />
    );
  }
}
