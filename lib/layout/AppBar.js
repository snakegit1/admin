"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _reactAdmin = require("react-admin");

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _Logo = _interopRequireDefault(require("./Logo"));

var styles = {
  title: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },
  spacer: {
    flex: 1
  }
};
var CustomAppBar = (0, _styles.withStyles)(styles)(function (_ref) {
  var classes = _ref.classes,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["classes"]);
  return _react["default"].createElement(_reactAdmin.AppBar, props, _react["default"].createElement(_Typography["default"], {
    variant: "title",
    color: "inherit",
    className: classes.title,
    id: "react-admin-title"
  }), _react["default"].createElement(_Logo["default"], null), _react["default"].createElement("span", {
    className: classes.spacer
  }));
});
var _default = CustomAppBar;
exports["default"] = _default;