import { observable, action, runInAction, toJS } from 'mobx'
import { fetchPost, fetchGet } from '../utillities/ServiceUtil'

class ConferenceManagementStore {




}

const conferenceManagementStore = new ConferenceManagementStore()
const conferenceManagementStoreContext = createContext(conferenceManagementStore)
const useConferenceManagementStore = () => useContext(conferenceManagementStoreContext)

export default useConferenceManagementStore