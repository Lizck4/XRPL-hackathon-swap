import xrplLogo from "../assets/xrpl.svg";

export default function renderXrplLogo() {
  document.getElementById("ending_logo").innerHTML = `
    <div class="flex items-center justify-center">
      <h1 class="font-bold text-black">Powered By</h1>
      <a href="https://xrpl.org/" target="_blank" class="logo_link">
        <img id="xrpl_logo" class="logo vanilla w-[150px]" alt="XRPL logo" src="${xrplLogo}" />
      </a>
    </div>
`;
}
