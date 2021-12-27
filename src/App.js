import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Game from "./components/game/Game";
import Nft from "./components/nft/Nft";
import Roadmap from "./components/roadmap/Roadmap";
import Footer from "./components/footer/Footer";
import Team from "./components/team/Team";
import DogeGame from "./components/dogegame/DogeGame";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Helmet>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Doge Run Token</title>
            <link rel="canonical" href="http://mysite.com/example" />
            <meta name="description" content="To the moon" />
          </Helmet>
        </Helmet>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/nft" element={<Nft />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/team" element={<Team />} />
          <Route path="/demo" element={<DogeGame />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
