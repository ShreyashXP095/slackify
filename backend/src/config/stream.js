import {StreamChat} from 'stream-chat';
import {ENV} from './env.js';


const streamClient = StreamChat.getInstance(ENV.STREAM_API_KEY , ENV.STREAM_API_SECRET);

export const upsertStreamUser = async(userData) =>{
    try {
        await streamClient.upsertStreamUser(userData);
        console.log("Stream user upserted/updated successfully" , userData.name);
        return userData;
    } catch (error) {
        console.error("Error upserting Stream user:", error);
    }
}

export const deleteStreamUser = async(userId) =>{
    try {
        await streamClient.deleteUser(userId , { mark_messages_deleted: true});
        console.log("Stream user deleted successfully:", userId);
    } catch (error) {
        console.error("Error deleting Stream user:", error);
    }
}

export const generateStreamToken = (userId) =>{
    try {
        const userIdString = userId.toString();
        return streamClient.createToken(userIdString);
    } catch (error) {
        console.error("Error generating Stream token:", error);
        return null;
    }
}