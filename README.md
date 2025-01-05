# era1-api-task

-Hello, the purpose of the project is to create a node js project with clean architecture. Docker was used to deploy.

# Docker setup for linux ubuntu

-Install Docker Requirements.

`sudo apt install -y apt-transport-https ca-certificates curl software-properties-common`

-Add Docker Repository. To add Docker's official repository to your system.

`echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee/etc/apt/sources.list.d/docker.list > /dev/null`

-Update and install Docker packages.

`sudo apt update`
`sudo apt install -y docker-ce docker-ce-cli containerd.io`

#Deploying API service to Docker

-First, we access the API service file. Then, we enter the following codes into the terminal and our API service is ready.

`docker-compose build`
`docker-compose up -d`
