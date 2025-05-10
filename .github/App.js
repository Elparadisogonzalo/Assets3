import { config } from './config';
import { ethers } from 'ethers';

async function connectWallet() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const userAddress = await signer.getAddress();

    console.log("Connected wallet:", 0x802ba6a112f4a7bbbc2d63c8ef4bc14dfcbe6245);

    const contract = new ethers.Contract(0x4e8c73e7f243d12b7a5571200609523a4890beff
      config.contract.address,
      config.contract.abi,
      signer
    );

    // Example: Read or call contract functions
    // const result = await contract.someReadFunction();
  }
}
