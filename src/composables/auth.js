export function authHeader() {
    const token = localStorage.getItem('token');
    if(token) {
        return `Bearer ${token}`
    }
    return '';
}