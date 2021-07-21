export function registerInput(body) {
    return {
        username: body.username,
        fullName: body.fullName,
        password: body.password
    };
}