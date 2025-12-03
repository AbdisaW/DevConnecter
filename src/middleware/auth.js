
const authAdim = (req, res, next) => {
    const token = "xyzu";
    const isAuthrezied = token === "xyz"
    if (!isAuthrezied) {
        res.status(401).send("unauthorized request")
    }
    else {
        next()
    }

}

const authUser = (req, res, next) => {
    const token = "xyzu";
    const isAuthrezied = token === "xyz"
    if (!isAuthrezied) {
        res.status(401).send("unauthorized request")
    }
    else {
        next()
    }

}

module.exports ={
    authAdim,authUser

}

