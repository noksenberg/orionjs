import daemon from './daemon'
import JobsCollection from './JobsCollection'
import initJobs from './initJobs'

export default async function (jobs, workersCount = 4) {
  // dont run jobs in test env
  if (process.env.ORION_TEST) return

  await JobsCollection.await()

  await initJobs(jobs)

  global.jobs = jobs

  // starts the daemon
  daemon({
    workersCount,
    jobs
  })
}
