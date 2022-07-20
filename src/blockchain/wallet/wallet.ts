import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import Web3 from "web3";

export const CHAIN_ID: any = 97;
export const web3 = new Web3(
  Web3.givenProvider || "https://http-testnet.cube.network"
);

export const injector = new InjectedConnector({
  supportedChainIds: [CHAIN_ID],
});

