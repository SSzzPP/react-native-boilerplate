import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree';

export const SettingsStoreModel = types
  .model('SettingsStore')
  .props({})
  .actions(() => ({}));

export interface SettingsStore extends Instance<typeof SettingsStoreModel> {}
export interface SettingsStoreSnapshotOut extends SnapshotOut<typeof SettingsStoreModel> {}
export interface SettingsStoreSnapshotIn extends SnapshotIn<typeof SettingsStoreModel> {}
export const createSettingsStoreDefaultModel = () => types.optional(SettingsStoreModel, {});
