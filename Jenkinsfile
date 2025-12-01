pipeline {
    agent any

    environment {
        IMAGE_NAME = "demo-nginx"
        IMAGE_TAG = "latest"
        KUBE_DEPLOYMENT = "demo-nginx"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'git@github.com:Scrat1313/Portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${IMAGE_TAG}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                withDockerRegistry([credentialsId: 'dockerhub', url: '']) {
                    docker.image("${IMAGE_NAME}:${IMAGE_TAG}").push()
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh "kubectl set image deployment/${KUBE_DEPLOYMENT} ${KUBE_DEPLOYMENT}=${IMAGE_NAME}:${IMAGE_TAG} --record"
                }
            }
        }
    }
}
