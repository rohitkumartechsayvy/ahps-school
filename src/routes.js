import Home from './Home';
import About from './pages/About';

export default [
  { path: "/about", component: About, isPrivate: false },
  { path: "", component: Home, isPrivate: false },
];