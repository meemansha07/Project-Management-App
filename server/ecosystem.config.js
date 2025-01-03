module.exports = {
    apps: [
        {
            name: "Project-Management-App",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: "development",
            }
        }
    ]
}