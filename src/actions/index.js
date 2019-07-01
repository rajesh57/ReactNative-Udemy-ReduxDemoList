
// Action creator - its plain Java script object return the fucntion.
// Action -  it has Type and payload property
export const selectLibrary = (libraryId) => {
    return {
        type : 'select_library',
        payload : libraryId
    };
};