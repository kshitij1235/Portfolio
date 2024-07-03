"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../lib/utils";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
export default function NumberTicker(_a) {
    var value = _a.value, _b = _a.direction, direction = _b === void 0 ? "up" : _b, _c = _a.delay, delay = _c === void 0 ? 0 : _c, className = _a.className;
    var ref = useRef(null);
    var motionValue = useMotionValue(direction === "down" ? value : 0);
    var springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    var isInView = useInView(ref, { once: true, margin: "0px" });
    useEffect(function () {
        isInView &&
            setTimeout(function () {
                motionValue.set(direction === "down" ? 0 : value);
            }, delay * 1000);
    }, [motionValue, isInView, delay, value, direction]);
    useEffect(function () {
        return springValue.on("change", function (latest) {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(latest.toFixed(0));
            }
        });
    }, [springValue]);
    return (_jsx("span", { className: cn("inline-block tabular-nums text-black dark:text-white", className), ref: ref }));
}
