"use client";
import "@near-wallet-selector/modal-ui/styles.css";

import { NetworkId } from "@/config";
import { useInitWallet } from "@/wallets/wallet-selector";
import Header from "./components/header";

export default function RootLayout({ children }) {
  useInitWallet({ createAccessKeyFor: "", networkId: NetworkId });

  return (
    <>
      <Header />
      {children}
    </>
  );
}
