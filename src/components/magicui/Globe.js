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
import { cn } from "../../lib/utils";
import createGlobe from "cobe";
import { useCallback, useEffect, useRef } from "react";
import { useSpring } from "react-spring";
var GLOBE_CONFIG = {
    width: 800,
    height: 800,
    onRender: function () { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.1 },
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [30.0444, 31.2357], size: 0.07 },
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [-23.5505, -46.6333], size: 0.1 },
        { location: [19.4326, -99.1332], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [34.6937, 135.5022], size: 0.05 },
        { location: [41.0082, 28.9784], size: 0.06 },
    ],
};
export default function Globe(_a) {
    var className = _a.className, _b = _a.config, config = _b === void 0 ? GLOBE_CONFIG : _b;
    var phi = 0;
    var width = 0;
    var canvasRef = useRef(null);
    var pointerInteracting = useRef(null);
    var pointerInteractionMovement = useRef(0);
    var _c = useSpring(function () { return ({
        r: 0,
        config: {
            mass: 1,
            tension: 280,
            friction: 40,
            precision: 0.001,
        },
    }); }), r = _c[0].r, api = _c[1];
    var updatePointerInteraction = function (value) {
        pointerInteracting.current = value;
        canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    };
    var updateMovement = function (clientX) {
        if (pointerInteracting.current !== null) {
            var delta = clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 200 });
        }
    };
    var onRender = useCallback(function (state) {
        if (!pointerInteracting.current)
            phi += 0.005;
        state.phi = phi + r.get();
        state.width = width * 2;
        state.height = width * 2;
    }, [pointerInteracting, phi, r]);
    var onResize = function () {
        if (canvasRef.current) {
            width = canvasRef.current.offsetWidth;
        }
    };
    useEffect(function () {
        window.addEventListener("resize", onResize);
        onResize();
        var globe = createGlobe(canvasRef.current, __assign(__assign({}, config), { width: width * 2, height: width * 2, onRender: onRender }));
        setTimeout(function () { return (canvasRef.current.style.opacity = "1"); });
        return function () { return globe.destroy(); };
    }, []);
    return (_jsx("div", __assign({ className: cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className) }, { children: _jsx("canvas", { className: cn("h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"), ref: canvasRef, onPointerDown: function (e) {
                return updatePointerInteraction(e.clientX - pointerInteractionMovement.current);
            }, onPointerUp: function () { return updatePointerInteraction(null); }, onPointerOut: function () { return updatePointerInteraction(null); }, onMouseMove: function (e) { return updateMovement(e.clientX); }, onTouchMove: function (e) {
                return e.touches[0] && updateMovement(e.touches[0].clientX);
            } }) })));
}
