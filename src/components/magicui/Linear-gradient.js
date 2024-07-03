import { jsx as _jsx } from "react/jsx-runtime";
var LinearGradient = function (_a) {
    var _b = _a.from, from = _b === void 0 ? "#00000000" : _b, _c = _a.to, to = _c === void 0 ? "rgba(120,119,198,0.3)" : _c, _d = _a.width, width = _d === void 0 ? "100%" : _d, _e = _a.height, height = _e === void 0 ? "100%" : _e, _f = _a.transitionPoint, transitionPoint = _f === void 0 ? "50%" : _f, _g = _a.direction, direction = _g === void 0 ? "bottom" : _g, className = _a.className;
    var styles = {
        position: "absolute",
        pointerEvents: "none",
        inset: 0,
        width: width,
        height: height,
        background: "linear-gradient(to ".concat(direction, ", ").concat(from, ", ").concat(transitionPoint, ", ").concat(to, ")"),
    };
    return _jsx("div", { className: className, style: styles });
};
export default LinearGradient;
