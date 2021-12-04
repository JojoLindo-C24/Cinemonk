import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-position: bottom 0px right 0px;
    background-image: url(${'../../assets/images/BackgroundCinemonk.png'});
    height: 100vh;
    width: 100vw;
    background-size: cover;

.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.textPg{
    font: 32px ShareTechMono;
    color: white;
    align-items: center;
    justify-content: center;
    margin-top: 2em;
}

.buttons{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 75%;
    margin-top: 3em;
}

.bigButton button{
    width: 20vw;
    height: 40vh;
    background-color: #C60A0A;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}

.bigButton button:hover{
    transition: 1s;
    background-color: #A0000A;
    transform: scale(1.1);
}

.bigBtDay{
    font: 58px Roboto-Thin;
    color: white;
    cursor: pointer;
}

.bigBtNumber{
    font: 54px Roboto;
    color: white;
    cursor: pointer;
}

.bigBtMonth{
    font: 58px Roboto-Thin;
    color: white;
    cursor: pointer;
}

.smallButtons{
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    justify-content: center;
}
`
export {Container};