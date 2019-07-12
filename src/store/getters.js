const getters = {
    isAutentivated:state=>state.isAutenticated,
    user:state=>state.user,
    appName:state=>state.appName,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    token: state => state.user.token,
    permission_routes: state => state.permission.routes,
  }
export default getters
  