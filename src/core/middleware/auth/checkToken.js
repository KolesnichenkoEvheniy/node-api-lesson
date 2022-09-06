// authorize requests
export default (availableTokens) => (req, res, next) => {
    const token = req.query.token ?? false;

    if (token && availableTokens.includes(token)) {
        return next()
    }

    let forbidden = new Error('Requests without token are forbidden!');
    forbidden.status = 403;

    throw forbidden;
}