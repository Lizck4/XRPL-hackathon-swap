import vistiaLogo from "../assets/vistia-logo.svg";

export default function renderVistiaLogo() {
  document.getElementById("heading_logo").innerHTML = `
    <div class="flex text-center">
        <a href="https://t.me/visita_ai/7" target="_blank" class="logo_link">   
            <img id="vistia_logo" class="logo vanilla" alt="Vistia logo" src="${vistiaLogo}" />
        </a>
    </div>
`;
}
