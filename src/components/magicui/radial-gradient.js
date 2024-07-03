import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
var RadialGradient = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "circle" : _b, _c = _a.from, from = _c === void 0 ? "#E0E0E0" : _c, // Light gray
    _d = _a.to, // Light gray
    to = _d === void 0 ? "#FFFFFF" : _d, // White
    _e = _a.size, // White
    size = _e === void 0 ? 300 : _e, _f = _a.origin, origin = _f === void 0 ? "center" : _f, className = _a.className;
    var _g = useState(false), fadeIn = _g[0], setFadeIn = _g[1];
    useEffect(function () {
        // Triggering fade-in after component mounts
        setFadeIn(true);
    }, []);
    var styles = {
        position: "absolute",
        pointerEvents: "none",
        inset: 0,
        backgroundImage: "radial-gradient(".concat(type, " ").concat(size, "px at ").concat(origin, ", ").concat(from, ", ").concat(to, ")"),
        opacity: fadeIn ? 0.5 : 0,
        borderRadius: type === "circle" ? "100%" : "100px",
        filter: "blur(3px) contrast(95%)",
        zIndex: -1,
        transform: "scale(2) translate(-1%, -1%)",
        transition: "opacity 2s ease", // CSS transition for opacity
    };
    return _jsx("div", { className: className, style: styles });
};
export default RadialGradient;
