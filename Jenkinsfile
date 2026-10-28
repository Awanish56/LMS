pipeline {
    agent any

    options {
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Push Images') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-credentials',
                        usernameVariable: 'DOCKERHUB_USERNAME',
                        passwordVariable: 'DOCKERHUB_TOKEN'
                    )
                ]) {
                    sh '''
                        set -eu

                        printf '%s' "$DOCKERHUB_TOKEN" |
                            docker login --username "$DOCKERHUB_USERNAME" --password-stdin

                        docker build \
                            -f client/dockerfile \
                            -t "$DOCKERHUB_USERNAME/lms-frontend:$BUILD_NUMBER" \
                            -t "$DOCKERHUB_USERNAME/lms-frontend:latest" \
                            client

                        docker build \
                            -f server/dockerfile \
                            -t "$DOCKERHUB_USERNAME/lms-backend:$BUILD_NUMBER" \
                            -t "$DOCKERHUB_USERNAME/lms-backend:latest" \
                            server

                        docker push "$DOCKERHUB_USERNAME/lms-frontend:$BUILD_NUMBER"
                        docker push "$DOCKERHUB_USERNAME/lms-frontend:latest"
                        docker push "$DOCKERHUB_USERNAME/lms-backend:$BUILD_NUMBER"
                        docker push "$DOCKERHUB_USERNAME/lms-backend:latest"

                        docker logout
                    '''
                }
            }
        }
    }

    post {
        always {
            sh 'docker logout || true'
        }
    }
}