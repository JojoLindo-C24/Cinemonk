import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
.smallBt{
    background-color: #AA0A0A;
    border-radius: 10px;
    border: none;
    width: 10vw;
    height: 20vh;
    justify-content: center;
    align-items: center;
    margin-top: 0.6em;
    margin-left: 0.6em;
    cursor: pointer;
}

.smallBt:hover{
    transition: 1s;
    background-color: #A0000A;
    transform: scale(1.05);
}

.day{
    font: 22px Roboto-Thin;
    color: white;
    cursor: pointer;
}

.month{
    font: 22px Roboto-Thin;
    color: white;
    cursor: pointer;
}

.numberDay{
    font: 48px Roboto;
    color: white;
    cursor: pointer;
}
`
export {Container};