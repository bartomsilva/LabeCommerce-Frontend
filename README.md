## 📖 Introdução 

Space Toys: É meu primeiro projeto utilizando o React JS, o objetivo é funcionar como o front-end de um e-commerce, 
seguindo uma lista pré-definida de exigências, para construção deste projeto utilizei além do básico exigido, os conceitos 
de Estado Global, navegação por Rotas, o axios para leitura do cadastro de produtos e funções assincronas.

## 🔗Link de Acesso
- Deploy Surge: [clique aqui!](https://bart-silva-spacetoys.surge.sh/).

## 📄Concepção do Projeto

### Criação
 - Foi utilizado o VITE
  
### Instalando
```bash
# Instalando dependências
yarn install

# executando o projeto
yarn dev
```

### Layout Mobile

|![image](https://user-images.githubusercontent.com/106079184/227629422-fe5daab1-75b1-43c9-afde-6afb035c1e9b.png)|
![image](https://user-images.githubusercontent.com/106079184/227629547-34942536-c771-48a2-a0cf-aa0645c54885.png)


### Layout Desktop

![image](https://user-images.githubusercontent.com/106079184/227629264-108990f9-de46-45c6-80ae-a797c904d8b9.png)



### Requisitos do Projeto / Funcionalidades
```bash
O projeto consiste em 3 grandes partes:

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

### Funcionalidades que Adicionei
    - [x]  Filtro por Categoria (permite escolher um grupo de produtos)
    - [x]  Ordenação me ordem Alfabética ( permite selecionar se é ascendente ou decrescente) 
    
 ## *** desafios *** 
   - [x]  Salvar e Recuperar conteúdo do carrinho usando o `LocalStorage`;

## Funções implemetadas
-   Criei um componente similar ao select para poder personalizar; trata-se de uma div customizada que comporta um menu vertical
    com as opções de ordenação, esse menu fica escodido e só aparece ao clicar na caixa de seleção e é recolhido após a seleção
    de uma das opções.

* Exemplo

![image](https://user-images.githubusercontent.com/106079184/226874729-e193572f-1b03-4ca2-9c41-4825e9cd6bd0.png)


## Responsividade 
- Totalmente responsivo*
- *obs: ainda precisa de alguns ajustes finos


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

![HTML](https://user-images.githubusercontent.com/106079184/227619911-eb73aabd-7739-47c0-bbcb-e0920902ead3.png)
![Javascript](https://user-images.githubusercontent.com/106079184/227620446-5307c4f2-0af2-4b7d-8696-a17780a13148.png)
![React](https://user-images.githubusercontent.com/106079184/227620813-6e3311e8-9992-407a-8cae-abf2711f1af8.png)
![React Router](https://user-images.githubusercontent.com/106079184/227621258-7a953c29-092e-43e6-a688-5d08279d7818.png)
![Styled-Components](https://user-images.githubusercontent.com/106079184/227621509-7956f644-df78-41b1-a26d-ec88112b7de1.png)
![SweetAlert](https://user-images.githubusercontent.com/106079184/227622475-afbfe25f-92f9-443d-bd50-bd93ba18fa4d.png)
![Git](https://user-images.githubusercontent.com/106079184/227621865-d6fd9ff4-2e10-4f7f-9759-f31c6434b565.png)


## 📫 Contato
- linkedin: https://www.linkedin.com/in/bart-silva-br/

