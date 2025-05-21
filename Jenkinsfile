pipeline {
    agent any
    tools { nodejs 'Node18' }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo 'Build passed'
            archiveArtifacts artifacts: 'coverage/**', allowEmptyArchive: true
        }
        failure {
            echo 'Build failed'
        }
    }
}
