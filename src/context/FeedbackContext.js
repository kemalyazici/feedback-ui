import {createContext,useState} from "react";
import {v4 as uuidv4} from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id:1,
            text: 'This item is from context',
            rating:10
        },
        {
            id:2,
            text: 'This item is from context 2',
            rating:7
        },
        {
            id:3,
            text: 'This item is from context 3',
            rating:6
        },
    ])

    const [feedbackEdit,setFeedbackEdit] = useState({
        item:{},
        edit:false
    })

    // delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this!'))
            setFeedback(feedback.filter(item => item.id!==id))
    }

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback,...feedback])
    }

    // Update feedback item
    const updateFeedback = (id,updItem) => {
       setFeedback(
           feedback.map((item) => item.id===id ? {...item,...updItem} : item)
       )
       feedbackEdit.edit = false;
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        });
    }

    return <FeedbackContext.Provider
        value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext