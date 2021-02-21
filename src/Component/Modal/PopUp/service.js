export const closeModal = ({state, setState}) => {
    const newstate = {...state}
    newstate.modalNotif = false
    setState(newstate)
}
export const showModal = ({state, setState}) => {
    const newstate = {...state}
    newstate.modalNotif = true
    setState(newstate)
}