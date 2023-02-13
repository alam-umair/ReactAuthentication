import { Route, Routes } from "react-router-dom";

import Layout from "./componens/Layout/Layout";
import UserProfile from "./componens/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/auth" element={<AuthPage />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
