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
import { useState } from "react";
import './projectPopup.css';
import Popupcontent from "./Popupcontent";
import ProjectsList from "../projectList";
var ProjectPopup = function (_a) {
    var trigger = _a.trigger, setTrigger = _a.setTrigger;
    var _b = useState(null), project = _b[0], setProject = _b[1];
    var handleProjectSelect = function (proj) {
        setProject(proj);
    };
    return trigger ? (_jsx("div", __assign({ className: "popup-container" }, { children: _jsx("div", __assign({ className: "popup" }, { children: _jsxs("div", __assign({ className: "popup-content" }, { children: [_jsxs("div", __assign({ className: "sidebar" }, { children: [_jsx("h1", __assign({ style: { fontFamily: "monospace", paddingLeft: "31%" } }, { children: "projects" })), _jsx("div", { style: { padding: "10px" } }), _jsx("ul", { children: ProjectsList.projects.map(function (proj, index) { return (_jsx("li", { children: _jsx("button", __assign({ className: "ProjectButton", onClick: function () { return handleProjectSelect(proj); } }, { children: proj.name })) }, index)); }) })] })), _jsx("button", __assign({ className: "close-button", onClick: function () { return setTrigger(false); } }, { children: "X" })), _jsx("div", __assign({ className: "main-content" }, { children: _jsx(Popupcontent, { project: project }) }))] })) })) }))) : null;
};
export default ProjectPopup;
