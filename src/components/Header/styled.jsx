import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    height: fit-content;
    margin-bottom: 10px;
    flex:1;
    position: sticky;
    top: 0;
    z-index: 999999;
`;

export const Container = styled.div`    
    height: fit-content;
    flex: 1;
    width: 100%;
    background-color: #fff;
    border-bottom: 2px solid rgb(0, 0, 0, 0.1);
    padding-top: 20px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const Logo = styled.div`
    width: 25%;
    min-width: 200px;
    img{
        width: 200px;
        margin-left: 2rem;
        grid-area: logo;     
        margin-bottom: 1.5rem;        
    };
 
`;

export const BoxFind = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    width: 30%;
    min-width: 350px;
    height: 40px;
    background-color: #f2f2f2;
    border-radius: 8px;
    cursor: pointer;
    grid-area: boxfind;

    @media (max-width: 768px){
        width: 100%;
    }

       
    input{        
        background: #f2f2f2;
        width: 350px;
        padding: 11px 0px 11px 16px;
        font-size: 16px;
        border: none;
        font-family: "Arial", sans-serif;
    } 
     
`;

export const CadUser = styled.div`
    font-weight: bold;
    width: 25%;  
    margin-right: 190px;
    a{
        filter: var(--colorSvg);
    }
    grid-area:caduser;

    span{
        color: #666666
    }
    text-align: right;

    @media (max-width: 768px){
        flex: 1;
    }

`;

export const Cart = styled.div`
    width: fit-content;
    min-width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    span{
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background-color: #ef7d12;
        padding: 2px 5px;
        border-radius: 100%;
        font-size: 10px;
    }

    img {
        width: 40px; 
        filter: var(--colorSvg);
        cursor: pointer;       
    }

    grid-area: cart;
    text-align: right;

    :active {
        transition: 500ms all;
        transform: scale(1.1);
    }
      
    @media (max-width: 768px){
        flex: 1;
    }

`;


export const FindImg = styled.img`
        width: 30px; 
        height: 30px;
        filter: var(--colorSvg);
        cursor: pointer;
        margin: 0;    
        :active {
            transition: 500ms all;
            transform: scale(1.5);     
        }
`;

export const Sections = styled.div`
    display: flex; 
    flex-wrap: wrap;
    min-height: 10vh;
    height: fit-content;
    width: 100%; 
    overflow: hidden;
    @media (max-width:768px){
        display: none;
    }
`;

export const ButtonSelect = styled.button`
    min-height: 35px;
    height: fit-content;
    width: 80px;
    border: none;
    padding: 10px;
    flex-grow: 1;    
    font-size: 14px;
    font-family: sans-serif;
    background-color: #ef7d12;
    color: #fff;
    cursor: pointer;
    :hover{
        background-color: #fff;
        color: #ef7d12;
        transition-duration: 300ms;
    }
   
    :active {
        transition: 500ms all;
        transform: scale(1.1);
        background-color: #ef7d12;
        color: #ffffff;
    }

     @media (max-width: 768px){
        border: 2px solid rgba(0, 0, 0, 0.5);
        padding: 10px;
    }
    
` 




