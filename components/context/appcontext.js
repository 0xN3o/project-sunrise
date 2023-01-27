import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  // Application modal
  let defaultAppModal = {
    show: false,
    type: "dialog", // "dialog" or "progress"
    title: "Title",
    description: "Description",
    onClose: () => {},
  };
  const [appModal, setAppModal] = useState(defaultAppModal);

  const providerValue = useMemo(
    () => ({
      web3,
      setWeb3,
      contract,
      setContract,
      account,
      setAccount,
      appModal,
      setAppModal,
    }),
    [
      web3,
      setWeb3,
      contract,
      setContract,
      account,
      setAccount,
      appModal,
      setAppModal,
    ]
  );

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
