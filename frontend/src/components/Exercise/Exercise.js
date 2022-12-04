import axios from 'axios';
import { useState} from 'react';
import './Exercise.css';

const Exercise = (props) =>{

    const courseID = '637e73821194304d45a2fe5a' //props.Course
    const subtitleID =  '638ab310dd1960c482681747' //props.Subtitle
    const corporateID = '6383fc74a3f0222d07573a60'
    const individualID = '638911942d76cb9beab085d0'
    const [exercise,setExercise] = useState({});
    const [answer,setAnswer] = useState("");
    const [show,setShow] = useState(false);
    const [success, setSuccess] = useState("");
    const [correct, setCorrect] = useState("");
    const [showAns, setShowAns] = useState(false);
    const [grade,setGrade] = useState();
    const [showGrade, setShowGrade] = useState(false);

    const changeShowAns = () => {
        setShowAns(!showAns);
    }

    const correctAnsHandler = () => {
        changeShowAns();
        getCorrect();
    }

    const changeSuccess = () => {
        setSuccess("Answer Submitted Successfully")
    }

    const changeShow = () => {
        setShow(!show);
    }

    const showHandler = () => {
        changeShow();
        getExercise();
    }

    const changehandler = (event) =>{
        setAnswer(event.target.value)
    }

    const viewGrade = () => {
        changeShowAns();
        setShowGrade(!showGrade)
    }

    const getExercise = async ()=>{
        await axios.get(`http://localhost:9000/course/exercise/${courseID}/${subtitleID}`).then(
            (res)=> {
                const ex = res.data;
                setExercise(ex);
            }
        )
    }

    const submitAnswer= async() =>{
        if(props.Type === 'corporate'){
            //call method in corporate route
            await axios.get(`http://localhost:9000/corporateTrainee/submit/${corporateID}/${subtitleID}/${answer}`).then(
                (res) => {
                    setGrade(res.data);
                    changeSuccess();
                }
                )
        }
        else{
            if(props.Type === 'individual'){
                //call method in indvidual route
                await axios.get(`http://localhost:9000/individualTrainee/submitAnswer/${individualID}/${subtitleID}/${answer}`).then(
                    (res) => {
                        setGrade(res.data);
                        changeSuccess();
                    }
                )
            }
        }
    }

    const getCorrect = async() => {
        await axios.get(`http://localhost:9000/course/correctAnswer/${courseID}/${subtitleID}`).then(
            (res) => {
                const c = res.data;
                setCorrect(c);
            }
        )
    }

    {getExercise()};
    
    return(
        <div>
            {!show && <button class='exercise_showSubmit_btn' onClick={showHandler}>Show Exercise</button>}
            {show && <div class='exercise_div'>
                <label class='exercise_question'>{exercise.Question}?</label>
                {exercise.Choices.map((choice) => (
                    <label class="rad-label">
                        <input type="radio" class="rad-input" onChange={changehandler} name="rad" value={choice}></input>
                        <div class="rad-design"></div>
                        <div class="rad-text">{choice}</div>
                    </label>
                ))}
                {!success && <button class='exercise_showSubmit_btn' onClick={submitAnswer}>Submit</button>}
                {success && <button class='exercise_showSubmit_btn' onClick={correctAnsHandler}>Correct Answer</button>}
                {success && <button class='exercise_showSubmit_btn' onClick={viewGrade}>View Grade</button>}
                <br/><br/>
                {success && !showGrade && !showAns && <label class='exercise_success'>{success}</label>}
                {success && showAns && 
                    <div>
                        <label class='exercise_success'>Correct Answer : {correct}</label>
                        <br/><br/>
                        <label class='exercise_success'>Your Answer : {answer}</label>
                    </div>
                }
                {success && showGrade && !showAns && <label class='exercise_success'>Your Grade: {grade}</label>}
            </div>}
        </div>

    )

}

export default Exercise