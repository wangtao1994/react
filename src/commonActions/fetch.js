export function actionCreate(witchTab) {
    return {
        type: 'CHANGE_TAB',
        payload: {selectedTab: witchTab}
    }
}