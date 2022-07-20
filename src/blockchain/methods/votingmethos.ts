import { voteContract } from "../contract/instance";

export const getCandidate1=async(id:any,setGetCount1:any)=>{
    const CandidatesData = await voteContract.methods.candidates(id).call();
    console.log(CandidatesData.voteCount);
    setGetCount1(CandidatesData.voteCount);
    return CandidatesData.voteCount
 }
 export const getCandidate2=async(id:any,setGetCount2:any)=>{
    const CandidatesData = await voteContract.methods.candidates(id).call();
    console.log(CandidatesData.voteCount);
    setGetCount2(CandidatesData.voteCount);
    return CandidatesData.voteCount
 }

export const VoteCandidate1=async()=>{
  const UserAddress = JSON.parse(`${localStorage.getItem("adddress")}`);
  console.log("333",UserAddress);
    try {
        const sellItem = await voteContract.methods.vote(1).send({ from: UserAddress });
    } catch (error) {
        console.log(error)
    }
}

export const VoteCandidate2=async()=>{
    const UserAddress = JSON.parse(`${localStorage.getItem("adddress")}`);
    console.log("333",UserAddress);
      try {
          const sellItem = await voteContract.methods.vote(2).send({ from: UserAddress });
      } catch (error) {
          console.log(error)
      }
  }