
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend and Perform Test') {
            steps {
                dir('JavaBackendServiceWithSpringSecurity') {
                    bat 'mvn clean install'
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
                    bat 'npm run test:ci'
                }
            }
        }

        stage('Deploy Backend') {
            steps {
                dir('JavaBackendServiceWithSpringSecurity/target') {
                    bat 'xcopy *.war "C:\\Program Files\\Apache Software Foundation\\Tomcat 10.1\\webapps\\" /Y'
                }

            }
        }

      

        stage('Deploy Frontend') {
                steps {
                    dir('AngularFrontendService') {
                        // bat 'npm start'
                         script {
                        // Add your deployment steps here
                        def deploymentSuccessful = bat script: 'npm start', returnStatus: true
                        if (deploymentSuccessful == 0) {
                            echo 'Frontend deployment successful!'
                        } else {
                            echo 'Frontend deployment failed!'
                        }
                    }
                    }
                }
            }

    }

     post {
        success {
                echo 'Build and deployment successful!'
                emailext subject: 'Jenkins Build Success',
                        body: 'The Jenkins build and deployment were successful.',
                        to: 'dineshjchoudhary01@gmail.com'
            }
            
            failure {
                echo 'Build or deployment failed!'
                emailext subject: 'Jenkins Build Failure',
                        body: 'The Jenkins build or deployment failed.',
                        to: 'dineshjchoudhary01@gmail.com'
            }
        }
}

