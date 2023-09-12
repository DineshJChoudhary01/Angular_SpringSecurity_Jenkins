
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
                dir('JavaBackendServiceWithSpringSecurity') {
                    bat 'mvn clean install'
                }
            }
        }

         stage('Test Backend') {
            steps {
                dir('JavaBackendServiceWithSpringSecurity') {
                    bat 'mvn test'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('AngularFrontendService') {
                    bat 'npm install'
                    bat 'npm run ng build'
                }
            }
        }

        stage('Test Frontend') {
            steps {
                dir('AngularFrontendService') {
                    bat 'npm test --single-run'
                }
            }
        }

        stage('Deploy') {
            steps {
                dir('JavaBackendServiceWithSpringSecurity/target') {
                    bat 'xcopy *.war "C:\\Program Files\\Apache Software Foundation\\Tomcat 10.1\\webapps\\" /Y'
                }

                // dir('AngularFrontendService/dist') {
                //     // Deploy the frontend (static files) to a web server or CDN
                //     // For example, you can use 'xcopy' or other Windows commands to copy files
                //     // sh 'xcopy . user@server:/path/to/destination/' // Update server and paths
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

