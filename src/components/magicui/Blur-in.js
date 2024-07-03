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
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
var BlurIn = function (_a) {
    var word = _a.word, className = _a.className, variant = _a.variant, _b = _a.duration, duration = _b === void 0 ? 1 : _b;
    var defaultVariants = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };
    var combinedVariants = variant || defaultVariants;
    return (_jsx(motion.h1, __assign({ initial: "hidden", animate: "visible", transition: { duration: duration }, variants: combinedVariants, className: cn(className, "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]") }, { children: word })));
};
export default BlurIn;
