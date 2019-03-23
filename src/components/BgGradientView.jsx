import React from "react";
import { SketchPicker } from "react-color";

export const BgGradientView = ({
  state: { colorFrom, colorTo, selectedType },
  state,
  setColorBg,
  handleChangeColor
}) => {
  const activeColor = state[selectedType].code;
  return (
    <div
      className="wrapper pt-5"
      style={{
        background: `linear-gradient(${colorFrom.code}, ${colorTo.code})`
      }}
    >
      <div className="container">
        <form>
          <div className="row">
            <div className="col-2 offset-4">
              <input
                id="colorFrom"
                className="form-control"
                type="text"
                value={colorFrom.code || ""}
                onChange={e => setColorBg("colorFrom", e.target.value)}
                onClick={e => setColorBg("colorFrom", e.target.value)}
              />
              {colorFrom.error && (
                <small id="colorFrom" className="form-text text-danger">
                  Неправильный формат
                </small>
              )}
            </div>
            <div className="col-2">
              <input
                id="colorTo"
                className="form-control"
                type="text"
                value={colorTo.code || ""}
                onChange={e => setColorBg("colorTo", e.target.value)}
                onClick={e => setColorBg("colorTo", e.target.value)}
              />
              {colorTo.error && (
                <small id="colorTo" className="form-text text-danger">
                  Неправильный формат
                </small>
              )}
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-4 offset-4 d-flex justify-content-center">
              <SketchPicker
                color={activeColor}
                onChangeComplete={handleChangeColor}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
