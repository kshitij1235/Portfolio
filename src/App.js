import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css'; // Import your global styles
import TitleScreen from './pages/TitleScreen';
function App() {
    return (_jsx(_Fragment, { children: _jsx(TitleScreen, {}) }));
}
export default App;
