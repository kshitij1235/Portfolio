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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../lib/utils";
export default function Marquee(_a) {
    var className = _a.className, reverse = _a.reverse, _b = _a.pauseOnHover, pauseOnHover = _b === void 0 ? false : _b, children = _a.children, _c = _a.vertical, vertical = _c === void 0 ? false : _c, _d = _a.repeat, repeat = _d === void 0 ? 4 : _d, props = __rest(_a, ["className", "reverse", "pauseOnHover", "children", "vertical", "repeat"]);
    return (_jsx("div", __assign({}, props, { className: cn("group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]", {
            "flex-row": !vertical,
            "flex-col": vertical,
        }, className) }, { children: Array(repeat)
            .fill(0)
            .map(function (_, i) { return (_jsx("div", __assign({ className: cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
            }) }, { children: children }), i)); }) })));
}
