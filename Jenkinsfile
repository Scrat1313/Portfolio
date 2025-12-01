pipeline {
    agent any

    environment {
        IMAGE_NAME = "demo-nginx"
        IMAGE_TAG = "latest"
        KUBE_DEPLOYMENT = "demo-nginx"
    }

    stages {
        stage('Checkout GitHub') {
            steps {
                git url: 'git@github.com:Scrat1313/Portfolio.git', credentialsId: 'github-ssh', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Construire l'image Docker locale
                    docker.build("${IMAGE_NAME}:${IMAGE_TAG}")
                }
            }
        }

        stage('Deploy to k3d Kubernetes') {
            steps {
                script {
                    // Déployer sur le cluster k3d
                    sh "kubectl set image deployment/${KUBE_DEPLOYMENT} ${KUBE_DEPLOYMENT}=${IMAGE_NAME}:${IMAGE_TAG} --record || kubectl create deployment ${KUBE_DEPLOYMENT} --image=${IMAGE_NAME}:${IMAGE_TAG}"
                    
                    // Exposer le service si pas déjà fait
                    sh "kubectl expose deployment ${KUBE_DEPLOYMENT} --type=NodePort --port=80 --target-port=80 || echo 'Service already exists'"
                }
            }
        }
    }
}
