import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { QViewContext } from "../../context/questionnaireViewContext";
import { GoalsContext } from "../../context/goalsContext";

export default function ChangeView(props) {
    const showPrev = props.showPrev ? props.showPrev : false;
    const showNext = props.showNext ? props.showNext : false;
    const { resetGoals } = useContext(GoalsContext);
    const { nextView, prevView } = useContext(QViewContext);
    var element = 
    <div>
        <div>
            {showPrev ? <Button onClick={prevView} variant="primary">Previous</Button> : <div></div>}
            {showNext ? <Button onClick={nextView} variant="primary">Next</Button> : <div></div>}
        </div>
        <div>
            {<Button onClick={resetGoals} variant="secondary">Reset</Button>}
        </div>
    </div>

    return element;
}