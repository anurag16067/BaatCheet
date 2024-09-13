import Conversation from "../models/conversation.model";

export const sendMessage = async (req, res) => {
    // console.log("message sent", req.params.id);
    const {message} = req.body;
    const {id: receiverId} = req.params; //const id = req.params.id; 
    const senderId = req.user._id;

    let conversion = await Conversation.findOne({
        participants: {senderId, receiverId},
    })



    try {
        
    } catch (error) {
        console.log("Error in SendMessage controller: ", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}