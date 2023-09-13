
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend and Test') {
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
                    // bat 'npm run test --watch=false'
                    // bat 'ng test --watch=false'
                    bat 'npm install -g karma-cli'
                    bat 'npm install karma karma-jasmine'
                    bat 'karma start'
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

        //   stage('Deploy Frontend') {
        //         steps {
        //             dir('AngularFrontendService/dist') {
        //                 bat 'scp -r * myuser@your-web-server-ip:/var/www/html'
        //             }
        //         }
        //     }
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

