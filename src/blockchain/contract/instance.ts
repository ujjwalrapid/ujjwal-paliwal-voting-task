import Web3 from "web3";
import { votingabi } from "./abi";
import { VOTING_ADDRESS } from "./address";

const web3 = new Web3(Web3.givenProvider)

export const voteContract = new web3.eth.Contract(votingabi , VOTING_ADDRESS);