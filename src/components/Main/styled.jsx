
import styled from "styled-components";

export const ContainerCard = styled.div`
    /* width: 100%;     */
    flex: 1 1 100%;
    margin: 0 auto;

`;

export const Card = styled.div`
    display: flex;
    gap: 1rem;    
    flex: 1 1 100%;
    flex-wrap: wrap;
    justify-content: center;

 `;

export const Item = styled.div`        
    flex: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 220px;
    height: 330px;
    padding: 5px;
    margin: 10px;
    background-color: #fff;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 6px;
    border-radius: 5px;

    @media(max-width: 768px){
        display: grid;
        width: 95%;
        height: fit-content;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 150px;
        grid-template-areas: "image info" ;
        justify-content: center;
    }
`;

export const ContainerImage = styled.div`
    grid-area: image;    
`
export const Image = styled.img`
    width: 60%;
    width: 70%;
    object-fit: cover;
    z-index: 999;
    margin-top: 15px;

    @media(max-width: 768px){
        width: 100%;          
    }
 
`;

export const ContainerInfo = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: flex-start;  
    height: 140px;
    width: 90%;
    position: absolute;
    bottom: 0;
    grid-area: info;

    @media(max-width:768px){
        position: static;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-around;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-area: "info";

    width: fit-content;
`;

export const Title = styled.span`
    font-size: 0.875rem;
    margin-bottom: 10px;
    color: #666666;
`;

export const OldPrice = styled.del`
    font-size: 0.75rem;
    color: #666666;
    margin-bottom: 10px;  

`;

export const Price = styled.span`
    font-size: 1.125rem;
    font-weight: bold;
    color:#ef7d12;
`;

export const Xtime = styled.span`
    font-size: 0.875rem;
    display: block;
    color: rgb(123, 123, 123);
    margin-bottom: 7px;
`;

export const ImgAddCart = styled.div`
    position: absolute;
    bottom: 23px;
    right: 13px;
    width: 30px;
    height: 30px;
    filter: var(--colorSvg);
    grid-area: "addcart";

    :active {
        transition: 500ms all;
        transform: scale(1.5);
    }
    @media(max-width:768px){
        position: static;
    }
`;

export const Button=styled.button`
    width: 100%;
    height: 40px;
    margin-top: 6px;
    color: #fff;
    border: none;
    background-color: orange;
    border-radius: 6px;
    cursor: pointer;
    :active{
        transform: scale(.9);
        transition-duration: 300ms;
    }
`;

