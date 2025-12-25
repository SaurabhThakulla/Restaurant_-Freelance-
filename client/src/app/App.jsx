import { Route, Switch } from "wouter";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HomePage from "@/pages/HomePage";
import OrderPage from "@/pages/OrderPage";
import StoriesPage from "@/pages/StoriesPage";

export default function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/stories" component={StoriesPage} />
      </Switch>

      <Footer />
    </>
  );
}
