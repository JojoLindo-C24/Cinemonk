import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-position: bottom 0px right 0px;
    background-image: url(${'../../assets/images/BackgroundCinemonk.png'});
    height: 100vh;
    width: 100vw;
    background-size: cover;

@media(min-width: 1400px) {
 .txtTitle {
  font-size: 100px;
 }
}

.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 80%;
}

.title{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.imgTicket{
    width: 5vw;
    height: auto;
}

.txtTitle{
    font: 42px SeoulHangang-Medium;
    color: #F0A124;
    margin-top: 2vh;
}

.txtContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.txt{
    font: 34px ShareTechMono;
    color: white;
}

.button{
    background-color: #861B1B;
    box-shadow: #F80000;
    border-radius: 20px;
    padding: 1em;
    font: 22px ShareTechMono;
    color: white;
    /* width: 10%; */
    border: none;
    margin-top: 5vh;
    cursor: pointer;
}

.button:hover{
    background-color: #651515;
    transition: 1s;
}

`
export {Container};