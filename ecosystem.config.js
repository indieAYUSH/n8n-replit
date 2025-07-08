module.exports = {
  apps: [{
    name: "n8n",
    script: "n8n",
    env: {
      N8N_PORT: 3000,
      N8N_BASIC_AUTH_ACTIVE: "true",
      N8N_BASIC_AUTH_USER: "admin",
      N8N_BASIC_AUTH_PASSWORD: "admin123",
      N8N_HOST: "0.0.0.0"
    }
  }]
};
