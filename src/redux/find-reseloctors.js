export const getUsers = (state) => {
    return state.findPage.usersData
}
export const getPageNumber = (state) => {
    return state.findPage.pageNumber
}
export const getPageSize = (state) => {
    return state.findPage.pageSize
}
export const getTotalCount = (state) => {
    return state.findPage.totalCount
}
export const getIsFetching = (state) => {
    return state.findPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.findPage.followingInProgress
}