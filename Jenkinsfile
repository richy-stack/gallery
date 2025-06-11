pipeline {
    agent any

    environment {
        MONGO_URI = credentials('MONGO_URI') // your MongoDB Atlas URI from Jenkins credentials
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
                sh 'curl -X POST "https://api.render.com/deploy/srv-d0k7j78gjchc73a6l740?key=rnd_TrJE8optGXBVX45"'
            }
        }
    }

    post {
        success {
            script {
                def slackMethod = this.metaClass.getMetaMethod('slackSend', [Map] as Object[])
                if (slackMethod) {
                    slackSend(channel: '#general', message: "✅ Jenkins pipeline completed successfully.")
                } else {
                    echo "⚠️ Slack plugin not available. Skipping Slack success notification."
                }
            }
        }

        failure {
            script {
                def slackMethod = this.metaClass.getMetaMethod('slackSend', [Map] as Object[])
                if (slackMethod) {
                    slackSend(channel: '#general', message: "❌ Jenkins pipeline failed.")
                } else {
                    echo "⚠️ Slack plugin not available. Skipping Slack failure notification."
                }
            }
        }
    }
}
 
