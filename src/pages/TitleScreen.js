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
import { Fragment, useState } from "react";
import BlurIn from "../components/magicui/Blur-in";
import Particles from "../components/magicui/Particles";
import NumberTicker from "../components/magicui/number-ticker";
import ProjectPopup from "./projectsPopUp";
import ProjectsList from "../projectList";
function TitleScreen() {
    var divStyle = {
        position: "absolute",
        display: 'flex',
        top: 0,
        left: 0,
        padding: "20px",
    };
    var _a = useState(false), popup = _a[0], setPopup = _a[1];
    var togglePopup = function () {
        setPopup(!popup);
    };
    return (_jsxs(Fragment, { children: [_jsx("div", __assign({ style: divStyle }, { children: _jsxs("h1", __assign({ style: { fontFamily: "monospace", textAlign: "center" } }, { children: [_jsx("a", __assign({ onClick: togglePopup }, { children: "My projects" })), " (", _jsx(NumberTicker, { value: ProjectsList.projects.length }), ")"] })) })), _jsx(Particles, { color: "black", quantity: 200 }), _jsx(Particles, { color: "black", size: 0.3 }), _jsxs("div", __assign({ style: {
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: "20px", // Add padding for mobile layout
                } }, { children: [_jsx("div", __assign({ style: {
                            fontFamily: "monospace",
                            fontWeight: "normal",
                            fontSize: "20px",
                            marginBottom: "5px",
                            textAlign: "center",
                        } }, { children: _jsx(BlurIn, { word: "HI , I AM KSHITIJ JATHAR", duration: 1 }) })), _jsx("div", __assign({ style: {
                            textAlign: "center",
                            fontFamily: "monospace",
                            fontWeight: "normal",
                            fontSize: "14px",
                        } }, { children: _jsx(BlurIn, { word: "AM 22 , AND I LIKE TO CODE !!", duration: 2 }) }))] })), popup && _jsx(ProjectPopup, { trigger: popup, setTrigger: setPopup })] }));
}
export default TitleScreen;
