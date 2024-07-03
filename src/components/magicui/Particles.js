import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
function useMousePosition() {
    var _a = useState({
        x: 0,
        y: 0,
    }), mousePosition = _a[0], setMousePosition = _a[1];
    useEffect(function () {
        var handleMouseMove = function (event) {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return function () {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return mousePosition;
}
function hexToRgb(hex) {
    hex = hex.replace("#", "");
    var hexInt = parseInt(hex, 16);
    var red = (hexInt >> 16) & 255;
    var green = (hexInt >> 8) & 255;
    var blue = hexInt & 255;
    return [red, green, blue];
}
var Particles = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.quantity, quantity = _c === void 0 ? 100 : _c, _d = _a.staticity, staticity = _d === void 0 ? 50 : _d, _e = _a.ease, ease = _e === void 0 ? 50 : _e, _f = _a.size, size = _f === void 0 ? 0.4 : _f, _g = _a.refresh, refresh = _g === void 0 ? false : _g, _h = _a.color, color = _h === void 0 ? "#ffffff" : _h, _j = _a.vx, vx = _j === void 0 ? 0 : _j, _k = _a.vy, vy = _k === void 0 ? 0 : _k;
    var canvasRef = useRef(null);
    var context = useRef(null);
    var circles = useRef([]);
    var mousePosition = useMousePosition();
    var mouse = useRef({ x: 0, y: 0 });
    var canvasSize = useRef({ w: 0, h: 0 });
    var dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
    useEffect(function () {
        if (canvasRef.current) {
            context.current = canvasRef.current.getContext("2d");
            resizeCanvas();
            animate();
        }
        window.addEventListener("resize", resizeCanvas);
        return function () {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);
    useEffect(function () {
        onMouseMove();
    }, [mousePosition.x, mousePosition.y]);
    useEffect(function () {
        clearCanvas();
        drawParticles();
    }, [refresh, color, quantity]);
    var onMouseMove = function () {
        var _a = canvasSize.current, w = _a.w, h = _a.h;
        var x = mousePosition.x - w / 2;
        var y = mousePosition.y - h / 2;
        mouse.current.x = x;
        mouse.current.y = y;
    };
    var resizeCanvas = function () {
        var _a = document.documentElement, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
        canvasSize.current.w = clientWidth;
        canvasSize.current.h = clientHeight;
        canvasRef.current.width = clientWidth * dpr;
        canvasRef.current.height = clientHeight * dpr;
        canvasRef.current.style.width = "".concat(clientWidth, "px");
        canvasRef.current.style.height = "".concat(clientHeight, "px");
        if (context.current) {
            context.current.scale(dpr, dpr);
        }
        clearCanvas();
        drawParticles();
    };
    var circleParams = function () {
        var x = Math.random() * canvasSize.current.w;
        var y = Math.random() * canvasSize.current.h;
        var translateX = 0;
        var translateY = 0;
        var pSize = Math.floor(Math.random() * 2) + size;
        var alpha = 0;
        var targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
        var dx = (Math.random() - 0.5) * 0.1;
        var dy = (Math.random() - 0.5) * 0.1;
        var magnetism = 0.1 + Math.random() * 4;
        return {
            x: x,
            y: y,
            translateX: translateX,
            translateY: translateY,
            size: pSize,
            alpha: alpha,
            targetAlpha: targetAlpha,
            dx: dx,
            dy: dy,
            magnetism: magnetism,
        };
    };
    var rgb = hexToRgb(color);
    var drawCircle = function (circle, update) {
        if (update === void 0) { update = false; }
        if (context.current) {
            var x = circle.x, y = circle.y, translateX = circle.translateX, translateY = circle.translateY, size_1 = circle.size, alpha = circle.alpha;
            context.current.translate(translateX, translateY);
            context.current.beginPath();
            context.current.arc(x, y, size_1, 0, 2 * Math.PI);
            context.current.fillStyle = "rgba(".concat(rgb.join(", "), ", ").concat(alpha, ")");
            context.current.fill();
            context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
            if (!update) {
                circles.current.push(circle);
            }
        }
    };
    var clearCanvas = function () {
        if (context.current) {
            context.current.clearRect(0, 0, canvasSize.current.w * dpr, canvasSize.current.h * dpr);
        }
    };
    var drawParticles = function () {
        clearCanvas();
        var particleCount = quantity;
        for (var i = 0; i < particleCount; i++) {
            var circle = circleParams();
            drawCircle(circle);
        }
    };
    var remapValue = function (value, start1, end1, start2, end2) {
        var remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
        return remapped > 0 ? remapped : 0;
    };
    var animate = function () {
        clearCanvas();
        circles.current.forEach(function (circle, i) {
            var edge = [
                circle.x + circle.translateX - circle.size,
                canvasSize.current.w - circle.x - circle.translateX - circle.size,
                circle.y + circle.translateY - circle.size,
                canvasSize.current.h - circle.y - circle.translateY - circle.size,
            ];
            var closestEdge = edge.reduce(function (a, b) { return Math.min(a, b); });
            var remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));
            if (remapClosestEdge > 1) {
                circle.alpha += 0.02;
                if (circle.alpha > circle.targetAlpha) {
                    circle.alpha = circle.targetAlpha;
                }
            }
            else {
                circle.alpha = circle.targetAlpha * remapClosestEdge;
            }
            circle.x += circle.dx + vx;
            circle.y += circle.dy + vy;
            circle.translateX +=
                (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
                    ease;
            circle.translateY +=
                (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
                    ease;
            drawCircle(circle, true);
            if (circle.x < -circle.size ||
                circle.x > canvasSize.current.w + circle.size ||
                circle.y < -circle.size ||
                circle.y > canvasSize.current.h + circle.size) {
                circles.current.splice(i, 1);
                var newCircle = circleParams();
                drawCircle(newCircle);
            }
        });
        window.requestAnimationFrame(animate);
    };
    return (_jsx("canvas", { ref: canvasRef, className: className, style: { position: "fixed", top: 0, left: 0, zIndex: -1 } }));
};
export default Particles;
