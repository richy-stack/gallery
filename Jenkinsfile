pipeline {
    agent any
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Archive Coverage Reports') {
            steps {
                archiveArtifacts artifacts: 'coverage/**', fingerprint: true
            }
        }
    }
}
