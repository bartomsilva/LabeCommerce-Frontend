
import styled from "styled-components";

export const ContainerCard = styled.div`
    /* width: 100%;     */
    flex: 1 1 100%;
    margin: 0 auto;

`;

export const Card = styled.div`
    display: flex;
    gap: 1rem;    
    /* width: 100%; */
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
`;

export const Image = styled.img`
    /* width: 80%;
    width: 90%; */
     width: 60%;
    width: 70%;
    object-fit: cover;
    z-index: 999;
    margin-top: 15px;
 
`;

export const ContainerInfo = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: flex-start;  
    /* justify-content: center;  */
    height: 140px;
    width: 90%;
    position: absolute;
    bottom: 0;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

    :active {
        transition: 500ms all;
        transform: scale(1.5);
    }
`;

