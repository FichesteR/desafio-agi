# 🧪 Automação de Testes WEB -- Blog do Agi / Agibank

Este repositório contém a solução completa do **Desafio Técnico de QA
(Web)**, utilizando o framework **Cypress** para automação front-end,
com organização em comandos customizados, fixtures, testes resilientes e
pipeline CI/CD via **GitHub Actions**.

O objetivo foi automatizar cenários relacionados à pesquisa de artigos
no Blog do Agi, levando em conta o comportamento real da aplicação
(redirecionamento + AMP + WordPress dinâmico).

------------------------------------------------------------------------

# 🚀 Cenários Automatizados

## ✔ 1. Busca -- Resultados e estrutura da página

Validações: - Página de busca carrega corretamente - Estrutura mínima
visível - Links de artigos (quando existem) - Layout íntegro

## ✔ 2. Busca -- Termos sem resultado

Valida: - Comportamento esperado para busca vazia - Página funciona sem
erros críticos

## ✔ 3. Performance -- Tempo de carregamento

Uso da Navigation Timing API: - Mede tempo real de carregamento - SLA
definido (\< 3000ms)

## ✔ 4. Responsividade -- Multi-devices

Cobertura: - iPhone SE2, iPhone X, iPhone 8 - iPad 2 - Macbook 13/15 -
Samsung S10

## ✔ 5. Segurança -- XSS, Unicode e caracteres especiais

Valida: - Estabilidade do site com entradas maliciosas - Sanitização
adequada

------------------------------------------------------------------------

# 🧱 Boas Práticas Aplicadas

-   Custom Commands modulares
-   Uso de fixtures
-   Testes resilientes (AMP + re-renderização)
-   Comentários
-   Pipeline CI/CD configurado
-   Arquitetura limpa e profissional

------------------------------------------------------------------------

# 🌐 Pipeline -- GitHub Actions

Arquivo: `.github/workflows/cypress-ci.yml`

Executa: - Instalação - Execução headless - Upload de screenshots e
vídeos - Validação automática por push/PR

------------------------------------------------------------------------

# 🛠 Instalação e Execução

### 1. Instalar dependências

    npm install

### 2. Executar no modo interativo

    npx cypress open

### 3. Rodar testes headless

    npm test

------------------------------------------------------------------------

# 🔧 Configurações

Base definida:

    https://blogdoagi.com.br

A aplicação redireciona para:

    https://blog.agibank.com.br

Testes foram adaptados para refletir esse fluxo real.

------------------------------------------------------------------------

# 🧠 Notas Técnicas Importantes

O site usa: - AMP + WordPress + Cache dinâmico - Re-renderização do
DOM - Busca sem XHR - Estrutura dinâmica

Técnicas aplicadas: - Requery seguro - Validações tolerantes -
Performance baseada no Timing API

------------------------------------------------------------------------

# 🏁 Conclusão

Este projeto entrega: ✔ 5 cenários avançados\
✔ Alta estabilidade\
✔ Arquitetura modular\
✔ CI/CD funcional\
✔ Execução multiplataforma