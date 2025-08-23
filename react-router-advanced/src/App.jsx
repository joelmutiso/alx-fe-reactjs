import React, { useState, createContext, useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
  useParams,
  Navigate,
} from 'react-router-dom';

// 1. Create a simple authentication context to simulate user login
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (username, callback) => {
    setUser({ username });
    callback();
  };

  const signOut = (callback) => {
    setUser(null);
    callback();
  };

  const value = { user, signIn, signOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// A helper hook to get the auth context, now exported
export const useAuth = () => {
  return useContext(AuthContext);
};

// 2. A component to protect routes
const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  
  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Components for the different routes
const Home = () => (
  <div className="flex flex-col items-center justify-center p-8 text-center min-h-[calc(100vh-64px)]">
    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Welcome to the App!</h1>
    <p className="text-xl text-gray-600">Explore the different routes in the navigation bar.</p>
  </div>
);

const About = () => (
  <div className="flex flex-col items-center justify-center p-8 text-center min-h-[calc(100vh-64px)]">
    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Us</h1>
    <p className="text-xl text-gray-600">This is an example of a simple React Router application.</p>
  </div>
);

const LoginPage = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    auth.signIn(username, () => {
      navigate('/profile');
    });
  };

  if (auth.user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-[calc(100vh-64px)]">
      <form onSubmit={handleLogin} className="w-full max-w-sm p-8 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

const LogoutButton = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth.signOut(() => {
      navigate('/');
    });
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white font-semibold py-1.5 px-4 rounded-lg shadow-md hover:bg-red-700 transition-colors"
    >
      Sign Out
    </button>
  );
};

const Profile = () => {
  const auth = useAuth();
  return (
    <div className="p-8 min-h-[calc(100vh-64px)]">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Hello, {auth.user.username}!
      </h1>
      <p className="text-gray-600 mb-6">
        This is your protected profile page.
      </p>

      <nav className="flex space-x-4 mb-8 border-b border-gray-300 pb-2">
        <Link to="details" className="text-blue-600 hover:underline">
          Profile Details
        </Link>
        <Link to="settings" className="text-blue-600 hover:underline">
          Profile Settings
        </Link>
      </nav>

      <Outlet />
    </div>
  );
};

const ProfileDetails = () => (
  <div className="p-4 bg-gray-50 rounded-lg">
    <h2 className="text-2xl font-semibold mb-2">Details</h2>
    <p className="text-gray-700">Here you can see your personal information.</p>
    <ul className="list-disc list-inside mt-4 text-gray-700">
      <li>Name: John Doe</li>
      <li>Email: john.doe@example.com</li>
    </ul>
  </div>
);

const ProfileSettings = () => (
  <div className="p-4 bg-gray-50 rounded-lg">
    <h2 className="text-2xl font-semibold mb-2">Settings</h2>
    <p className="text-gray-700">You can update your account settings here.</p>
  </div>
);

const BlogPost = () => {
  const { postId } = useParams();

  const posts = {
    1: { title: 'First Blog Post', content: 'This is the content of the first blog post.' },
    2: { title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
    3: { title: 'Third Blog Post', content: 'This is the content of the third blog post.' },
  };

  const post = posts[postId];

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center min-h-[calc(100vh-64px)]">
        <h1 className="text-3xl font-bold text-gray-900">Post Not Found</h1>
        <p className="text-gray-600 mt-2">The requested post does not exist.</p>
      </div>
    );
  }

  return (
    <div className="p-8 min-h-[calc(100vh-64px)] max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{post.content}</p>
    </div>
  );
};

const Navbar = () => {
  const auth = useAuth();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-800 font-bold text-xl hover:text-gray-600 transition-colors">
              App
            </Link>
            <div className="space-x-4">
              <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link to="/profile" className="text-gray-600 hover:text-gray-900 transition-colors">
                Profile
              </Link>
              <Link to="/posts/1" className="text-gray-600 hover:text-gray-900 transition-colors">
                Blog Post 1
              </Link>
            </div>
          </div>
          <div>
            {auth.user ? <LogoutButton /> : <Link to="/login" className="bg-blue-600 text-white font-semibold py-1.5 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors">Sign In</Link>}
          </div>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/posts/:postId" element={<BlogPost />} />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              <Route index element={<ProfileDetails />} />
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
          </Routes>
        </main>
      </AuthProvider>
    </Router>
  );
};

export default App;
