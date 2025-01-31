import axios from "axios";

export const fetchVideos = async () => {
    try { 

        const cachedData = localStorage.getItem('instagramVideos');
        if (cachedData) {
            return JSON.parse(cachedData);
        }

        const access_token = "IGAAQPxE3SwoFBZAE1GQWlJUFRrVkZAYcUh4azJVMFBQcFFfSFducHhTcnBZARm93ZA013ZAUMwZATZAPM0E4dFJ4Vjl1cUZAYc1JfTlExaEc2VEM4eURlcm5XZAnU4OXJEcGpjRHVpZAGV4TWJSRTB6SHg5amwxWm40QkgwU1FvQ2JqUzlGQQZDZD";
    
        const response = await axios.get(
            'https://graph.instagram.com/me/media?fields=id,media_type,media_url&limit=6&access_token=' + access_token
        );
        
        if (!response.data || !response.data.data) {
            console.warn('Instagram API response is empty or incorrect.');
            return []; 
        }

        const allMedia = response.data.data; 
        const videoUrls = allMedia
            .filter(media => media.media_type === 'VIDEO')
            .map(video => video.media_url);
    
        
        localStorage.setItem('instagramVideos', JSON.stringify(videoUrls));
        return videoUrls;
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
    
};