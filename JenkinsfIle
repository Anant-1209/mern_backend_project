pipeline {
    agent any

    environment {
        SONAR_SCANNER_PATH = 'C:\\Program Files\\sonar-scanner-6.2.1.4610-windows-x64\\bin'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    def nodeHome = tool 'NodeJS' // Use the NodeJS tool configured in Jenkins
                    withEnv(["PATH+NODE=${nodeHome}/bin"]) {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    def nodeHome = tool 'NodeJS'
                    withEnv(["PATH+NODE=${nodeHome}/bin"]) {
                        bat 'npm run build'
                    }
                }
            }
        }

        stage('Sonar Analysis') {
            environment {
                SONAR_TOKEN = credentials('jenkins-backend-project') // Ensure the correct credential ID for backend
            }
            steps {
                script {
                    bat """
                    sonar-scanner ^
                    -Dsonar.projectKey=backend_jenkins_project ^
                    
                    -Dsonar.sources=src ^
                    -Dsonar.exclusions=node_modules/**,build/** ^
                    -Dsonar.host.url=http://localhost:9000 ^
                    -Dsonar.login=%SONAR_TOKEN%
                    """
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
