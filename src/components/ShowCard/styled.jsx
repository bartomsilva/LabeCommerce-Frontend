import styled from "styled-components";

export const Box = styled.div`
       position: fixed;
       z-index: 99999;
       left: 50%;
       top: 50%;
       transform: translate(-50%, -30%);  
       
       width: 500px;
       height: fit-content;
       
       background-color: #e1e1e1;
       
       display: flex;
       align-items:center;
       img{
         width: 60%;
        }

       box-shadow: rgb(0 0 0 / 20%) 0px 2px 6px;
       text-align: center;
       line-height: 2.5;

       button{
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #ef7d12;
        font-size: 1.2rem;
        font-weight: 700;
        border: none;
       }


  `