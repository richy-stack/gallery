pipeline {
    agent any
    tools { nodejs 'Node18' }

    stages {
        stage('Install') { steps { sh 'npm install' } }   // ← replace ci with install
        stage('Test')    { steps { sh 'npm test' } }
    }

    post {
        success { echo 'Build passed' }
        failure { echo 'Build failed' }
    }
}
