import { createHandler } from '../shared/handler'
import { AppError } from '../shared/errors'

export function stub(name: string) {
  return createHandler(name, async () => {
    throw new AppError('NOT_IMPLEMENTED')
  })
}
