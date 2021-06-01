import { LeitorDeArquivo } from './Components/LeitorDeArquivo/LeitorDeArquivo.jsx'

import 'fontsource-roboto';

function App() {
    return (
        
<div class="Header">
  <div class="Header-background"></div>
  <div class="Header-content">
    <div class="Header-hero">
      <h1>Validador de Arquivos <br/> de Remessa</h1>
      <LeitorDeArquivo></LeitorDeArquivo>
      <p>Simples e fácil de usar.</p>
      <ReportDeArquivo></ReportDeArquivo>
    </div>
    <div class="Header-visuals">
    </div>
  </div>
</div>
    );
}

export default App;
