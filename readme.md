# Aws S3 Upload Files

This application is a simple API to upload files on Amazon S3 service

> Developed by Lucas Cotrim Machado 
>> E-mail: lucascotrim3@hotmail.com

> ## Usecases

* Upload file
>> POST /api/v1/upload

> ## Environment Variables

Create a .env file on root directory with following environment variables (recommended):

`PORT=`\
`AWS_ACCESS_KEY_ID=`\
`AWS_SECRET_ACCESS_KEY=`\
`AWS_S3_BUCKET_NAME=`

> ## Starting

* Install dependencies

	`npm install`
    
* Start application

	`npm start`
	
> ## Debugging

Make sure to have debugger configured on your text editor or IDE. 

* For watch directories changes, run the following command in a separate terminal bash: 

	`npm run watch`

* Debug mode with Docker (make sure Docker is installed and running)
	
    `npm run up`
    
* Debug mode without Docker
	
    `npm run debug`