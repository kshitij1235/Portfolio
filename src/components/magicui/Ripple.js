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
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
// Modify these
var MAIN_CIRCLE_SIZE = 210;
var MAIN_CIRCLE_OPACITY = 0.24;
var NUM_CIRCLES = 8;
var Ripple = React.memo(function () {
    return (_jsx("div", __assign({ className: "absolute left-1/2 top-1/2 h-full w-full overflow-visible" }, { children: Array.from({ length: NUM_CIRCLES }, function (_, i) { return (_jsx("div", { className: "absolute -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full bg-neutral-400", style: {
                width: MAIN_CIRCLE_SIZE + i * 70,
                height: MAIN_CIRCLE_SIZE + i * 70,
                opacity: MAIN_CIRCLE_OPACITY - i * 0.03,
                animationDelay: "".concat(i * 0.06, "s"),
            } }, i)); }) })));
});
export default Ripple;
