import styled from "styled-components";

export const ContaninerMenuMobile = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    opacity: 0; 
    pointer-events: none;
        
    @media(max-width:768px){
        opacity: 1;
        pointer-events: auto;
    }
    
    ul{
        width: 100%; 
        height: calc(100vh - 30px);  
        position: absolute;
        visibility: ${({ isOpen }) => isOpen ? "visible" : "hidden"};;
        background-color: ${({ isOpen }) => isOpen ? "#f3f3f3" : "#transparent"};
        left: ${({ isOpen }) => isOpen ? "0px" : "-101vw"};
        transition: all linear 200ms;        
    }
    
    li{

        cursor: pointer;
        :hover{
                background-color: #16307b; 
                color: #fff;
             }
        
        button{
            display: block;
            width: 100%;
            text-align: left;
            padding: 1rem 0;        
            margin: 0 1rem;
            border: none;
            border-bottom: 2px solid rgba(0,0,0,.05);
            font-weight: 500;
            background-color: transparent; 
            cursor: pointer;
            color: #000;
            font-size: 1rem;
            :hover{
                background-color: #16307b; 
                color: #fff;
             }
         }
    }   
`

export const HeaderMenu = styled.div`
    background-color: #ef7d12;
    display: flex;
    align-items: center;
    button{
        width: 25px;
        height: 25px;
        margin: 0 1rem;
        background: url(${({ isOpen }) => isOpen ? "/static/icons/menu_close.svg" : "/static/icons/menu_open.svg"});
        background-repeat: no-repeat;
        background-size: contain;
        border: none;
        background-color: transparent;     
        transition: all linear 300ms;
        cursor: pointer;
    }
`
