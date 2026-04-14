import { Route, Switch } from "wouter";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Documents from "./pages/Documents";
import Shop from "./pages/Shop";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />

        {/* Teams */}
        <Route path="/teams/:team" component={Teams} />
        <Route path="/teams" component={Teams} />

        {/* Pages */}
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/documents" component={Documents} />
        <Route path="/shop" component={Shop} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/contact" component={Contact} />

        {/* News */}
        <Route path="/news/:id" component={News} />
        <Route path="/news" component={News} />

        {/* Admin */}
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/admin" component={Admin} />
      </Switch>
    </Layout>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}