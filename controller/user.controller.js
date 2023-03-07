const { registerService, findUserByEmail, findUserById } = require("../services/user.services");

exports.register = async (req, res) => {
    try {
        const result = await registerService(req.body);
        res.status(200).send({
            status: "success",
            message: "Successfully Signed Up",
            data: result
        })
    } catch (error) {
        let err;
        if (error.code == 11000) {
            err = 'This Email is already registered'
        }
        res.status(400).send({
            status: "fail",
            message: " Signed Up failed",
            error: err ? err : error.message
        })
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({
                status: "fail",
                error: "Email or password field is empty",
            })
        }
        const user = await findUserByEmail(email);

        if (!user) {
            return res.status(400).send({
                status: "fail",
                error: "This email doesn't exist. Please create an account first",
            })
        }

        if (password !== user.password) {
            return res.status(400).send({
                status: "fail",
                error: "Password is wrong",
            })
        }
        if (user.status !== "active") {
            return res.status(400).send({
                status: "fail",
                error: "Your account is not active",
            })
        }

        const { password: pwd, ...others } = user.toObject();

        res.status(200).send({
            status: "success",
            message: "Successfully Signed In",
            data: {
                others
            }
        })
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: " Signed Up failed",
            error: error.message
        })
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await findUserByEmail(req.params.email);
        res.status(200).send({
            status: "success",
            message: "Successfully Signed In",
            data: user
        })
    } catch (error) {
        res.status(400).send({
            status: "fail",
            error: error.message
        })
    }
}
exports.getUserById = async (req, res) => {
    try {
        const user = await findUserById(req.params.id);
        res.status(200).send({
            status: "success",
            message: "Successfully Signed In",
            data: user
        })
    } catch (error) {
        res.status(400).send({
            status: "fail",
            error: error.message
        })
    }
}