import api from './api';

export const fetchVideos = async () => {
    try { 

        const cachedData = localStorage.getItem('instagramVideos');
        if (cachedData) {
            return JSON.parse(cachedData);
        }

        const response = await api.get("https://api.cliniqueibnrochd.ma/api/videos");

        if (!response.data || !Array.isArray(response.data)) {
            console.warn('Instagram API response is empty or incorrect.');
            return []; 
        }

        const allMedia = response.data; 
        const videoUrls = allMedia
            .map(video => video.media_url);
    
        
        localStorage.setItem('instagramVideos', JSON.stringify(videoUrls));
        return videoUrls;
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
    
};