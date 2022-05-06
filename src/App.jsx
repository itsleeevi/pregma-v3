import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import Web3 from "web3";
import { PregmaContext } from "./contexts/PregmaContext";

import "./css/style.scss";
import "aos/dist/aos.css";

import Pools from "./pages/Pools";
import Yields from "./pages/Yields";
import Bank from "./pages/Bank";
import PageNotFound from "./pages/utility/PageNotFound";

function App() {
  // web3 hooks
  const [connected, setConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [web3, setWeb3] = useState(undefined);

  const connectMetaMask = async () => {
    if (window.ethereum && window.ethereum.isConnected) {
      const accs = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accs);
      if (accs.length > 0) {
        setConnected(true);
      } else setConnected(false);
    } else {
      //router.push("https://metamask.io/");
    }
  };

  useEffect(() => {
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
      duration: 750,
      easing: "ease-out-quart",
    });
  }, []);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum && window.ethereum.isConnected) {
        const accs = await window.ethereum
          .request({
            method: "eth_accounts",
          })
          .catch((err) => {
            console.error(err);
          });
        //const web3 = new Web3(window.ethereum);

        setAccounts(accs);
        //setWeb3(web3);

        if (accs.length > 0) {
          setConnected(true);
        } else setConnected(false);
      }
    };

    init();
  }, []);

  return (
    <>
      <PregmaContext.Provider
        value={{ AOS, connected, accounts, web3, connectMetaMask }}
      >
        <Routes>
          <Route path="/" element={<Yields />} />
          <Route path="/yields" element={<Yields />} />
          <Route path="/pools" element={<Pools />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </PregmaContext.Provider>
    </>
  );
}

export default App;
