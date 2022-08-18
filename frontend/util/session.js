export const logIn = user => (
 $.ajax({
    url: '/api/users', 
    method: 'POST', 
    data: { user },
 })   /// method to create a new user
); 

export const signUp = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user },
    }) /// method to sign in a user 
); 

export const logOut = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    }) // method to delete user
); 
