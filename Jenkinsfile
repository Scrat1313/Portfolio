pipeline {
    agent any
    stages {
        stage('Test Docker') {
            steps {
                script {
                    docker.version()
                }
            }
        }
    }
}
