// authorize requests
export default (availableTokens) => (req, res, next) => {
    const token = req.query.token ?? false;

    if (token && !availableTokens.includes(token)) {
        let forbidden = new Error('Requests without token are forbidden!');
        forbidden.status = 403;

        throw forbidden;
    }

    next()
}