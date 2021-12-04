import {Container} from './styled';
import { Link } from 'react-router-dom';

export default function Inicial() {
    return(
        <Container>
            <div className="content">
                <div className="title">
                    <img className="imgTicket" src={"../../assets/images/TicketCinemonk.png"} alt=""/>
                    <div className="txtTitle">CineMonk</div>
                </div>
                <div className="txtContent">
                    <div className="txt">O que você quer fazer?</div>
                    <Link to={{
                        pathname: '/inicial'
                    }}>
                        <button className="button">Comprar<br></br>Ingresso</button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}