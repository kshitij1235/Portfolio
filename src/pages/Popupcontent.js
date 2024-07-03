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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
function Popupcontent(_a) {
    var project = _a.project;
    return (_jsx(_Fragment, { children: project ? (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "image-placeholder", style: { textAlign: 'center', margin: '20px', height: "400px", width: "1000px" } }, { children: _jsx("img", { src: project.image, alt: project.name, className: "project-image", style: { maxWidth: '100%', height: 'auto', borderRadius: '8px' } }) })), _jsx("a", __assign({ href: project.link, target: "_blank", rel: "noopener noreferrer", style: { display: 'block', textAlign: 'center', marginTop: '10px' } }, { children: "Learn more" })), _jsx("p", __assign({ style: { marginTop: '10px', fontSize: '16px', color: '#333' } }, { children: project.description }))] })) : (_jsx("p", { children: "Select a project to see the details" })) }));
}
export default Popupcontent;
