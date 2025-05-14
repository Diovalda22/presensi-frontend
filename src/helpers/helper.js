import dayjs from "dayjs";


export const formatDate = (dateString) => {
    const months = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
  
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;
  };

  export const toUpperCase = (text) => {
    if (typeof text !== 'string') return '';
    return text.toUpperCase();
  };

  export const capitalizeWords = (text) => {
    if (typeof text !== 'string') return '';
    return text
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
      .join(' ');
  };

  export const formatTime = (datetime) => {
    
    if (typeof datetime !== 'string') return '';
    const parts = datetime.split(' ');
    
    
    if (parts.length !== 2) return '';
    const time = parts[1]; 
    
    const [hours, minutes] = time.split(':');
    
    if (!hours || !minutes) return '';
    
    const formattedTime = `${hours}.${minutes}`;
    return formattedTime;
  };

  export const isLate = (waktu_datang) => {
    if (!waktu_datang) return false;
    
    
    const time = waktu_datang.split(' ')[1]; 
    const [hours, minutes] = time.split(':'); 
    const batasJam = dayjs().hour(7).minute(0);
    const waktuDatangObj = dayjs().hour(parseInt(hours)).minute(parseInt(minutes));
  
    
    return waktuDatangObj.isAfter(batasJam);
  };