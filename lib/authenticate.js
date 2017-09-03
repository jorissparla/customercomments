module.exports = () => {
  console.log('In auth');
  /*
  const token = localStorage.getItem('token');
  const authenticated = token ? true : false;
  const user = token
    ? {
        id: localStorage.getItem('user-id'),
        name: localStorage.getItem('user-name'),
        role: localStorage.getItem('user-role')
      }
    : {};
    */
  return { authenticated: true, user: {} };
};
