
const createUser = (dispatch: any) => {
    console.log("create user............................")
    // return () => {
    //     dispatch({ type: 'clear_error_messade' })
    // }
}

const deleteSingleUser = (dispatch: any) => {
        console.log("delete single user............................")

    //return async ({ username, email, password }) => {
        // try {
        //     await authApi.post('/users/register', { username, email, password });

        //     dispatch({ type: 'SIGN_UP' })

        // } catch (err) {
        //     dispatch({ type: 'add_error', payload: "Something went wrong with sign up" })
        // }

    //}
}

const deleteAllUsers = (dispatch: any) => {
        console.log("delete all users............................")

    /**
     *       const response = await apiAuth.post('/api/users/login', { "email": email, "password": password })

            console.log(typeof response.data)

            console.log(JSON.stringify(response.data))
            setData({ ...data, hash: JSON.stringify(response.data) })
     */

    //return async (email, password) => {
        // try {
        //     console.log('email: ' + email + ' password: ' + password)
        //     const response = await authApi.post('/users/login', { "email": email, "password": password });
        //     const { accessToken } = response.data
        //     console.log('accessToken ===' + accessToken)
        //     await AsyncStorage.setItem('token', accessToken)
        //     const config = {
        //         headers: { Authorization: `Bearer ${accessToken}` }
        //     };
        //     console.log(accessToken)
        //     const responseUser = await authApi.get('/users/current', config);
        //     console.log("line 123 auth after getting current user === ", JSON.stringify(responseUser))
        //     const currentUsername = responseUser.data.username
        //     const currentEmail = responseUser.data.email
        //     const currentId = responseUser.data.id
        //     console.log("current username === " + currentUsername + "\ncurrent email === " + currentEmail + "\ncurrent id === " + currentId)


        //     dispatch({ type: 'SIGN_IN', payload: { currentUsername, currentEmail, currentId } })

        // } catch (err) {
        //     dispatch({ type: 'add_error', payload: "Something went wrong with sign in" })
        // }

    //}
}

const getSingleUser = (dispatch: any) => {
        console.log("get single user............................")

    // return async () => {
    //     try {
    //         await AsyncStorage.removeItem('token');
    //         dispatch({ type: 'SIGN_OUT' })

    //     } catch (e) {
    //         console.log(e)
    //     }

    // }
}

const getAllUsers = (dispatch: any) => {
        console.log("get all users............................")

    // return async () => {
    //     try {
    //         await AsyncStorage.removeItem('token');
    //         dispatch({ type: 'SIGN_OUT' })

    //     } catch (e) {
    //         console.log(e)
    //     }

    // }
}

const updateUser = (dispatch: any) => {
            console.log("update user............................")

    // return async () => {
    //     try {
    //         await AsyncStorage.removeItem('token');
    //         dispatch({ type: 'SIGN_OUT' })

    //     } catch (e) {
    //         console.log(e)
    //     }

    // }
}


export {getSingleUser, getAllUsers, createUser, updateUser, deleteSingleUser, deleteAllUsers}