# MERN Stack App Deployment Guide

This guide provides instructions for running the app locally and deploying it to Azure Web App using Azure CLI.

## Running the App Locally

1. Clone the repository:

```bash
git clone https://github.com/codiac1/MERN-Azure-Deploy.git
cd MERN-Azure-Deploy
```

2. Install dependencies:

```bash
cd app
npm install
cd client
npm install
```

3. Set up environment variables:

Change the `config.js` file in the `app` directory with the following content:

```bash
MONGO_URI=<your-mongodb-connection-string>
```

4. Start the backend server:

```bash
cd ../
npm run server
```

5. In a new terminal, start the frontend:

```bash
cd client
npm start
```

6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

APP Previw:
![image](https://github.com/user-attachments/assets/71f3eb57-f33e-46ec-8978-5ff41a5b175a)


## Deploying to Azure Web App via Azure CLI

1. Install Azure CLI: Follow the instructions at [https://docs.microsoft.com/en-us/cli/azure/install-azure-cli](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)

2. Login to Azure:

```bash
az login
```

3. Create a resource group (if not already created):

```bash
az group create --name <your-resource-group-name> --location <your-preferred-location>
```

4. Create an App Service plan:
```bash
az appservice plan create --name <your-app-service-plan-name> --resource-group <your-resource-group-name> --sku B1 --is-linux
```

5. Create a Web App:
```bash
az webapp create --resource-group <your-resource-group-name> --plan <your-app-service-plan-name> --name <your-app-name> --runtime "NODE|18-lts"
```

6. Configure the Web App:
```
az webapp config appsettings set --resource-group <your-resource-group-name> --name <your-app-name> --settings MONGO_URI="<your-mongodb-connection-string>"
```

7. For production:
- Update the `BASE_URL` in your `client/config.js` code to point to your Azure Web App URL:
  ```
  BASE_URL=https://<your-app-name>.azurewebsites.net
  ```

8. Deploy your app:
```bash
az webapp deployment source config-zip --resource-group <your-resource-group-name> --name <your-app-name> --src <path-to-your-zipped-app-folder>
```


9. Open your deployed app:
    
[https://your-app-name.azurewebsites.net](https://your-app-name.azurewebsites.net)

