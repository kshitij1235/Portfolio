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
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export var TextRevealByWord = function (_a) {
    var text = _a.text, className = _a.className;
    var targetRef = useRef(null);
    var scrollYProgress = useScroll({
        target: targetRef,
    }).scrollYProgress;
    var words = text.split(" ");
    return (_jsx("div", __assign({ ref: targetRef, className: cn("relative z-0 h-[200vh]", className) }, { children: _jsx("div", __assign({ className: "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]" }, { children: _jsx("p", __assign({ ref: targetRef, className: "flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl" }, { children: words.map(function (word, i) {
                    var start = i / words.length;
                    var end = start + 1 / words.length;
                    return (_jsx(Word, __assign({ progress: scrollYProgress, range: [start, end] }, { children: word }), i));
                }) })) })) })));
};
var Word = function (_a) {
    var children = _a.children, progress = _a.progress, range = _a.range;
    var opacity = useTransform(progress, range, [0, 1]);
    return (_jsxs("span", __assign({ className: "xl:lg-3 relative mx-1 lg:mx-2.5" }, { children: [_jsx("span", __assign({ className: "absolute opacity-30" }, { children: children })), _jsx(motion.span, __assign({ style: { opacity: opacity }, className: "text-black dark:text-white" }, { children: children }))] })));
};
export default TextRevealByWord;
