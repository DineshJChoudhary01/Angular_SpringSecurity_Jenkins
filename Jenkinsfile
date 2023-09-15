
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend, Perform Test and Send Mail') {
            steps {
                dir('JavaBackendServiceWithSpringSecurity') {
                    bat 'mvn clean install'
                }
                  emailext subject: 'Backend Deployment Successful',
                        body: 'The backend was successfully deployed.',
                        to: 'dinesh.choudhary@unoveo.com'
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

        stage('Start Tomcat') {
             steps {
                 bat '''
                        set TOMCAT_HOME=C:\\Program Files\\Apache Software Foundation\\Tomcat 10.1
                        set START_SCRIPT=%TOMCAT_HOME%\\bin\\startup.bat
                        set CATALINA_HOME=C:\\Program Files\\Apache Software Foundation\\Tomcat 10.1

                        if exist "%START_SCRIPT%" (
                            echo Starting Tomcat...
                            call "%START_SCRIPT%"
                            
                            echo Tomcat started
                        ) else (
                            echo Tomcat startup script not found at "%START_SCRIPT%"
                            exit /b 1
                        )
                    '''
                    
                }

                
            }

        stage('Deploy Frontend and Send Mail') {
                steps {
                    dir('AngularFrontendService') {
                        // bat 'npm start'                   
                        // def deploymentSuccessful = bat script: 'npm start', returnStatus: true
                
                       script {
                        
                        def frontendProcess = bat(script: 'start /B npm start', returnStatus: true)

                        if (frontendProcess == 0) {
                            echo 'Frontend server started successfully!'
                        } else {
                            error 'Failed to start frontend server!'
                        }
                    }
                    
                    }
                    emailext subject: 'Frontend Deployment Successful and Server Started',
                        body: 'The frontkend was successfully deployed and server started.',
                        to: 'dinesh.choudhary@unoveo.com'
                }
              
            }

            

                stage('Demo Approval') {
                input {
                    message 'Pause for Demo: Click "Proceed" to continue.'
                    ok 'Proceed'
                }
                steps {
                    echo 'Demo Approved. Resuming the pipeline.'
                }
            }

    }

     post {
        success {
                echo 'Build and deployment successful!'
                emailext subject: 'Jenkins Build Success',
                        body: 'The Jenkins build and deployment were successful.',
                        to: 'dinesh.choudhary@unoveo.com'
                        
            }
            
            failure {
                echo 'Build or deployment failed!'
                emailext subject: 'Jenkins Build Failure',
                        body: 'The Jenkins build or deployment failed.',
                        to: 'dinesh.choudhary@unoveo.com'
                        
            }
        }
}



