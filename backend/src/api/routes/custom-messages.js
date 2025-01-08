exports.welcomeMessage = (req, res) => {
    
    res.status(200).json({
        "name": "My API",
        "version": "v1",
        "description": ".",
        "resources": [
            "/api/auth",
            "api/",
            "/api/",
            "/api/",
        ],
        "status": "ok",
    });
}
