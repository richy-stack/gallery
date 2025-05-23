pipeline {
    agent any

    environment {
        MONGODB_URI = credentials('MONGODB_ATLAS_URI')
        SLACK_WEBHOOK = credentials('SLACK_WEBHOOK')
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to Render') {
            steps {
                sh './deploy.sh'
            }
        }

        stage('Notify Slack') {
            steps {
                slackSend (
                    webhookUrl: env.SLACK_WEBHOOK,
                    message: "✅ Jenkins Pipeline: Gallery app deployed successfully!",
                    color: '#36a64f'
                )
            }
        }
    }
}
