
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

        // stage('Start Tomcat') {
        //      steps {
        //          bat '''
        //                 set TOMCAT_HOME=C:\\Program Files\\Apache Software Foundation\\Tomcat 10.1
        //                 set START_SCRIPT=%TOMCAT_HOME%\\bin\\startup.bat

        //                 if exist "%START_SCRIPT%" (
        //                     call "%START_SCRIPT%"
        //                 ) else (
        //                     echo Tomcat startup script not found at "%START_SCRIPT%"
        //                     exit /b 1
        //                 )
        //             '''
        //         }
        //     }

        stage('Deploy Frontend') {
                steps {
                    dir('AngularFrontendService') {
                        // bat 'npm start'
                    //      script {
                        
                    //     def deploymentSuccessful = bat script: 'npm start', returnStatus: true
                    //     if (deploymentSuccessful == 0) {
                    //         echo 'Frontend deployment successful!'
                    //     } else {
                    //         echo 'Frontend deployment failed!'
                    //     }
                    // }
                       script {
                        // Start the npm server in the background
                        def frontendProcess = bat(script: 'start /B npm start', returnStatus: true)

                        if (frontendProcess == 0) {
                            echo 'Frontend server started successfully!'
                        } else {
                            error 'Failed to start frontend server!'
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



                // script {
                //         // Start the frontend development server in the background
                //         def frontendProcess = bat(script: 'npm start &', returnStatus: true)
                        
                //         // Sleep for a while to allow the server to start (adjust the duration as needed)
                //         sleep time: 30, unit: 'SECONDS'
                        
                //         if (frontendProcess == 0) {
                //             echo 'Frontend deployment started successfully!'
                //         } else {
                //             echo 'Frontend deployment failed to start!'
                //         }
                //     }


                //  script {
                //         // Start the npm server in the background
                //         def frontendProcess = bat(script: 'start /B npm start', returnStatus: true)

                //         if (frontendProcess == 0) {
                //             echo 'Frontend server started successfully!'
                //         } else {
                //             error 'Failed to start frontend server!'
                //         }
                //     }