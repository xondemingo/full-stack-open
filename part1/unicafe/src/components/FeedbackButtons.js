import Button from "./Button"

const FeedbackButtons = ({ handleAddFeedback }) => {
    const { handleAddGoodFeedback,  handleAddNeutralFeedback, handleAddBadFeedback } = handleAddFeedback
    return (
        <div>
            <Button text="good" handleClick={handleAddGoodFeedback} />
            <Button text="neutral" handleClick={handleAddNeutralFeedback} />
            <Button text="bad"  handleClick={handleAddBadFeedback} />
        </div>
    )
}

export default FeedbackButtons