pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.59.1-noble' } }

   stages {
      stage('Checkout') {
         steps {
            
         }
      }

      stage('Install') {
         steps {
            sh 'npm ci'
         }
      }

      stage('Run Test') {
         steps {
            sh 'npx playwright test --grep purchaseanitem2'
         }
      }

      stage('Publish Report') {
         steps {
            publishHTML([
               reportName: 'Playwright Report',
               reportDir: 'playwright-report',
               reportFiles: 'index.html',
               keepAll: true,
               alwaysLinkToLastBuild: true,
               allowMissing: false
            ])
         }
      }
   }
}