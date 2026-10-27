import cloud from 'wx-server-sdk'
import { COLLECTIONS } from './types'

let ready = false

export function initCloud() {
  if (!ready) {
    cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV as unknown as string })
    ready = true
  }
  return cloud
}

export function database() {
  return initCloud().database()
}

export function command() {
  return database().command
}

export function collection(name: (typeof COLLECTIONS)[keyof typeof COLLECTIONS]) {
  return database().collection(name)
}

export type CloudTransaction = any

export async function runTransaction<T>(
  handler: (transaction: CloudTransaction) => Promise<T>,
): Promise<T> {
  return database().runTransaction(handler) as Promise<T>
}
