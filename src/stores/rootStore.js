import React from "react"
import { configure } from "mobx"
import { ConferenceManagementStore } from './conferenceManagementStore'
configure({ enforceActions: "observed" })

const stores = React.createContext({
    ConferenceManagementStore: new conferenceManagementStore()


})

export const useStores = () => React.useContext(stores)