# ☕ PDC – Partido Democrático do Cafezinho

Site humorístico e **totalmente fictício** de um partido político dedicado ao café. Foi o meu primeiro projeto publicado no GitHub, feito para praticar HTML, CSS e JavaScript puros.

> “Do grão à democracia.”

🔗 https://lucas-senpaiprogrammer.github.io/PDC-Partido-do-cafezinho/

![Captura de tela do site](screenshot.png)

## O que tem no site

- **Origem institucional:** a história do partido, com números e uma garrafa térmica fundadora
- **Plataforma:** seis propostas em cards com ilustrações em SVG
- **Estatuto:** trechos de artigos bem-humorados
- **Requerimento de filiação:** formulário que emite uma *certidão de filiação* com número de protocolo, e a certidão continua lá quando a página é reaberta

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis, Grid, Flexbox e `clamp()`
- JavaScript puro (sem frameworks nem bibliotecas)
- Ilustrações em SVG (sprite com `<symbol>` e `<use>`)
- `localStorage` para guardar a certidão no navegador

## Destaques técnicos

- **Responsivo:** funciona do celular ao desktop
- **Modo escuro** automático, via `prefers-color-scheme`
- **Acessibilidade:** `label` em todos os campos, `aria-label` nas imagens importantes, foco visível, `aria-live` na certidão e respeito a `prefers-reduced-motion`
- **Segurança:** os dados digitados entram na página com `textContent`, nunca `innerHTML`
- **Privacidade:** nenhum dado sai do navegador

## Estrutura

```
pdc-cafezinho/
├── index.html   # estrutura e conteúdo
├── style.css    # estilos, tema claro/escuro e responsividade
├── script.js    # formulário, certidão e localStorage
└── README.md
```

## Como rodar

Não precisa instalar nada. Baixe o repositório e abra o `index.html` no navegador.

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
cd SEU-REPOSITORIO
# abra o index.html no navegador
```

## Aviso

Este é um projeto de humor. Qualquer semelhança com partidos, pessoas ou reuniões reais é mera coincidência.

## Autor

**Lucas**, desenvolvedor front-end.
