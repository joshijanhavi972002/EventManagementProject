import Cookies from 'js-cookie';

export const checkTokenAndRedirect = () => {
    const token = Cookies.get('token');

    if (!token) {
        window.location.href = '/login';
        return;
    }

    const tokenData = parseJwt(token);
    if (!tokenData || !tokenData.exp) { 
        window.location.href = '/login';
        return;
    }

    const currentTime = Math.floor(Date.now() / 1000);
    if (tokenData.exp < currentTime) {
        window.location.href = '/login';
        return;
    }
};

export const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
        return null;
    }
};

