import { acceptHMRUpdate, defineStore } from 'pinia'
import type { IService } from '~/interfaces'

interface IState {
  services: IService[]
}
export const useServicesStore = defineStore('services', {
  state: (): IState => ({
    services: [

    ],
  }),
  actions: {
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useServicesStore as any, import.meta.hot))
