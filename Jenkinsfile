pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                dir('JavaBackendServiceWithSpringSecurity/pom.xml') {
                    sh 'mvn clean install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('AngularFrontendService') {
                   
                    sh 'npm install'
                    sh 'npm run ng build'
                }
            }
        }

        stage('Deploy') {
            steps {
                dir('JavaBackendServiceWithSpringSecurity/target') {
                    
                    sh 'cp *.war C:\\Program Files\\Apache Software Foundation\\Tomcat 10.1\\webapps\\'
                }

                // dir('AngularFrontendService/dist') {
                //     // Deploy the frontend (static files) to a web server or CDN
                //     // For example, you can use rsync to upload the files to a remote server
                //     sh 'rsync -avz . user@server:/path/to/destination/' // Update server and paths
                // }
            }
        }
    }

    post {
        success {
            echo 'Build and deployment successful!'
            
        }
        failure {
            echo 'Build or deployment failed!'
          
        }
    }
}
