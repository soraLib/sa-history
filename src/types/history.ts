interface SHistoryCreatorOptions {
  enabled: boolean
}

export interface SHistoryCreator {
  <S, O extends SHistoryCreatorOptions>(source: S, options?: O): SHistory<S>
}

export interface SHistory<S> {
  undo: () => S
  redo: () => S

  valueOf: () => S
}
