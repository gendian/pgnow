import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { QViewContext } from "../../context/questionnaireViewContext";
import { ExclusionsContext } from "../../context/exclusionsContext";

export default function ChangeView(props) {
    const showPrev = props.showPrev ? props.showPrev : false;
    const showNext = props.showNext ? props.showNext : false;
    const { resetExclusions } = useContext(ExclusionsContext);
    const { nextView, prevView } = useContext(QViewContext);
    var element = 
    <div>
        <div>
            {showPrev ? <Button onClick={prevView} variant="primary">Previous</Button> : <div></div>}
            {showNext ? <Button onClick={nextView} variant="primary">Next</Button> : <div></div>}
        </div>
        <div>
            {<Button onClick={resetExclusions} variant="secondary">Reset</Button>}
        </div>
    </div>

    return element;
}