import { Container } from "./styled";
import IconTitle from "../../components/comum/IconTitle";
import SmallBt from "../../components/comum/SmallBt";

export default function DtIngresso() {
    return(
        <Container>
            <IconTitle />
            <div className="content">
                <div className="textPg">Escolha a data que você deseja comprar o ingresso</div>
                <div className="buttons">
                    <div className="bigButton">
                        <button>
                            <div className="bigBtDay">HOJE</div>
                            <div className="bigBtNumber">04</div>
                            <div className="bigBtMonth">MAIO</div>
                        </button>
                    </div>
                    <div className="smallButtons">
                        <SmallBt/>
                        <SmallBt/>
                        <SmallBt/>
                        <SmallBt/>
                        <SmallBt/>
                        <SmallBt/>
                    </div>
                </div>
            </div>
        </Container>
    )
}