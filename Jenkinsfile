pipeline {
  agent any
  stages {
    stage('Checkout code ') {
      steps {
        git(url: 'https://github.com/1bduh00/simple-react-app', branch: 'master')
      }
    }

    stage('log') {
      steps {
        sh 'ls -la'
      }
    }

    stage('build') {
      steps {
        sh 'docker build -f myreactapp .'
      }
    }

  }
}