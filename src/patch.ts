import { updatedDiff } from 'deep-object-diff'
import { isPlainObject } from './utils/isPlainObject'
import { warning } from './utils/warning'

export interface Patch {
  path: string[]
  oldValue: unknown
  newValue: unknown
}

export const getPatch = <T extends object>(
  source: T,
  target: T
): Patch | null => {
  const diff = updatedDiff(source, target)
  const path = getDiffPath(diff)

  if (path === null) return null

  return {
    path,
    oldValue: getPathValue(source, path),
    newValue: getPathValue(target, path),
  }
}

export const getDiffPath = <T extends object>(diff: T) => {
  function findTrueDiifPath(value: unknown, paths: string[]): string[] | null {
    if (isPlainObject(value)) {
      const keys = Reflect.ownKeys(value) as string[]

      if (keys.length > 1) {
        warning('unexpected object with over one updated values.')

        return null
      }

      const exPath = keys[0] as keyof typeof value

      return findTrueDiifPath(value[exPath], [...paths, exPath])
    }

    return paths
  }

  return findTrueDiifPath(diff, [])
}

export const getPathValue = (o: any, paths: string[]) =>
  paths.reduce((prev, path) => prev[path], o)
