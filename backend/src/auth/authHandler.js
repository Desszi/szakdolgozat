const jwt = require('jsonwebtoken');

const Sallers = [
    {
        sallerName: 'porkolab',
        password: 'porkolab_pw',
        role: 'saller'
    }
];

const refreshTokens = [];

module.exports.login = (req, res) => {
    const { sallerName, password } = req.body;

    const saller = Sallers.find(
        saller => saller.sallerName === sallerName && saller.password === password
    );

    if (saller) {
        const accessToken = jwt.sign({
            sallerName: saller.sallerName,
            role: saller.role
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRY
        });

        const refreshToken = jwt.sign({
            sallerName: saller.sallerName,
            role: saller.role
        }, process.env.REFRESH_TOKEN_SECRET);
        refreshTokens.push(refreshToken);

        res.json({
            accessToken,
            refreshToken,
            saller
        });
    } else {
        res.send('Name of saller or password incorrect.');
    }

};


module.exports.refresh = (req, res, next) => {
    const { token } = req.body;

    if (!token) {
        return res.sendStatus(401);
    }

    if (!refreshTokens.includes(token)) {
        console.log(refreshTokens, token);
        return res.sendStatus(403);
    }

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, saller) => {
        if (err) {
            return res.sendStatus(403);
        }

        const accessToken = jwt.sign({
            sallerName: saller.sallerName,
            role: saller.role
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRY
        });

        res.json({
            accessToken
        });
    });
};

module.exports.logout = (req, res) => {
    const { token } = req.body;

    if (!refreshTokens.includes(token)) {
        res.sendStatus(403);
    }

    const tokenIndex = refreshTokens.indexOf(token);
    refreshTokens.splice(tokenIndex, 1);

    res.sendStatus(200);
};
