import React from 'react'
import getCookie from "../axiosCSRF";

export default function CsrfToken() {
    const csrf_token = getCookie('csrftoken')
    return (
        <input type={'hidden'} name={'csrfmiddlewaretoken'} value={csrf_token} />
    )
}