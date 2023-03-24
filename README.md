## 📖 Introdução 

Esse é o meu projeto de introdução aos fundamentos do React, cujo objetivo é que funcionar como o front-end de um E-Commerce, seguindo uma lista pré-definida de exigências. Apliquei os conceitos abaixo e outros (**)  por conta própria. 

## 🔗Link de Acesso
- Deploy Surge: [clique aqui!](https://bart-silva-spacetoys.surge.sh/).

## 📄Concepção do Projeto

### Instalando
```bash
# Instalando dependências
yarn install

# executando o projeto
yarn dev
```

### Layout Mobile



### Layout Desktop



### Requisitos do Projeto
```bash
- Home (Lista de Produtos)
    - [x]  O usuário deve ser capaz de visualizar uma lista de produtos
    - [x]  O usuário deve ser capaz de visualizar os dados do produto (nome, preço e imagem)
    - [x]  O usuário deve ser capaz de adicionar um produto no carrinho    
- Carrinho
    - [x]  O usuário deve ser capaz de visualizar os produtos adicionados
    - [x]  O usuário deve ser capaz de visualizar a quantidade correta de cada produto
    - [x]  O usuário deve ser capaz de remover itens do carrinho
    - [x]  O usuário deve ser capaz de ver corretamente o valor total de sua compra
    - [x]  Quando a página é atualizada, os itens devem continuar no carrinho    
- Filtros e Ordenação
    - [x]  O usuário deve ser capaz de filtrar os itens por preço mínimo
    - [x]  O usuário deve ser capaz de filtrar os itens por preço máximo
    - [x]  O usuário deve ser capaz de realizar uma busca por nome
    - [x]  O usuário deve ser capaz de ordenar os itens em ordem crescente ou decrescente
    - [x]  O usuário deve ser capaz de adicionar  filtros, busca e ordenação simultaneamente
    - [x]  O usuário deve ser capaz de retornar à visualização sem filtros
```

### Bibliotecas Utilizadas

```bash
styled-components
axios
react-router-dom
sweetalert
```

## 💡Programas utilizados:
- VSCode
- Photoshop (edição da imagens)

## 💻Tecnologias 

![HTML](https://user-images.githubusercontent.com/106079184/227619717-c4db62a8-9644-4167-87b8-e8d9ef3e6927.png)![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled-Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![image](https://user-images.githubusercontent.com/106079184/227618657-2fd85fe5-dee7-4544-bb4f-9910ed3ca289.png)


## 📫 Contato
- linkedin: https://www.linkedin.com/in/bart-silva-br/



- JSX
- Componentes
- Props
- Estado
- Fluxo de dados no React
- Renderização de listas
- Renderização condicional
- localStorage
- Styled-components

- **Estado Global **
- **axios ( leitura dos produtos ) **
- **funções assincronas ( async / await ) **

**Imagem ( leitura dos dados )

![image](https://user-images.githubusercontent.com/106079184/226871508-82b86aa5-35b7-492c-9462-1a5fe22f00a2.png)


## Instruções para construção do Projeto

O Astrodev deixou um testamento e essa foi a herança deixada pra vocês:

# Requisitos

O projeto consistirá em 3 grandes partes:

1. Home
    - Mostrando todos os produtos
    - Deve haver alguma forma de ordenar os produtos por ordem crescente ou decrescente de preço (pode ser na home em si ou junto dos filtros)
    - Produtos:
        - Devem ter um botão que permita adicioná-los ao carrinho
        - Devem exibir o nome, preço e imagem em um card	
        
2. Carrinho
    - Mostrar todos os produtos e quantidades adicionadas
    - Capacidade de remover itens do carrinho
    - Mostrar o valor total do carrinho   
      
3. Filtro
    - Por valor mínimo e máximo
    - Por nome do produto
    - **Adicionei Filtro por Categoria 

### Lista de Requisitos

    - [x]  **Adicionei Filtro por Categoria
    - [x]  **Adicionei ordenação Alfabética  
    
 ## *** desafios *** 
   - [x]  Salvar e Recuperar conteúdo do carrinho usando o `LocalStorage`;

## Funções implemetadas

-   Criei um componente similar ao select para poder personalizar; trata-se de uma div customizada que comporta um menu vertical
    com as opçoes de ordenação, esse menu fica escodido e só aparece ao clicar na caixa de seleção e é recolhido após a seleção
    de uma das opções.
* Resultado
```
![image](https://user-images.githubusercontent.com/106079184/226874729-e193572f-1b03-4ca2-9c41-4825e9cd6bd0.png)

* Parte do código
![image](https://user-images.githubusercontent.com/106079184/226875257-c1befd9d-03d8-473e-9259-69cd5652f111.png)


## Criei os dados dos produtos no formato JSON 

```jsx
{
        "code": "t01",
        "name": "Astronauta Barry",
        "price": 250,
        "age": "all",
        "sector": "toys",
        "img": "https://uploaddeimagens.com.br/images/004/358/976/original/astronauta_barry.jpg?1676768634"
    }
```
- A leitura dos dados se dá através de uma função assíncrona e utilizando o axios.


## Responsividade 
- Conta com um menu
- ainda precisa de alguns ajustes no layout da página

## 













