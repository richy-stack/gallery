pipeline {
  agent any

  environment {
    NODE_ENV = 'development'
  }

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }

    stage('Deploy to Render') {
      steps {
        sh '''
          curl -X POST https://api.render.com/deploy/srv-d0o1jemmcj7s73e1299g?key=pDJb_AiDNzI
        '''
      }
    }

    stage('Slack Notification') {
      steps {
        slackSend (
          color: '#00FF00',
          message: "✅ Build passed: ${env.JOB_NAME} #${env.BUILD_NUMBER} - ${env.BUILD_URL}"
        )
      }
    }
  }

  post {
    failure {
      slackSend (
        color: '#FF0000',
        message: "❌ Build failed: ${env.JOB_NAME} #${env.BUILD_NUMBER} - ${env.BUILD_URL}"
      )
    }
  }
}
