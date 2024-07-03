"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
export function SeparateAway(_a) {
    var upper_text = _a.upper_text, lower_text = _a.lower_text, _b = _a.duration, duration = _b === void 0 ? 1.5 : _b, _c = _a.hidden_opacity, hidden_opacity = _c === void 0 ? 0 : _c, _d = _a.visible_opacity, visible_opacity = _d === void 0 ? 1 : _d, className = _a.className;
    var separate = {
        hidden: { opacity: hidden_opacity, y: 0 },
        visible: function (custom) { return ({
            opacity: visible_opacity,
            y: custom * 5,
            transition: { duration: duration },
        }); },
    };
    return (_jsxs("div", { children: [_jsx(motion.h1, __assign({ custom: -1, variants: separate, initial: "hidden", animate: "visible", className: cn(className) }, { children: upper_text })), _jsx(motion.h1, __assign({ custom: 1, variants: separate, initial: "hidden", animate: "visible", className: cn(className) }, { children: lower_text }))] }));
}
export default SeparateAway;
