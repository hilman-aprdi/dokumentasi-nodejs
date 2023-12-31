import process from 'process'

process.report.reportOnUncaughtException = true
process.report.reportOnFatalError = true
process.report.filename = 'report.json'

function sampleErr() {
  throw new Error('ups...')
}

sampleErr()

