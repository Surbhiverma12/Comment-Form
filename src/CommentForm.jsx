import { useState } from "react"

export default function CommentForm() {

    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: ""
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value}
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: ""
        });
    }


    return (
        <div>
            <h4>Give a comment</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username : </label>
                <input 
                placeholder="username" 
                name="username"
                type="text" 
                value={formData.username}
                onChange={handleInputChange}
                id="username"
                />
                <br /><br />

                <label htmlFor="remarks">Remarks : </label>
                <textarea 
                value={formData.remarks} 
                name="remarks"
                placeholder="write your remarks..."
                onChange={handleInputChange}
                id="remarks"
                >Remarks</textarea>
                <br /><br />

                <label htmlFor="rating">Rating : </label>
                <input 
                type="number" 
                placeholder="rating" 
                min={1} 
                max={5} 
                name="rating"
                value={formData.rating}
                id="rating"
                onChange={handleInputChange}
                />
                <br /><br />


                <button>Add Comment</button>
            </form>
        </div>
    )
}