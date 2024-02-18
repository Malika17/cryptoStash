document.addEventListener("DOMContentLoaded", function () {
  //target elements
  document
    .getElementById("accountList")
    .addEventListener("click", changeAccount);
  document.getElementById("userAddress").addEventListener("click", copyAddress);
  document.getElementById("tranferFund").addEventListener("click", handler);
  document
    .getElementById("header_network")
    .addEventListener("click", getOpenNetwork);
  document
    .getElementById("network_item")
    .addEventListener("click", getSelectedNetwork);
  document.getElementById("add_network").addEventListener("click", setNetwork);
  document.getElementById("loginAccount").addEventListener("click", loginUser);
  document
    .getElementById("accountCreate")
    .addEventListener("click", createUser);
  document.getElementById("openCreate").addEventListener("click", openCreate);
  document.getElementById("sign_up").addEventListener("click", signUp);
  document.getElementById("login_up").addEventListener("click", login);
  document.getElementById("logout").addEventListener("click", logout);
  document
    .getElementById("open_transfer")
    .addEventListener("click", openTransfer);
  document.getElementById("goBack").addEventListener("click", goBack);
  document.getElementById("open_Import").addEventListener("click", openImport);
  document.getElementById("open_assets").addEventListener("click", openAssests);
  document
    .getElementById("open_activity")
    .addEventListener("click", openActivity);
  document.getElementById("goHomePage").addEventListener("click", goHomePage);
  document
    .getElementById("openAccountImport")
    .addEventListener("click", openImportModel);
  document
    .getElementById("close_import_account")
    .addEventListener("click", closeImportModel);
  document.getElementById("add_new_token").addEventListener("click", addToken);
  document
    .getElementById("add_new_account")
    .addEventListener("click", addAccount);
});

//STATE VARIABLE
let providerURL =
  "https://polygon-mumbai.g.alchemy.com/v2/3mbGSLz0TxV2R6w79GqIU0xHPNy-OCwR";
//let provider;
let privateKey;
let address;

//FUNCTION
function handler() {
  document.getElementById("tranfer_center").style.display = "flex";
  const amount = document.getElementById("amount").value;
  const address = document.getElementById("address").value;
  const private_key =
    "f8e07026f449fe6a6f66114237674eeb7594b13db56a97383015fc1b70e03f19";
  const testAccount = "0xcbfFc857fF664E96C3ea3a91391997D4c6A0a8F9";
  //PROVIDER
  const provider = new ethers.providers.JsonRpcProvider(providerURL);
  let wallet = new ethers.wallet(privateKey, provider);
  const tx = {
    to: address,
    value: ethers.utils.parseEther(amount),
  };
  let a = document.getElementById("link");
  a.href = "somelink url";
  wallet.sendTransaction(tx).then((txObj) => {
    console.log("txHash:", txObj.hash);
    document.getElementById("transfer_center").style.display = "none";
    const a = document.getElementById("link");
    document.getElementById("link").style.display = "block";
  });
}

function checkBalance() {
  const provider = new ethers.providers.JsonRpcProvider(providerURL);
  provider.getBalance(address).then((balance) => {
    const balanceInEth = ethers.utils.formatEther(balance);
    document.getElementById(
      "accountBalance"
    ).innerHTML = `${balanceInEth} MATIC`;
    document.getElementById("userAddress").innerHTML = `${address.slice(
      0,
      15
    )}`;
  });
}

function getOpenNetwork() {}

function getSelectedNetwork() {}

function setNetwork() {}

function loginUser() {}

function createUser() {}

function openCreate() {}

function signUp() {}

function login() {}

function logout() {}

function openTransfer() {}

function goBack() {}

function openImport() {}

function importGoBack() {}

function openActivity() {}

function openAssests() {}

function goHomePage() {}

function openImportModel() {}

function closeImportModel() {}

function addToken() {}

function addAccount() {}

function myFunction() {}

function copyAddress() {}

function changeAddress() {}
