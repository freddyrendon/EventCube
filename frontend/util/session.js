export const postUser = user => (
 $.ajax({
    url: '/api/users', 
    method: 'POST', 
    data: { user },
 })   /// method to create a new user
); 

export const postSession = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user },
    }) /// method to sign in a user 
); 

export const deleteSession = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    }) // method to delete user
); 
