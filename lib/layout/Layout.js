"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _AppBar = _interopRequireDefault(require("./AppBar"));

var _reactAdmin = require("react-admin");

var _react = _interopRequireDefault(require("react"));

var CustomLayout = function CustomLayout(props) {
  return _react["default"].createElement(_reactAdmin.Layout, (0, _extends2["default"])({
    appBar: _AppBar["default"]
  }, props));
};

var _default = CustomLayout;
exports["default"] = _default;