import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    // console.log("message sent", req.params.id);
    const {message} = req.body;
    const {id: receiverId} = req.params; //const id = req.params.id; 
    const senderId = req.user._id;

    //finding conversion between above two user
    let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId]},
    })
    //for first time conversion will be empty so we need to create a conversion
    if(!conversation){
        conversation = await Conversation.create({
            participants: [senderId, receiverId],
        })
    }
// create message that is comming from req.body;
    const newMessage = new Message({
        senderId,                // senderId: senderId,
        receiverId,                // receiverId: receiverId,
        message,               // message: message,
    })

    if(newMessage){
        conversation.messages.push(newMessage._id);
    }

    //SOCKET IO FUNCTIONALITY WILL GO HERE

    // await conversation.save();
    // await newMessage.save();
    
    //optimise code to save both conversion and newMessage
    //This will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);

    try {
        
    } catch (error) {
        console.log("Error in SendMessage controller: ", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

export const getMessage = async (req, res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversion = await Conversation.findOne({
            participants: { $all : [senderId, userToChatId]},
        }).populate("messages"); //populate used to get object. not reference but actual message
        
        if(!conversion) return res.status(200).json([]);
        const messages = conversion.messages;

        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in getMessage controller: ", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}